import { Injectable } from '@nestjs/common';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { userPublicSelect } from '../common/constants/user-select';
import { Role } from '../common/enums/role.enum';
import { TicketStatus } from '../common/enums/ticket-status.enum';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getStats(user: AuthUser) {
    const baseWhere: Record<string, unknown> = {};

    if (user.role === Role.CUSTOMER) {
      baseWhere.createdById = user.id;
    } else if (user.role === Role.AGENT) {
      if (!user.companyId) {
        return {
          tickets: { total: 0, open: 0, inProgress: 0, resolved: 0, closed: 0 },
          recentActivity: [],
        };
      }
      baseWhere.companyId = user.companyId;
    }

    const [total, open, inProgress, resolved, closed] = await Promise.all([
      this.prisma.ticket.count({ where: baseWhere }),
      this.prisma.ticket.count({
        where: { ...baseWhere, status: TicketStatus.OPEN },
      }),
      this.prisma.ticket.count({
        where: { ...baseWhere, status: TicketStatus.IN_PROGRESS },
      }),
      this.prisma.ticket.count({
        where: { ...baseWhere, status: TicketStatus.RESOLVED },
      }),
      this.prisma.ticket.count({
        where: { ...baseWhere, status: TicketStatus.CLOSED },
      }),
    ]);

    const users =
      user.role === Role.ADMIN
        ? await this.prisma.user.count()
        : undefined;

    const ticketsByAgent =
      user.role === Role.ADMIN
        ? await this.prisma.ticket.groupBy({
            by: ['assignedToId'],
            where: { ...baseWhere, assignedToId: { not: null } },
            _count: { id: true },
          })
        : [];

    const agentIds = ticketsByAgent
      .map((g) => g.assignedToId)
      .filter((id): id is string => id !== null);

    const agents =
      agentIds.length > 0
        ? await this.prisma.user.findMany({
            where: { id: { in: agentIds } },
            select: userPublicSelect,
          })
        : [];

    const ticketsByAgentNamed = ticketsByAgent.map((g) => ({
      count: g._count.id,
      agent: agents.find((a) => a.id === g.assignedToId) ?? null,
    }));

    const recentActivity = await this.prisma.ticket.findMany({
      where: baseWhere,
      take: 8,
      orderBy: { updatedAt: 'desc' },
      include: {
        createdBy: { select: userPublicSelect },
        assignedTo: { select: userPublicSelect },
      },
    });

    return {
      tickets: { total, open, inProgress, resolved, closed },
      users,
      ticketsByAgent: ticketsByAgentNamed,
      recentActivity,
    };
  }
}
