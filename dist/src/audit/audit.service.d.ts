import { Prisma } from '../../generated/prisma/client';
import { PrismaService } from '../database/prisma.service';
export declare class AuditService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    log(userId: string, action: string, entity: string, entityId: string, metadata?: Prisma.InputJsonValue): Prisma.Prisma__AuditLogClient<{
        id: string;
        action: string;
        entity: string;
        entityId: string;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        createdAt: Date;
        userId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    findRecent(limit?: number): Prisma.PrismaPromise<({
        user: {
            id: string;
            name: string;
            email: string;
            role: import("../../generated/prisma/enums").Role;
        };
    } & {
        id: string;
        action: string;
        entity: string;
        entityId: string;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        createdAt: Date;
        userId: string;
    })[]>;
}
