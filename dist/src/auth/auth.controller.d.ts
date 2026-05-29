import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import type { AuthUser } from './interfaces/auth-user.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    getProfile(user: AuthUser): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        companyId: string | null;
    }>;
}
