# Legion Cunningham — Portfolio

> **Live site:** [portfoliov3-ashen-rho.vercel.app](https://portfoliov3-ashen-rho.vercel.app/)
> **Repository:** [github.com/Legionaka/portfolio_v3](https://github.com/Legionaka/portfolio_v3)
> **README submission link:** [README.md on GitHub](https://github.com/Legionaka/portfolio_v3/blob/main/README.md)

## Portfolio plan

### Purpose and audience
This portfolio introduces Legion Cunningham to hiring teams looking for a **Full Stack Developer**. It will make it easy to understand what I build, how I approach problems, and where to find evidence of my skills.

### Pages
- **Home / About:** a concise introduction, the role I am pursuing, and a featured project.
- **Projects:** Medi-Clinic as a detailed case study, with its problem, my role, stack, screenshots, links, and next steps.
- **Skills:** each skill linked to an example in a project or code repository.
- **Contact:** a clear way to get in touch (a working form will be added in a later milestone).
- **CV:** a downloadable CV (to be added in a later milestone).

### Design decision
The visual direction is dark and minimal: a deep charcoal canvas, restrained warm accent colour, generous spacing, and clear type. The layout will adapt from a simple single-column mobile view to a wider desktop composition. This keeps attention on the work and makes the content easy to scan.

### Featured project
**Medi-Clinic** is a role-based clinic portal for patients and care teams. Patients can manage appointments, view records and invoices, and use the wallet view. Staff dashboards support clinical workflows, scheduling, pharmacy operations, and billing; an admin dashboard presents revenue and appointment-status charts. The case study includes screenshots of the public landing page and patient, doctor, and administrator workspaces. It is a demonstration system and has not been verified for production use with real patient data.

### First milestone scope
This milestone establishes the plan, wireframes for Home, Projects, and Contact, and a deployed Next.js + TypeScript + Tailwind skeleton with navigation and placeholder content. Supabase, the working contact form, SEO checks, and final project content are planned for later milestones.

## Wireframes

- [Home wireframe](docs/wireframes/home.svg)
- [Projects wireframe](docs/wireframes/projects.svg)
- [Contact wireframe](docs/wireframes/contact.svg)

These are structure sketches, not final visual designs.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS, Supabase Auth and Postgres, and Vercel.

## Milestone 2: Supabase projects and owner admin

The public Projects page reads published entries from the Supabase `projects` table. `/admin/login` signs in with Supabase Auth, and `/admin` is restricted to the account configured as the portfolio owner. The admin page supports adding, editing, publishing/unpublishing, and deleting project entries. Row Level Security is enabled: anyone can read published projects, while inserts, updates, and deletes require both the configured owner account and a matching `owner_id`.

### Supabase setup

1. Create a Supabase project and add your owner account under **Authentication → Users**. Keep public sign-up disabled if this project is intended to have only your account.
2. The Vercel Supabase integration syncs environment variables to the connected Vercel project. Confirm that `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` exist under **Project → Settings → Environment Variables**. For local development, put their values in `.env.local` (ignored by Git). Never use or expose a secret/service-role key in this app.
3. In the Supabase SQL Editor, run [`supabase/migrations/202610220001_projects_rls.sql`](supabase/migrations/202610220001_projects_rls.sql). Copy your Auth user's UUID from **Authentication → Users**, replace `YOUR_AUTH_USER_UUID` in the final commented statement, uncomment it, and run that statement to designate the single portfolio owner.
4. Redeploy after confirming the synced variables are available to the deployment. Then sign in at `/admin/login`, add the Medi-Clinic project, and publish it. Use `/projects` to confirm the public page shows the database entry.
5. Verify RLS using the public anon key only: an unauthenticated insert, update, and delete should each fail (or affect zero rows); an unauthenticated select should return published rows only. Do not use the service-role key for this check. Record what you tried and what Supabase returned in your submission reflection.

The migration creates `projects` with title, summary, preview image, live and source links, publication status, owner, and timestamps. It also creates a private singleton owner setting; the `is_portfolio_owner()` function only returns a boolean and lets RLS check the owner without exposing the setting table. The site deliberately shows an empty/setup state instead of substituting hard-coded project data when Supabase is not configured.

### Milestone 2 reflection (finish after the live RLS check)

> I ran the migration and confirmed that the deployed Projects page can query the `projects` table; it currently has no published rows. The migration enables public reads for published projects and restricts writes to the configured owner. I still need to assign my Auth user as the owner, add a project, and test anonymous insert, update, and delete attempts with the publishable key before I can report those results.

## AI use

AI assistance was used to help plan and scaffold the portfolio and draft implementation details. I will review and be able to explain the code I submit.

## Peer review reflection

> "Its a clean well organized start with a strong capstone , filling in your case study details will make it like stand out but overall looks clear and proffesional for first impression" — Ammara Badat, W1 submission.

**Reflection:** I am aiming for a Full Stack Developer role. I chose a dark, minimal design with a warm accent so the project work is easy to scan. Ammara’s feedback was that the first impression is clear and professional, and that more case study detail will help it stand out. I added the Medi-Clinic screenshots and will expand the case study with my role, verified tech stack, key decisions, and next steps.
