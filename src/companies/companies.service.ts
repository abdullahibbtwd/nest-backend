import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { Role } from '../common/enums/role.enum';
import { PrismaService } from '../database/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForRegistration() {
    return this.prisma.company.findMany({
      select: { id: true, name: true },
      orderBy: { name: 'asc' },
    });
  }

  findMine(user: AuthUser) {
    if (!user.companyId) {
      return null;
    }
    return this.prisma.company.findFirst({
      where: { id: user.companyId },
      include: { _count: { select: { users: true, tickets: true } } },
    });
  }

  async findOne(id: string, user: AuthUser) {
    if (id !== user.companyId) {
      throw new ForbiddenException('Access denied');
    }
    const company = await this.prisma.company.findUnique({ where: { id } });
    if (!company) {
      throw new NotFoundException('Company not found');
    }
    return company;
  }

  create(dto: CreateCompanyDto) {
    return this.prisma.company.create({ data: { name: dto.name } });
  }

  async update(id: string, dto: UpdateCompanyDto, user: AuthUser) {
    if (id !== user.companyId) {
      throw new ForbiddenException('Access denied');
    }
    if (user.role !== Role.ADMIN) {
      throw new ForbiddenException('Only admins can update company');
    }
    return this.prisma.company.update({
      where: { id },
      data: dto,
    });
  }
}
