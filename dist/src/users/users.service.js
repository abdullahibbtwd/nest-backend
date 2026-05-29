"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcryptjs"));
const user_select_1 = require("../common/constants/user-select");
const role_enum_1 = require("../common/enums/role.enum");
const prisma_service_1 = require("../database/prisma.service");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(user) {
        if (user.role !== role_enum_1.Role.ADMIN) {
            throw new common_1.ForbiddenException('Only admins can list users');
        }
        return this.prisma.user.findMany({
            select: user_select_1.userPublicSelect,
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id, user) {
        const found = await this.prisma.user.findFirst({
            where: { id },
            select: user_select_1.userPublicSelect,
        });
        if (!found) {
            throw new common_1.NotFoundException('User not found');
        }
        return found;
    }
    async create(dto, user) {
        if (user.role !== role_enum_1.Role.ADMIN) {
            throw new common_1.ForbiddenException('Only admins can create users');
        }
        const existing = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (existing) {
            throw new common_1.ConflictException('Email already in use');
        }
        if (dto.role === role_enum_1.Role.AGENT && !dto.companyId) {
            throw new common_1.ConflictException('Company is required for agents');
        }
        const hashed = await bcrypt.hash(dto.password, 10);
        return this.prisma.user.create({
            data: {
                email: dto.email,
                password: hashed,
                name: dto.name,
                role: dto.role,
                companyId: dto.role === role_enum_1.Role.AGENT ? dto.companyId : null,
            },
            select: user_select_1.userPublicSelect,
        });
    }
    async update(id, dto, user) {
        if (user.role !== role_enum_1.Role.ADMIN) {
            throw new common_1.ForbiddenException('Only admins can update users');
        }
        const existing = await this.prisma.user.findFirst({
            where: { id },
        });
        if (!existing) {
            throw new common_1.NotFoundException('User not found');
        }
        const { password, ...rest } = dto;
        const data = { ...rest };
        if (password) {
            Object.assign(data, { password: await bcrypt.hash(password, 10) });
        }
        return this.prisma.user.update({
            where: { id },
            data,
            select: user_select_1.userPublicSelect,
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map