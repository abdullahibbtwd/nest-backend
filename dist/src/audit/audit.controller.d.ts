import { AuditService } from './audit.service';
export declare class AuditController {
    private readonly auditService;
    constructor(auditService: AuditService);
    findRecent(limit?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        user: {
            id: string;
            name: string;
            email: string;
            role: import("../../generated/prisma/enums").Role;
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        action: string;
        entity: string;
        entityId: string;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
    })[]>;
}
