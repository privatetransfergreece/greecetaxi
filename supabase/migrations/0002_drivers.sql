-- Greece Taxi CRM — driver directory + WhatsApp dispatch history.
-- Additive migration — safe to re-run.

create table if not exists public.drivers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  -- WhatsApp-reachable number, stored as E.164 digits (no leading +) so it
  -- can be dropped straight into a wa.me link.
  whatsapp_number text not null,
  vehicle_type text,
  vehicle_model text,
  passenger_capacity int,
  luggage_capacity int,
  coverage_area text,
  status text not null default 'active' check (status in ('active', 'inactive')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists drivers_status_idx on public.drivers (status);

drop trigger if exists drivers_set_updated_at on public.drivers;
create trigger drivers_set_updated_at
  before update on public.drivers
  for each row execute function public.set_updated_at();

alter table public.drivers enable row level security;

-- Which driver was contacted for which lead, and when — so admins can see
-- dispatch history per booking.
create table if not exists public.dispatch_log (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads (id) on delete cascade,
  driver_id uuid references public.drivers (id) on delete set null,
  action_type text not null default 'whatsapp',
  contacted_at timestamptz not null default now(),
  notes text
);

create index if not exists dispatch_log_lead_id_idx on public.dispatch_log (lead_id);
create index if not exists dispatch_log_driver_id_idx on public.dispatch_log (driver_id);

alter table public.dispatch_log enable row level security;
