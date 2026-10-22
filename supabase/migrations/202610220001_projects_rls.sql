create extension if not exists pgcrypto;

create table if not exists public.portfolio_owner (
  singleton boolean primary key default true check (singleton),
  owner_id uuid not null references auth.users(id) on delete cascade
);
alter table public.portfolio_owner enable row level security;
revoke all on public.portfolio_owner from anon, authenticated;

create or replace function public.is_portfolio_owner()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.portfolio_owner
    where singleton = true and owner_id = (select auth.uid())
  );
$$;
revoke all on function public.is_portfolio_owner() from public;
grant execute on function public.is_portfolio_owner() to anon, authenticated;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(title) between 1 and 120),
  summary text not null check (char_length(summary) between 1 and 600),
  image_url text,
  live_url text,
  repo_url text,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.projects enable row level security;
drop policy if exists "Anyone can read published projects" on public.projects;
create policy "Anyone can read published projects" on public.projects
  for select to anon, authenticated using (published or (select public.is_portfolio_owner()));
drop policy if exists "Only portfolio owner can add projects" on public.projects;
create policy "Only portfolio owner can add projects" on public.projects
  for insert to authenticated with check ((select public.is_portfolio_owner()) and owner_id = (select auth.uid()));
drop policy if exists "Only portfolio owner can edit projects" on public.projects;
create policy "Only portfolio owner can edit projects" on public.projects
  for update to authenticated using ((select public.is_portfolio_owner()) and owner_id = (select auth.uid()))
  with check ((select public.is_portfolio_owner()) and owner_id = (select auth.uid()));
drop policy if exists "Only portfolio owner can delete projects" on public.projects;
create policy "Only portfolio owner can delete projects" on public.projects
  for delete to authenticated using ((select public.is_portfolio_owner()) and owner_id = (select auth.uid()));

create index if not exists projects_published_created_at_idx on public.projects (published, created_at desc);

-- After creating your Auth user, copy its UUID from Supabase Authentication > Users.
-- Run the following in the SQL editor, replacing only the UUID placeholder:
-- insert into public.portfolio_owner (singleton, owner_id) values (true, 'YOUR_AUTH_USER_UUID');
-- Add portfolio projects from the protected /admin page after signing in.
