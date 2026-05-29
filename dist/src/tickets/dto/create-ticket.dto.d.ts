import { TicketPriority } from '../../common/enums/ticket-priority.enum';
export declare class CreateTicketDto {
    companyId: string;
    title: string;
    description: string;
    priority?: TicketPriority;
}
