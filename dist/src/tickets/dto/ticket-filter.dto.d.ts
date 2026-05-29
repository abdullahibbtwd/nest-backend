import { TicketPriority } from '../../common/enums/ticket-priority.enum';
import { TicketStatus } from '../../common/enums/ticket-status.enum';
export declare class TicketFilterDto {
    page?: number;
    limit?: number;
    status?: TicketStatus;
    priority?: TicketPriority;
    assignedToId?: string;
    search?: string;
}
