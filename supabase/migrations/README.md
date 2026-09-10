# Applying these migrations

These SQL files are additive and safe to re-run (`if not exists` throughout).
Apply them in order against your Supabase project's Postgres database:

- Via the Supabase Dashboard: **SQL Editor → New query**, paste each file's
  contents in order (`0001_leads.sql`, `0002_drivers.sql`,
  `0003_invoices.sql`, `0004_blog.sql`), and run.
- Via the Supabase CLI: `supabase db push` after copying these files into
  your linked project's `supabase/migrations/` directory.

After applying them, create the first admin account manually in
**Authentication → Users → Add user** (email/password). There is no public
sign-up route — this is the only way to create an admin login.

## Blog authors (`0004_blog.sql`)

`public.bloggers.id` references `auth.users(id)` — every blog author must be
a real Supabase Auth user first. Create one the same way as the admin
account above (**Authentication → Users → Add user**), copy its UUID, and
set it as `BLOG_AUTHOR_ID` in `.env` before running `npm run seed:blog`. The
seed script upserts a `bloggers` row for that UUID automatically; it cannot
create the Auth user itself.
