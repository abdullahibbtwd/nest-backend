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
exports.CompaniesService = void 0;
const common_1 = require("@nestjs/common");
const role_enum_1 = require("../common/enums/role.enum");
const prisma_service_1 = require("../database/prisma.service");
let CompaniesService = class CompaniesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForRegistration() {
        return this.prisma.company.findMany({
            select: { id: true, name: true },
            orderBy: { name: 'asc' },
        });
    }
    findMine(user) {
        if (!user.companyId) {
            return null;
        }
        return this.prisma.company.findFirst({
            where: { id: user.companyId },
            include: { _count: { select: { users: true, tickets: true } } },
        });
    }
    async findOne(id, user) {
        if (id !== user.companyId) {
            throw new common_1.ForbiddenException('Access denied');
        }
        const company = await this.prisma.company.findUnique({ where: { id } });
        if (!company) {
            throw new common_1.NotFoundException('Company not found');
        }
        return company;
    }
    create(dto) {
        return this.prisma.company.create({ data: { name: dto.name } });
    }
    async update(id, dto, user) {
        if (id !== user.companyId) {
            throw new common_1.ForbiddenException('Access denied');
        }
        if (user.role !== role_enum_1.Role.ADMIN) {
            throw new common_1.ForbiddenException('Only admins can update company');
        }
        return this.prisma.company.update({
            where: { id },
            data: dto,
        });
    }
};
exports.CompaniesService = CompaniesService;
exports.CompaniesService = CompaniesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CompaniesService);
//# sourceMappingURL=companies.service.js.map