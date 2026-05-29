import type { AuthUser } from '../auth/interfaces/auth-user.interface';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompaniesController {
    private readonly companiesService;
    constructor(companiesService: CompaniesService);
    findAllForRegistration(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
    }[]>;
    findOptions(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
    }[]>;
    findMine(user: AuthUser): import("../../generated/prisma/models").Prisma__CompanyClient<({
        _count: {
            tickets: number;
            users: number;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }> | null;
    findOne(id: string, user: AuthUser): Promise<{
        id: string;
        name: string;
        createdAt: Date;
    }>;
    create(dto: CreateCompanyDto): import("../../generated/prisma/models").Prisma__CompanyClient<{
        id: string;
        name: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, dto: UpdateCompanyDto, user: AuthUser): Promise<{
        id: string;
        name: string;
        createdAt: Date;
    }>;
}
