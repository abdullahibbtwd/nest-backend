import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(user: AuthUser): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        companyId: string | null;
    }[]>;
    findOne(id: string, user: AuthUser): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        companyId: string | null;
    }>;
    create(dto: CreateUserDto, user: AuthUser): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        companyId: string | null;
    }>;
    update(id: string, dto: UpdateUserDto, user: AuthUser): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        companyId: string | null;
    }>;
}
