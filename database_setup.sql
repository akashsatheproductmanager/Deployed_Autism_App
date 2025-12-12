-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create doctors table
create table public.doctors (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  specialty text not null,
  city text not null,
  address text,
  latitude double precision,
  longitude double precision,
  rating double precision default 0,
  review_count integer default 0,
  verified boolean default false,
  availability text,
  insurance_accepted boolean default true,
  phone text,
  email text
);

-- Enable Row Level Security (RLS)
alter table public.doctors enable row level security;

-- Create Policy: Allow read access to everyone
create policy "Enable read access for all users" on public.doctors
  for select using (true);

-- Create Policy: Allow insert for all users (For initial seeding only)
create policy "Enable insert for all users" on public.doctors
  for insert with check (true);
