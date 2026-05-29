"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const user_select_1 = require("../common/constants/user-select");
const role_enum_1 = require("../common/enums/role.enum");
const ticket_status_enum_1 = require("../common/enums/ticket-status.enum");
const prisma_service_1 = require("../database/prisma.service");
let DashboardService = class DashboardService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getStats(user) {
        const baseWhere = {};
        if (user.role === role_enum_1.Role.CUSTOMER) {
            baseWhere.createdById = user.id;
        }
        else if (user.role === role_enum_1.Role.AGENT) {
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
                where: { ...baseWhere, status: ticket_status_enum_1.TicketStatus.OPEN },
            }),
            this.prisma.ticket.count({
                where: { ...baseWhere, status: ticket_status_enum_1.TicketStatus.IN_PROGRESS },
            }),
            this.prisma.ticket.count({
                where: { ...baseWhere, status: ticket_status_enum_1.TicketStatus.RESOLVED },
            }),
            this.prisma.ticket.count({
                where: { ...baseWhere, status: ticket_status_enum_1.TicketStatus.CLOSED },
            }),
        ]);
        const users = user.role === role_enum_1.Role.ADMIN
            ? await this.prisma.user.count()
            : undefined;
        const ticketsByAgent = user.role === role_enum_1.Role.ADMIN
            ? await this.prisma.ticket.groupBy({
                by: ['assignedToId'],
                where: { ...baseWhere, assignedToId: { not: null } },
                _count: { id: true },
            })
            : [];
        const agentIds = ticketsByAgent
            .map((g) => g.assignedToId)
            .filter((id) => id !== null);
        const agents = agentIds.length > 0
            ? await this.prisma.user.findMany({
                where: { id: { in: agentIds } },
                select: user_select_1.userPublicSelect,
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
                createdBy: { select: user_select_1.userPublicSelect },
                assignedTo: { select: user_select_1.userPublicSelect },
            },
        });
        return {
            tickets: { total, open, inProgress, resolved, closed },
            users,
            ticketsByAgent: ticketsByAgentNamed,
            recentActivity,
        };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map