import type { AuthUser } from '../auth/interfaces/auth-user.interface';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    findByTicket(ticketId: string, user: AuthUser): Promise<({
        author: {
            id: string;
            createdAt: Date;
            name: string;
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
    })[]>;
    create(ticketId: string, dto: CreateCommentDto, user: AuthUser): Promise<{
        author: {
            id: string;
            createdAt: Date;
            name: string;
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
    }>;
}
