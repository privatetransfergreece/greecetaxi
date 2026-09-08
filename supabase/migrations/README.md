# Applying these migrations

These SQL files are additive and safe to re-run (`if not exists` throughout).
Apply them in order against your Supabase project's Postgres database:

- Via the Supabase Dashboard: **SQL Editor → New query**, paste each file's
  contents in order (`0001_leads.sql`, `0002_drivers.sql`,
  `0003_invoices.sql`), and run.
- Via the Supabase CLI: `supabase db push` after copying these files into
  your linked project's `supabase/migrations/` directory.

After applying them, create the first admin account manually in
**Authentication → Users → Add user** (email/password). There is no public
sign-up route — this is the only way to create an admin login.
