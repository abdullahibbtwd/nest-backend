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
exports.TicketsService = void 0;
const common_1 = require("@nestjs/common");
const user_select_1 = require("../common/constants/user-select");
const role_enum_1 = require("../common/enums/role.enum");
const audit_service_1 = require("../audit/audit.service");
const prisma_service_1 = require("../database/prisma.service");
const ticketInclude = {
    createdBy: { select: user_select_1.userPublicSelect },
    assignedTo: { select: user_select_1.userPublicSelect },
    company: { select: { id: true, name: true } },
    _count: { select: { comments: true } },
};
let TicketsService = class TicketsService {
    prisma;
    audit;
    constructor(prisma, audit) {
        this.prisma = prisma;
        this.audit = audit;
    }
    async findAll(user, filters) {
        const where = {};
        if (user.role === role_enum_1.Role.CUSTOMER) {
            where.createdById = user.id;
        }
        else if (user.role === role_enum_1.Role.AGENT) {
            if (!user.companyId) {
                throw new common_1.ForbiddenException('No company assigned');
            }
            where.companyId = user.companyId;
        }
        if (filters?.status)
            where.status = filters.status;
        if (filters?.priority)
            where.priority = filters.priority;
        if (filters?.assignedToId && user.role === role_enum_1.Role.ADMIN) {
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
    async findOne(id, user) {
        const where = { id };
        if (user.role === role_enum_1.Role.CUSTOMER) {
            where.createdById = user.id;
        }
        else if (user.role === role_enum_1.Role.AGENT) {
            if (!user.companyId) {
                throw new common_1.ForbiddenException('No company assigned');
            }
            where.companyId = user.companyId;
        }
        const ticket = await this.prisma.ticket.findFirst({
            where,
            include: {
                ...ticketInclude,
                comments: {
                    include: { author: { select: user_select_1.userPublicSelect } },
                    orderBy: { createdAt: 'asc' },
                },
            },
        });
        if (!ticket) {
            throw new common_1.NotFoundException('Ticket not found');
        }
        if (user.role === role_enum_1.Role.CUSTOMER && ticket.createdById !== user.id) {
            throw new common_1.ForbiddenException('Access denied');
        }
        return ticket;
    }
    async create(dto, user) {
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
    async resolveAgentForCompany(companyId) {
        const agent = await this.prisma.user.findFirst({
            where: { companyId, role: role_enum_1.Role.AGENT },
            select: { id: true },
        });
        if (!agent) {
            throw new common_1.NotFoundException('No agent found for this company. Ask admin to add an agent.');
        }
        return agent.id;
    }
    async resolveCompanyIdForCreate(dto) {
        const company = await this.prisma.company.findUnique({
            where: { id: dto.companyId },
        });
        if (!company) {
            throw new common_1.NotFoundException('Company not found');
        }
        return company.id;
    }
    async update(id, dto, user) {
        await this.findOne(id, user);
        const ticket = await this.prisma.ticket.update({
            where: { id },
            data: dto,
            include: ticketInclude,
        });
        await this.audit.log(user.id, 'UPDATE', 'Ticket', id, dto);
        return ticket;
    }
    async assign(id, dto, user) {
        if (user.role !== role_enum_1.Role.ADMIN) {
            throw new common_1.ForbiddenException('Only admins can assign tickets');
        }
        const ticket = await this.findOne(id, user);
        const agent = await this.prisma.user.findFirst({
            where: {
                id: dto.assignedToId,
                companyId: ticket.companyId,
                role: role_enum_1.Role.AGENT,
            },
        });
        if (!agent) {
            throw new common_1.NotFoundException('Agent not found for this ticket\'s company');
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
};
exports.TicketsService = TicketsService;
exports.TicketsService = TicketsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService])
], TicketsService);
//# sourceMappingURL=tickets.service.js.map