import { IsEnum, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';
import { TicketPriority } from '../../common/enums/ticket-priority.enum';

export class CreateTicketDto {
  @IsUUID()
  companyId: string;

  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @MinLength(5)
  description: string;

  @IsOptional()
  @IsEnum(TicketPriority)
  priority?: TicketPriority;
}
