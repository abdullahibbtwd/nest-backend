import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { userPublicSelect } from '../common/constants/user-select';
import { Role } from '../common/enums/role.enum';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(user: AuthUser) {
    if (user.role !== Role.ADMIN) {
      throw new ForbiddenException('Only admins can list users');
    }
    return this.prisma.user.findMany({
      select: userPublicSelect,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string, user: AuthUser) {
    const found = await this.prisma.user.findFirst({
      where: { id },
      select: userPublicSelect,
    });
    if (!found) {
      throw new NotFoundException('User not found');
    }
    return found;
  }

  async create(dto: CreateUserDto, user: AuthUser) {
    if (user.role !== Role.ADMIN) {
      throw new ForbiddenException('Only admins can create users');
    }

    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existing) {
      throw new ConflictException('Email already in use');
    }

    if (dto.role === Role.AGENT && !dto.companyId) {
      throw new ConflictException('Company is required for agents');
    }

    const hashed = await bcrypt.hash(dto.password, 10);
    return this.prisma.user.create({
      data: {
        email: dto.email,
        password: hashed,
        name: dto.name,
        role: dto.role,
        companyId: dto.role === Role.AGENT ? dto.companyId : null,
      },
      select: userPublicSelect,
    });
  }

  async update(id: string, dto: UpdateUserDto, user: AuthUser) {
    if (user.role !== Role.ADMIN) {
      throw new ForbiddenException('Only admins can update users');
    }

    const existing = await this.prisma.user.findFirst({
      where: { id },
    });
    if (!existing) {
      throw new NotFoundException('User not found');
    }

    const { password, ...rest } = dto;
    const data = { ...rest };
    if (password) {
      Object.assign(data, { password: await bcrypt.hash(password, 10) });
    }

    return this.prisma.user.update({
      where: { id },
      data,
      select: userPublicSelect,
    });
  }
}
