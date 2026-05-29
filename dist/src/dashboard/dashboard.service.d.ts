import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { PrismaService } from '../database/prisma.service';
export declare class DashboardService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getStats(user: AuthUser): Promise<{
        tickets: {
            total: number;
            open: number;
            inProgress: number;
            resolved: number;
            closed: number;
        };
        recentActivity: never[];
        users?: undefined;
        ticketsByAgent?: undefined;
    } | {
        tickets: {
            total: number;
            open: number;
            inProgress: number;
            resolved: number;
            closed: number;
        };
        users: number | undefined;
        ticketsByAgent: {
            count: number;
            agent: {
                id: string;
                name: string;
                createdAt: Date;
                email: string;
                role: import("../../generated/prisma/enums").Role;
                companyId: string | null;
            } | null;
        }[];
        recentActivity: ({
            createdBy: {
                id: string;
                name: string;
                createdAt: Date;
                email: string;
                role: import("../../generated/prisma/enums").Role;
                companyId: string | null;
            };
            assignedTo: {
                id: string;
                name: string;
                createdAt: Date;
                email: string;
                role: import("../../generated/prisma/enums").Role;
                companyId: string | null;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            companyId: string;
            title: string;
            description: string;
            status: import("../../generated/prisma/enums").TicketStatus;
            priority: import("../../generated/prisma/enums").TicketPriority;
            createdById: string;
            assignedToId: string | null;
            updatedAt: Date;
        })[];
    }>;
}
