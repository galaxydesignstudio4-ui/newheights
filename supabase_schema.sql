-- Supabase Schema for New Heights School

-- 1. Content Table
create table if not exists content (
  id uuid primary key default gen_random_uuid(),
  section text not null,
  key text not null,
  value text not null,
  updated_at timestamp with time zone default now()
);

create unique index if not exists content_section_key_idx on content(section, key);

-- 2. Programs Table
create table if not exists programs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  image_url text,
  "order" int,
  updated_at timestamp with time zone default now()
);

-- 3. Gallery Table
create table if not exists gallery (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  caption text,
  uploaded_at timestamp with time zone default now()
);

-- 4. Admissions Table
create table if not exists admissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  details jsonb,
  submitted_at timestamp with time zone default now()
);

-- 5. Contacts Table
create table if not exists contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  submitted_at timestamp with time zone default now()
);

-- 6. Users Table (for CMS/Admin)
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  role text not null,
  created_at timestamp with time zone default now()
);

alter table content enable row level security;
alter table programs enable row level security;
alter table gallery enable row level security;
alter table admissions enable row level security;
alter table contacts enable row level security;

create policy "public read content" on content for select using (true);
create policy "public write content" on content for all using (true) with check (true);
create policy "public read programs" on programs for select using (true);
create policy "public write programs" on programs for all using (true) with check (true);
create policy "public read gallery" on gallery for select using (true);
create policy "public write gallery" on gallery for all using (true) with check (true);
create policy "public write admissions" on admissions for all using (true) with check (true);
create policy "public write contacts" on contacts for all using (true) with check (true);

insert into storage.buckets (id, name, public)
values ('general', 'general', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('gallery', 'gallery', true)
on conflict (id) do nothing;

create policy "public read general bucket" on storage.objects for select using (bucket_id = 'general');
create policy "public write general bucket" on storage.objects for insert with check (bucket_id = 'general');
create policy "public update general bucket" on storage.objects for update using (bucket_id = 'general');
create policy "public read gallery bucket" on storage.objects for select using (bucket_id = 'gallery');
create policy "public write gallery bucket" on storage.objects for insert with check (bucket_id = 'gallery');
create policy "public update gallery bucket" on storage.objects for update using (bucket_id = 'gallery');
