-- Greece Taxi blog — bilingual (en/el) content authored via seed scripts.
-- Unlike leads/drivers/invoices, published posts are intentionally public:
-- the anon client (lib/supabase/public-client.ts) reads them directly under
-- RLS, scoped to status = 'published'. Drafts stay invisible to that role.
-- Additive migration — safe to re-run.

create table if not exists public.bloggers (
  id uuid primary key references auth.users (id),
  full_name text not null,
  email text not null,
  avatar_url text,
  bio text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  last_login timestamptz
);

drop trigger if exists bloggers_set_updated_at on public.bloggers;
create trigger bloggers_set_updated_at
  before update on public.bloggers
  for each row execute function public.set_updated_at();

alter table public.bloggers enable row level security;

drop policy if exists "Allow public read access to active bloggers" on public.bloggers;
create policy "Allow public read access to active bloggers"
  on public.bloggers
  for select
  using (is_active = true);

create table if not exists public.blogs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text not null default '',
  featured_image_url text,
  category text not null default 'General',
  tags text[] default '{}',
  status text not null default 'draft'
    check (status in ('draft', 'published')),
  author_id uuid references public.bloggers (id),
  read_time text default '5 min read',
  seo_title text,
  seo_description text,
  focus_keyword text,
  toc boolean,
  scheduled_at timestamptz,
  -- Matches the site's locale set (lib/i18n/config.ts).
  language text not null default 'en' check (language in ('en', 'el')),
  -- Points a translated post back at the slug of the post it translates.
  -- No FK: the sibling may be authored (or unpublished) in either order.
  translation_of text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz
);

drop trigger if exists blogs_set_updated_at on public.blogs;
create trigger blogs_set_updated_at
  before update on public.blogs
  for each row execute function public.set_updated_at();

alter table public.blogs enable row level security;

drop policy if exists "Allow public read access to published blogs" on public.blogs;
create policy "Allow public read access to published blogs"
  on public.blogs
  for select
  using (status = 'published');

create index if not exists blogs_language_idx
  on public.blogs (language);

create index if not exists blogs_status_language_idx
  on public.blogs (status, language);

create index if not exists blogs_published_at_idx
  on public.blogs (published_at desc);

create index if not exists blogs_translation_of_idx
  on public.blogs (translation_of);

create index if not exists blogs_category_idx
  on public.blogs (category);
