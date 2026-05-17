# ForgePilot Mantle

ForgePilot Mantle is a Mantle-native audit, simulation, and integration copilot for teams shipping yield-aware smart contracts.

## Apps

- `apps/api`: VPS-hosted API
- `apps/worker`: VPS-hosted background processor
- `apps/web`: Vercel-hosted frontend

## Core workflow

1. Intake a repo or contract package
2. Run Mantle-specific rulepacks
3. Surface findings and integration risks
4. Simulate critical user journeys
5. Publish audit attestations and admin review trails

## Local development

1. Run the shared infrastructure in `../shared-infra`
2. Create a PostgreSQL database named `forgepilot_mantle`
3. Apply `apps/api/db/schema.sql`
4. Apply `apps/api/db/seed.sql`
5. Install dependencies with `npm install`
6. Start each app:
   - `npm run dev:api`
   - `npm run dev:worker`
   - `npm run dev:web`

## Production notes

- API and worker are VPS-ready through Docker
- frontend remains Vercel-oriented
- PostgreSQL is the source of truth for scans, findings, attestations, and admin audit logs
- smart contract registry skeletons live in `contracts/`
