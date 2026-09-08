-- Greece Taxi CRM — core lead/quote-request table.
-- Column set mirrors the actual "Get a Quote" form fields 1:1
-- (see app/api/quote/route.ts and components/quote/quote-request-form.tsx).
-- Additive migration — safe to re-run.

create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),

  -- Workflow state. Kept intentionally small — only the statuses the
  -- Greece Taxi admin workflow actually uses.
  status text not null default 'pending'
    check (status in ('pending', 'quoted', 'confirmed', 'completed', 'cancelled')),

  locale text not null default 'en' check (locale in ('en', 'el')),

  -- Customer (as submitted on the Get a Quote form)
  full_name text not null,
  email text not null,
  phone text,
  country text,

  -- Journey
  transfer_type text not null,
  pickup_location text not null,
  dropoff_location text not null,
  travel_date date not null,
  pickup_time time not null,

  return_transfer boolean not null default false,
  return_pickup_location text,
  return_dropoff_location text,
  return_date date,
  return_time time,

  -- Passengers & luggage
  adults int not null default 1,
  children int not null default 0,
  infants int not null default 0,
  luggage int not null default 0,

  -- Additional details
  flight_number text,
  ferry_info text,
  hotel_name text,
  special_requests text,

  -- Admin-set pricing (manual — no automatic pricing rules exist for
  -- Greece Taxi, so the admin enters the quoted amount directly)
  quoted_amount numeric(10, 2),
  quoted_currency text not null default 'EUR',
  admin_notes text,

  -- Request metadata
  ip text,
  source text not null default 'get-quote-form',

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_travel_date_idx on public.leads (travel_date);
create index if not exists leads_email_idx on public.leads (email);

-- Keep updated_at current on every write.
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

-- RLS: enabled with no policies. All access happens server-side through the
-- service-role client (lib/supabase/admin-client.ts); the anon/authenticated
-- roles get zero access at the database level, even if a key ever leaked to
-- the browser by mistake.
alter table public.leads enable row level security;

-- Audit trail of admin actions taken against a lead (status changes, price
-- set, edits, emails sent, confirmations, dispatches, cancellations).
create table if not exists public.lead_activity (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads (id) on delete cascade,
  action text not null,
  detail jsonb,
  created_at timestamptz not null default now()
);

create index if not exists lead_activity_lead_id_idx on public.lead_activity (lead_id);

alter table public.lead_activity enable row level security;

-- Every email attempt sent by the system, so failed customer emails can be
-- diagnosed and retried from the admin.
create table if not exists public.email_log (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads (id) on delete set null,
  type text not null,
  recipient text not null,
  subject text not null,
  success boolean not null,
  error text,
  created_at timestamptz not null default now()
);

create index if not exists email_log_lead_id_idx on public.email_log (lead_id);

alter table public.email_log enable row level security;
