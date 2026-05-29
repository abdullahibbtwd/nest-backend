# Helpdesk API (NestJS)

REST API for the multi-tenant helpdesk platform.

## Live URL

- API Base: https://yourapp.railway.app/api

## Test Accounts

| Role     | Email                   | Password    |
|----------|-------------------------|-------------|
| Admin    | admin@test.com          | password123 |
| Agent    | agent.acme@test.com     | password123 |
| Customer | customer@test.com       | password123 |

---

## Architecture

Core concept: Companies are tenants. Every ticket belongs to a company. `companyId` is always pulled from the JWT — never from the request body.

**Data Model:**

- Company — tenant (has users and tickets)
- User — admin | agent | customer
- Ticket — belongs to company, created by user, optionally assigned to agent
- Comment — conversation thread on a ticket
- AuditLog — every action logged with user, action, entity, timestamp

---

## Tech Stack

- NestJS 11
- Prisma 7 + PostgreSQL (Neon)
- JWT Authentication
- Role-based Guards

---

## Environment Variables

```env
DATABASE_URL=postgresql://...-pooler...
DIRECT_URL=postgresql://...direct...
JWT_SECRET=your-secret
PORT=3000
FRONTEND_URL=http://localhost:5173
```

---

## Local Setup

```bash
npm install
cp .env.example .env   # fill in values
npm run prisma:migrate
npm run prisma:seed
npm run start:dev
# runs on http://localhost:3000/api
```

---

## API Endpoints

| Method | Path | Auth | Purpose |
|--------|------|------|---------|
| POST | /auth/login | Public | Login → token + user |
| POST | /auth/register | Public | Register as customer |
| GET | /auth/me | Auth | Current user |
| GET | /tickets | Auth | Filtered + paginated list |
| GET | /tickets/:id | Auth | Full ticket + comments |
| POST | /tickets | Auth | Create ticket |
| PATCH | /tickets/:id | Auth | Update status/title |
| PATCH | /tickets/:id/assign | Admin | Assign agent |
| GET/POST | /tickets/:id/comments | Auth | Conversation thread |
| GET | /dashboard/stats | Auth | Counts + recent tickets |
| GET/POST/PATCH | /users/... | Admin | User management |
| GET | /audit-logs | Admin | Audit trail |
| GET | /companies/options | Auth | Company list for forms |

---

## Role Rules

| Role | Tickets Visible | Create | Assign | Update Status |
|------|-----------------|--------|--------|---------------|
| Admin | All companies | Yes | Yes | Any ticket |
| Agent | Own company only | No | No | Company tickets |
| Customer | Own tickets only | Yes | No | Own tickets |

---

## Modules

- `auth` — JWT login/register
- `tickets` — CRUD, filters, pagination, assign
- `comments` — ticket thread
- `companies` — tenants + option lists
- `users` — admin user management
- `dashboard` — stats
- `audit` — audit trail

---

## Production Deploy (Railway)

```bash
npm run build:prod
npm run start:prod  # runs migrations automatically
```

See [DEPLOY.md](../DEPLOY.md) for full Railway + Vercel steps.
