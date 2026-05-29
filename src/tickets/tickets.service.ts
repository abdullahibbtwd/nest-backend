import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { userPublicSelect } from '../common/constants/user-select';
import { Role } from '../common/enums/role.enum';
import { AuditService } from '../audit/audit.service';
import { PaginatedResult } from '../common/interfaces/paginated-result.interface';
import { PrismaService } from '../database/prisma.service';
import { AssignTicketDto } from './dto/assign-ticket.dto';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { TicketFilterDto } from './dto/ticket-filter.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

const ticketInclude = {
  createdBy: { select: userPublicSelect },
  assignedTo: { select: userPublicSelect },
  company: { select: { id: true, name: true } },
  _count: { select: { comments: true } },
} satisfies Prisma.TicketInclude;

@Injectable()
export class TicketsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async findAll(
    user: AuthUser,
    filters?: TicketFilterDto,
  ): Promise<PaginatedResult<unknown>> {
    const where: Prisma.TicketWhereInput = {};

    if (user.role === Role.CUSTOMER) {
      where.createdById = user.id;
    } else if (user.role === Role.AGENT) {
      if (!user.companyId) {
        throw new ForbiddenException('No company assigned');
      }
      where.companyId = user.companyId;
    }
    // Platform admin: no company filter — sees all tickets

    if (filters?.status) where.status = filters.status;
    if (filters?.priority) where.priority = filters.priority;
    if (filters?.assignedToId && user.role === Role.ADMIN) {
      where.assignedToId = filters.assignedToId;
    }
    if (filters?.search) {
      where.OR = [
        { title: { contains: filters.search, mode: 'insensitive' } },
        { description: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    const page = filters?.page ?? 1;
    const limit = filters?.limit ?? 10;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.ticket.findMany({
        where,
        include: ticketInclude,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.ticket.count({ where }),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit) || 1,
    };
  }

  async findOne(id: string, user: AuthUser) {
    const where: Prisma.TicketWhereInput = { id };
    if (user.role === Role.CUSTOMER) {
      where.createdById = user.id;
    } else if (user.role === Role.AGENT) {
      if (!user.companyId) {
        throw new ForbiddenException('No company assigned');
      }
      where.companyId = user.companyId;
    }

    const ticket = await this.prisma.ticket.findFirst({
      where,
      include: {
        ...ticketInclude,
        comments: {
          include: { author: { select: userPublicSelect } },
          orderBy: { createdAt: 'asc' },
        },
      },
    });

    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    if (user.role === Role.CUSTOMER && ticket.createdById !== user.id) {
      throw new ForbiddenException('Access denied');
    }

    return ticket;
  }

  async create(dto: CreateTicketDto, user: AuthUser) {
    const companyId = await this.resolveCompanyIdForCreate(dto);
    const assignedToId = await this.resolveAgentForCompany(companyId);

    const ticket = await this.prisma.ticket.create({
      data: {
        title: dto.title,
        description: dto.description,
        priority: dto.priority,
        companyId,
        createdById: user.id,
        assignedToId,
      },
      include: ticketInclude,
    });

    await this.audit.log(user.id, 'CREATE', 'Ticket', ticket.id, {
      title: ticket.title,
      companyId,
      assignedToId,
    });

    return ticket;
  }

  /** Each company has one agent — new tickets auto-assign so agents can see them. */
  private async resolveAgentForCompany(companyId: string): Promise<string> {
    const agent = await this.prisma.user.findFirst({
      where: { companyId, role: Role.AGENT },
      select: { id: true },
    });
    if (!agent) {
      throw new NotFoundException(
        'No agent found for this company. Ask admin to add an agent.',
      );
    }
    return agent.id;
  }

  private async resolveCompanyIdForCreate(
    dto: CreateTicketDto,
  ): Promise<string> {
    const company = await this.prisma.company.findUnique({
      where: { id: dto.companyId },
    });
    if (!company) {
      throw new NotFoundException('Company not found');
    }
    return company.id;
  }

  async update(id: string, dto: UpdateTicketDto, user: AuthUser) {
    await this.findOne(id, user);
    const ticket = await this.prisma.ticket.update({
      where: { id },
      data: dto,
      include: ticketInclude,
    });
    await this.audit.log(user.id, 'UPDATE', 'Ticket', id, dto as object);
    return ticket;
  }

  async assign(id: string, dto: AssignTicketDto, user: AuthUser) {
    if (user.role !== Role.ADMIN) {
      throw new ForbiddenException('Only admins can assign tickets');
    }

    const ticket = await this.findOne(id, user);

    const agent = await this.prisma.user.findFirst({
      where: {
        id: dto.assignedToId,
        companyId: ticket.companyId,
        role: Role.AGENT,
      },
    });
    if (!agent) {
      throw new NotFoundException(
        'Agent not found for this ticket\'s company',
      );
    }
    const updated = await this.prisma.ticket.update({
      where: { id },
      data: { assignedToId: dto.assignedToId },
      include: ticketInclude,
    });
    await this.audit.log(user.id, 'ASSIGN', 'Ticket', id, {
      assignedToId: dto.assignedToId,
    });
    return updated;
  }
}
