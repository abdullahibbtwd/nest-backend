import type { AuthUser } from '../auth/interfaces/auth-user.interface';
import { AssignTicketDto } from './dto/assign-ticket.dto';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { TicketFilterDto } from './dto/ticket-filter.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { TicketsService } from './tickets.service';
export declare class TicketsController {
    private readonly ticketsService;
    constructor(ticketsService: TicketsService);
    findAll(user: AuthUser, filters: TicketFilterDto): Promise<import("../common/interfaces/paginated-result.interface").PaginatedResult<unknown>>;
    findOne(id: string, user: AuthUser): Promise<{
        comments: ({
            author: {
                id: string;
                name: string;
                createdAt: Date;
                email: string;
                role: import("../../generated/prisma/enums").Role;
                companyId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            message: string;
            ticketId: string;
            authorId: string;
        })[];
        company: {
            id: string;
            name: string;
        };
        _count: {
            comments: number;
        };
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
    }>;
    create(dto: CreateTicketDto, user: AuthUser): Promise<{
        company: {
            id: string;
            name: string;
        };
        _count: {
            comments: number;
        };
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
    }>;
    update(id: string, dto: UpdateTicketDto, user: AuthUser): Promise<{
        company: {
            id: string;
            name: string;
        };
        _count: {
            comments: number;
        };
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
    }>;
    assign(id: string, dto: AssignTicketDto, user: AuthUser): Promise<{
        company: {
            id: string;
            name: string;
        };
        _count: {
            comments: number;
        };
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
    }>;
}
