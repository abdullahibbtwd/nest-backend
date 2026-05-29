import { JwtService } from '@nestjs/jwt';
import { AuditService } from '../audit/audit.service';
import { PrismaService } from '../database/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly audit;
    constructor(prisma: PrismaService, jwtService: JwtService, audit: AuditService);
    login(dto: LoginDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string;
            name: string;
            role: string;
            companyId: string | null;
            createdAt: Date;
        };
    }>;
    register(dto: RegisterDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string;
            name: string;
            role: string;
            companyId: string | null;
            createdAt: Date;
        };
    }>;
    private buildAuthResponse;
    getProfile(userId: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        companyId: string | null;
    }>;
}
