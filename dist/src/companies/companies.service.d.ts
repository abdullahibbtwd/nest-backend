import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { PrismaService } from '../database/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompaniesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForRegistration(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
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
