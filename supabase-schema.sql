-- ============================================================
-- Portfolio — full Supabase database schema
-- Run this once in the Supabase SQL editor (Database → SQL).
--
-- Tables:
--   profile        single-row site owner info + contact links
--   projects       portfolio projects (url NULL = private, no link)
--   services       service groups with item lists
--   experience     timeline entries with tool tags
--   skills         "Tools I Work With" pills
-- ============================================================

-- ---------- helpers ----------
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- ============================================================
-- PROFILE (single row, id = 1)
-- ============================================================
create table if not exists profile (
  id int primary key default 1 check (id = 1),
  full_name text not null default 'Camille B. Atibagos',
  role text not null default 'Full-Stack Developer & UI/UX Designer',
  email text not null default 'atibagos.camille10@gmail.com',
  facebook_url text not null default 'https://www.facebook.com/caracho.violet0000',
  indeed_url text not null default 'https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage',
  city text not null default 'Mati City',
  region text not null default 'Davao Oriental',
  country text not null default 'PH',
  availability text not null default 'Open for freelance & collaborations',
  updated_at timestamptz not null default now()
);
drop trigger if exists profile_updated_at on profile;
create trigger profile_updated_at
  before update on profile for each row execute function set_updated_at();

insert into profile (id) values (1) on conflict (id) do nothing;

-- ============================================================
-- PROJECTS
-- ============================================================
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  number text not null,               -- "01", "02", "03"
  name text not null,                 -- "SRAM"
  title text not null,                -- card headline
  category text not null,             -- short category line
  description text not null default '',
  tags text[] not null default '{}',
  accent text not null default '#8866DE',
  year text not null default '',
  image_url text not null default '', -- e.g. /images/projects/sram.png
  project_url text,                   -- NULL = private, render NO link
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
drop trigger if exists projects_updated_at on projects;
create trigger projects_updated_at
  before update on projects for each row execute function set_updated_at();

-- ============================================================
-- SERVICES
-- ============================================================
create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  tag text not null,                  -- "WEBSITE DEVELOPMENT"
  title text not null,
  description text not null default '',
  items text[] not null default '{}',
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
drop trigger if exists services_updated_at on services;
create trigger services_updated_at
  before update on services for each row execute function set_updated_at();

-- ============================================================
-- EXPERIENCE
-- ============================================================
create table if not exists experience (
  id uuid primary key default gen_random_uuid(),
  year text not null,
  role text not null,
  description text not null default '',
  tools text[] not null default '{}',
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
drop trigger if exists experience_updated_at on experience;
create trigger experience_updated_at
  before update on experience for each row execute function set_updated_at();

-- ============================================================
-- SKILLS ("Tools I Work With")
-- ============================================================
create table if not exists skills (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- Public read for all content tables; writes via service_role.
-- ============================================================
alter table profile enable row level security;
alter table projects enable row level security;
alter table services enable row level security;
alter table experience enable row level security;
alter table skills enable row level security;

-- Content tables: everyone reads, only service_role writes
-- (no insert/update/delete policies for anon/authenticated).
drop policy if exists "Public read: profile" on profile;
create policy "Public read: profile" on profile for select using (true);
drop policy if exists "Public read: projects" on projects;
create policy "Public read: projects" on projects for select using (true);
drop policy if exists "Public read: services" on services;
create policy "Public read: services" on services for select using (true);
drop policy if exists "Public read: experience" on experience;
create policy "Public read: experience" on experience for select using (true);
drop policy if exists "Public read: skills" on skills;
create policy "Public read: skills" on skills for select using (true);

-- ============================================================
-- SEED — current portfolio content (safe to re-run)
-- ============================================================
insert into skills (name, sort_order) values
  ('Next.js', 1),
  ('Tailwind CSS', 2),
  ('Supabase', 3),
  ('GitHub', 4),
  ('MySQL', 5)
on conflict (name) do nothing;

insert into projects (slug, number, name, title, category, description, tags, accent, year, image_url, project_url, sort_order) values
  ('sram', '01', 'SRAM', 'School Report Assignment, Submission & Monitoring', 'School Reports PWA',
   'School heads assign and review. Teachers upload files, submit, and revise when unlocked — on Android, iOS, tablet, and laptop.',
   array['Supabase', 'PWA', 'Reports'], '#8866DE', '2025', '/images/projects/sram.png', null, 1),
  ('itag-prop', '02', 'iTAG-PROP', 'Inventory Tracking & Property Management', 'Inventory Tracking',
   'Encode school properties, generate QR labels and Excel files, then assign and transfer while keeping every custodian on record.',
   array['QR', 'Inventory', 'PWA'], '#DD68E3', '2025', '/images/projects/itag.png', null, 2),
  ('dsr-hub', '03', 'DSR HUB', 'Supporting Student Mental Health', 'Stress Relief & Wellness Hub',
   'A safe space for students to find resources, support, and tools to manage stress and improve mental well-being.',
   array['Wellness', 'Students', 'Web App'], '#7aa8ff', '2025', '/images/projects/dorsurhub.png', 'https://dorsusrhub.unaux.com/index', 3)
on conflict (slug) do update set
  number = excluded.number, name = excluded.name, title = excluded.title,
  category = excluded.category, description = excluded.description, tags = excluded.tags,
  accent = excluded.accent, year = excluded.year, image_url = excluded.image_url,
  project_url = excluded.project_url, sort_order = excluded.sort_order;

insert into services (tag, title, description, items, sort_order) values
  ('WEBSITE DEVELOPMENT', 'Website Development',
   'Modern, responsive websites and web applications designed around your goals.',
   array['Portfolio Websites', 'Business Websites', 'School Websites', 'Management Systems', 'Research Systems', 'Progressive Web Apps'], 1),
  ('ACADEMIC COMMISSIONS', 'Academic Commissions',
   'Careful, original academic support — formatted, cited, and on time.',
   array['Academic Writing', 'Basic Editing'], 2),
  ('CREATIVE EDITING', 'Creative Editing',
   'Playful visuals for feeds, decks, and everyday storytelling.',
   array['Basic Video Editing', 'Presentation Design', 'Social Media Graphics'], 3);

insert into experience (year, role, description, tools, sort_order) values
  ('2026', 'FULL-STACK WEB DEVELOPMENT',
   'Developed web-based systems for school, academic, research, and client projects.',
   array['Next.js', 'React', 'Tailwind CSS'], 1),
  ('2025', 'ACADEMIC / RESEARCH PROJECTS',
   'Built management and analytics systems for academic and research use.',
   array['PHP', 'MySQL', 'HTML', 'CSS'], 2),
  ('2025', 'DSR HUB',
   'Built the DOrSU Stress Relief Hub — a safe space for student wellness.',
   array['Next.js', 'Tailwind CSS', 'API'], 3);
