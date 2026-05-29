import 'dotenv/config';
import * as bcrypt from 'bcryptjs';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '../../generated/prisma/client';

const prisma = new PrismaClient({
  adapter: new PrismaNeon({ connectionString: process.env.DIRECT_URL }),
});

const COMPANIES = [
  { name: 'Acme Corporation', slug: 'acme' },
  { name: 'Globex Industries', slug: 'globex' },
  { name: 'Initech Solutions', slug: 'initech' },
  { name: 'Umbrella Services', slug: 'umbrella' },
];

async function main() {
  await prisma.auditLog.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.ticket.deleteMany();
  await prisma.user.deleteMany();
  await prisma.company.deleteMany();

  const password = await bcrypt.hash('password123', 10);

  const companies = await Promise.all(
    COMPANIES.map(({ name }) => prisma.company.create({ data: { name } })),
  );

  const admin = await prisma.user.create({
    data: {
      email: 'admin@test.com',
      password,
      name: 'Platform Admin',
      role: 'admin',
    },
  });

  const customer = await prisma.user.create({
    data: {
      email: 'customer@test.com',
      password,
      name: 'Global Customer',
      role: 'customer',
    },
  });

  console.log('Seed completed — password: password123\n');
  console.log('Companies:', companies.map((c) => c.name).join(', '));
  console.log('Platform admin:', admin.email);
  console.log('Global customer:', customer.email);
  console.log('Agents:');
  for (let i = 0; i < COMPANIES.length; i++) {
    const { name, slug } = COMPANIES[i];
    await prisma.user.create({
      data: {
        email: `agent.${slug}@test.com`,
        password,
        name: `${name} Agent`,
        role: 'agent',
        companyId: companies[i].id,
      },
    });
    console.log(`  agent.${slug}@test.com (${name})`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
