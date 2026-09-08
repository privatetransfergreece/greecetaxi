-- Greece Taxi CRM — invoices with a private, tokenized public view.
-- No VAT/tax columns: Greece Taxi's actual tax/legal configuration is not
-- verified anywhere in this project, so none is invented here. If it's
-- needed later, add columns in a new additive migration once confirmed.
-- Additive migration — safe to re-run.

create table if not exists public.invoices (
  id uuid primary key default gen_random_uuid(),
  invoice_number text not null unique,
  lead_id uuid references public.leads (id) on delete set null,

  customer_name text not null,
  customer_email text not null,

  line_items jsonb not null default '[]'::jsonb,
  amount numeric(10, 2) not null,
  currency text not null default 'EUR',

  payment_method text,
  payment_status text not null default 'unpaid'
    check (payment_status in ('unpaid', 'paid', 'refunded')),

  notes text,

  -- Unguessable token for the public /invoice/[token] view. Generated in
  -- application code (crypto.randomUUID-based, see lib/reference.ts) rather
  -- than derived from invoice_number, so it can't be brute-forced from a
  -- known sequential number.
  access_token text not null unique,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists invoices_lead_id_idx on public.invoices (lead_id);
create index if not exists invoices_access_token_idx on public.invoices (access_token);

drop trigger if exists invoices_set_updated_at on public.invoices;
create trigger invoices_set_updated_at
  before update on public.invoices
  for each row execute function public.set_updated_at();

-- RLS enabled, no anon/authenticated policies — the tokenized public page
-- looks up an invoice server-side with the service-role client after
-- validating the token, it never queries Supabase from the browser.
alter table public.invoices enable row level security;
