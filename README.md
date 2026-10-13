# Plate2People

Reduce Food Waste. Feed More Lives.

A Next.js website that connects restaurants, caterers and event hosts with community organisations to redirect safe surplus food.

## Stack

- **Frontend**: Next.js 15 (App Router) + React + TypeScript
- **Database**: Neon (Serverless Postgres) + Drizzle ORM
- **Deployment**: GitHub → Vercel

## Getting Started

### 1. Install dependencies

```bash
cd plate2people
npm install
```

### 2. Set up Neon database

1. Create a free project at [neon.tech](https://neon.tech)
2. Copy the **pooled** connection string
3. Create `.env.local`:

```bash
cp .env.example .env.local
# then paste your DATABASE_URL
```

4. Push the schema:

```bash
npm run db:push
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo
3. Add Environment Variable:
   - Name: `DATABASE_URL`
   - Value: your Neon pooled connection string
4. Deploy

Every push to `main` will automatically redeploy.

## Project Structure

```
plate2people/
├── src/
│   ├── app/
│   │   ├── api/partners/route.ts   # Form API
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── About.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Impact.tsx
│   │   ├── Partners.tsx
│   │   ├── PartnerForm.tsx
│   │   └── Footer.tsx
│   └── lib/
│       ├── db.ts
│       └── schema.ts
├── drizzle.config.ts
├── .env.example
└── package.json
```

## Database Table

`partners` table stores form submissions:

| Column     | Type      | Notes                |
|------------|-----------|----------------------|
| id         | serial    | Primary key          |
| name       | varchar   | Required             |
| email      | varchar   | Required             |
| role       | varchar   | Restaurant / NGO etc |
| city       | varchar   | Required             |
| message    | text      | Optional             |
| created_at | timestamp | Auto                 |

## Useful Commands

```bash
npm run dev          # Local development
npm run build        # Production build
npm run db:push      # Push schema to Neon
npm run db:studio    # Open Drizzle Studio
```
