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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const user_select_1 = require("../common/constants/user-select");
const role_enum_1 = require("../common/enums/role.enum");
const audit_service_1 = require("../audit/audit.service");
const prisma_service_1 = require("../database/prisma.service");
let CommentsService = class CommentsService {
    prisma;
    audit;
    constructor(prisma, audit) {
        this.prisma = prisma;
        this.audit = audit;
    }
    async findByTicket(ticketId, user) {
        await this.assertTicketAccess(ticketId, user);
        return this.prisma.comment.findMany({
            where: { ticketId },
            include: { author: { select: user_select_1.userPublicSelect } },
            orderBy: { createdAt: 'asc' },
        });
    }
    async create(ticketId, dto, user) {
        await this.assertTicketAccess(ticketId, user);
        const comment = await this.prisma.comment.create({
            data: {
                message: dto.message,
                ticketId,
                authorId: user.id,
            },
            include: { author: { select: user_select_1.userPublicSelect } },
        });
        await this.audit.log(user.id, 'COMMENT', 'Ticket', ticketId, {
            commentId: comment.id,
        });
        return comment;
    }
    async assertTicketAccess(ticketId, user) {
        const where = {
            id: ticketId,
        };
        if (user.role === role_enum_1.Role.CUSTOMER) {
            where.createdById = user.id;
        }
        else if (user.role === role_enum_1.Role.AGENT) {
            if (!user.companyId) {
                throw new common_1.ForbiddenException('No company assigned');
            }
            where.companyId = user.companyId;
        }
        const ticket = await this.prisma.ticket.findFirst({ where });
        if (!ticket) {
            throw new common_1.NotFoundException('Ticket not found');
        }
        if (user.role === role_enum_1.Role.CUSTOMER && ticket.createdById !== user.id) {
            throw new common_1.ForbiddenException('Access denied');
        }
        return ticket;
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService])
], CommentsService);
//# sourceMappingURL=comments.service.js.map