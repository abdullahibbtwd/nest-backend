import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AuditService } from '../audit/audit.service';
import { Role } from '../common/enums/role.enum';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { PrismaService } from '../database/prisma.service';
import { TicketsService } from './tickets.service';

describe('TicketsService — tenant isolation', () => {
  let service: TicketsService;

  const prisma = {
    ticket: {
      findMany: jest.fn(),
      count: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    company: { findUnique: jest.fn() },
    user: { findFirst: jest.fn() },
  };

  const audit = { log: jest.fn().mockResolvedValue(undefined) };

  const admin: AuthUser = {
    id: 'admin-1',
    email: 'admin@test.com',
    role: Role.ADMIN,
    companyId: null,
  };

  const agent: AuthUser = {
    id: 'agent-1',
    email: 'agent@test.com',
    role: Role.AGENT,
    companyId: 'company-acme',
  };

  const customer: AuthUser = {
    id: 'customer-1',
    email: 'customer@test.com',
    role: Role.CUSTOMER,
    companyId: null,
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    prisma.ticket.findMany.mockResolvedValue([]);
    prisma.ticket.count.mockResolvedValue(0);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TicketsService,
        { provide: PrismaService, useValue: prisma },
        { provide: AuditService, useValue: audit },
      ],
    }).compile();

    service = module.get(TicketsService);
  });

  describe('findAll', () => {
    it('scopes customer to createdById', async () => {
      await service.findAll(customer);

      expect(prisma.ticket.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({ createdById: 'customer-1' }),
        }),
      );
    });

    it('scopes agent to companyId', async () => {
      await service.findAll(agent);

      expect(prisma.ticket.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({ companyId: 'company-acme' }),
        }),
      );
    });

    it('does not add tenant filter for admin', async () => {
      await service.findAll(admin);

      const call = prisma.ticket.findMany.mock.calls[0][0];
      expect(call.where.createdById).toBeUndefined();
      expect(call.where.companyId).toBeUndefined();
    });

    it('throws when agent has no companyId', async () => {
      await expect(
        service.findAll({ ...agent, companyId: null }),
      ).rejects.toBeInstanceOf(ForbiddenException);
    });
  });

  describe('findOne', () => {
    it('allows agent to open any ticket in their company', async () => {
      prisma.ticket.findFirst.mockResolvedValue({
        id: 't1',
        companyId: 'company-acme',
        createdById: 'other-customer',
        assignedToId: 'other-agent',
      });

      await service.findOne('t1', agent);

      expect(prisma.ticket.findFirst).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: 't1', companyId: 'company-acme' },
        }),
      );
    });

    it('returns not found when ticket outside agent company', async () => {
      prisma.ticket.findFirst.mockResolvedValue(null);

      await expect(service.findOne('t1', agent)).rejects.toBeInstanceOf(
        NotFoundException,
      );
    });

    it('allows admin to open by id only', async () => {
      prisma.ticket.findFirst.mockResolvedValue({
        id: 't1',
        companyId: 'company-globex',
        createdById: 'x',
      });

      await service.findOne('t1', admin);

      expect(prisma.ticket.findFirst).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: 't1' },
        }),
      );
    });
  });
});
