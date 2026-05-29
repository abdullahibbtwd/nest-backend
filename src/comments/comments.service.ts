import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { userPublicSelect } from '../common/constants/user-select';
import { Role } from '../common/enums/role.enum';
import { AuditService } from '../audit/audit.service';
import { PrismaService } from '../database/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async findByTicket(ticketId: string, user: AuthUser) {
    await this.assertTicketAccess(ticketId, user);
    return this.prisma.comment.findMany({
      where: { ticketId },
      include: { author: { select: userPublicSelect } },
      orderBy: { createdAt: 'asc' },
    });
  }

  async create(ticketId: string, dto: CreateCommentDto, user: AuthUser) {
    await this.assertTicketAccess(ticketId, user);
    const comment = await this.prisma.comment.create({
      data: {
        message: dto.message,
        ticketId,
        authorId: user.id,
      },
      include: { author: { select: userPublicSelect } },
    });
    await this.audit.log(user.id, 'COMMENT', 'Ticket', ticketId, {
      commentId: comment.id,
    });
    return comment;
  }

  private async assertTicketAccess(ticketId: string, user: AuthUser) {
    const where: { id: string; createdById?: string; companyId?: string } = {
      id: ticketId,
    };
    if (user.role === Role.CUSTOMER) {
      where.createdById = user.id;
    } else if (user.role === Role.AGENT) {
      if (!user.companyId) {
        throw new ForbiddenException('No company assigned');
      }
      where.companyId = user.companyId;
    }

    const ticket = await this.prisma.ticket.findFirst({ where });

    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    if (user.role === Role.CUSTOMER && ticket.createdById !== user.id) {
      throw new ForbiddenException('Access denied');
    }

    return ticket;
  }
}
