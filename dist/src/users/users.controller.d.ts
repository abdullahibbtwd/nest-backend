import type { AuthUser } from '../auth/interfaces/auth-user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(user: AuthUser): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        name: string;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        companyId: string | null;
    }[]>;
    findOne(id: string, user: AuthUser): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        companyId: string | null;
    }>;
    create(dto: CreateUserDto, user: AuthUser): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        companyId: string | null;
    }>;
    update(id: string, dto: UpdateUserDto, user: AuthUser): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        companyId: string | null;
    }>;
}
