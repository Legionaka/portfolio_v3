alter table public.projects
  add column if not exists role text,
  add column if not exists outcome text,
  add column if not exists stack text[] not null default '{}',
  add column if not exists featured boolean not null default false,
  add column if not exists sort_order integer not null default 0;

alter table public.projects
  drop constraint if exists projects_role_length_check,
  add constraint projects_role_length_check check (role is null or char_length(role) <= 120),
  drop constraint if exists projects_outcome_length_check,
  add constraint projects_outcome_length_check check (outcome is null or char_length(outcome) <= 300),
  drop constraint if exists projects_sort_order_check,
  add constraint projects_sort_order_check check (sort_order between 0 and 999);

create index if not exists projects_published_featured_order_idx
  on public.projects (published, featured desc, sort_order, created_at desc);
