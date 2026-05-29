import { TicketPriority } from '../../common/enums/ticket-priority.enum';
import { TicketStatus } from '../../common/enums/ticket-status.enum';
export declare class UpdateTicketDto {
    title?: string;
    description?: string;
    status?: TicketStatus;
    priority?: TicketPriority;
}
