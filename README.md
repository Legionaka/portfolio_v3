# Legion Cunningham — Portfolio

> **Live site:** [Portfolio About page](https://portfolio-v3-ochre-rho.vercel.app/about)
> **Repository:** [github.com/Legionaka/portfolio_v3](https://github.com/Legionaka/portfolio_v3)
> **README submission link:** [README.md on GitHub](https://github.com/Legionaka/portfolio_v3/blob/main/README.md)

## Portfolio overview

This portfolio introduces Legion Cunningham to hiring teams looking for a Full Stack Developer. It presents a clear overview of the work I build, the problems I enjoy solving, and the evidence behind my technical decisions.

The site is designed around a dark, minimal visual system with warm accent tones, strong typography, and a clear structure that keeps the work readable and easy to scan. The content is tailored toward a professional audience evaluating product and engineering capability.

## Purpose and audience

The site is aimed at hiring teams, recruiters, and collaborators assessing a Full Stack Developer for product, web, and systems work. It highlights the kind of problems I enjoy solving and gives them a direct way to explore evidence of my work.

## Pages

- **Home / About:** introduction, role focus, and featured project summary
- **Projects:** a public gallery of published work pulled from Supabase
- **Medi-Clinic case study:** a deeper dive into the capstone project, including role, stack, decisions, and evidence
- **Skills:** each skill links to code or a live example to show proof in practice
- **Contact:** a working Supabase-backed contact form with basic spam protection, plus direct contact links
- **CV:** profile page with a downloadable PDF

## Project content

### Medi-Clinic
**Medi-Clinic** is a role-based healthcare portal focused on patient services, care-team workflows, and clinic operations. It includes patient, doctor, and administrator views, bringing appointment management, billing, records, and workflow access into one connected system.

- [Case study](https://portfolio-v3-ochre-rho.vercel.app/projects/medi-clinic)
- [Live demo](https://5-soc-dash-zlps.vercel.app/)
- [Source repository](https://github.com/Legionaka/5SOC_Dash)

### Altis Airport Explorer
**Altis Airport Explorer** is an airport discovery and trip-planning experience focused on route search, airport information, and clear travel data exploration.

- [Repository](https://github.com/Legionaka/atlis_capstone)

### Tight Lines
**Tight Lines** is a mobile-friendly fishing log and trip planner with offline support, saved records, and sync-ready local data handling.

- [Repository](https://github.com/Legionaka/paap_app5)

## Design direction

The visual direction is intentionally minimal and confident: a dark neutral canvas with restrained warm accents, strong spacing, and clear hierarchy. The result is a portfolio that puts attention on the work rather than overwhelming the viewer with decoration.

The layout adapts for mobile and desktop without losing clarity, making the project content readable and easy to evaluate quickly.

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS with custom CSS, Supabase, and Vercel.

## Supabase and project data

The public Projects page reads from the Supabase `projects` table and shows only published entries. The admin area is protected by Supabase Auth and checks owner access before allowing project writes. The contact form saves submissions to the `contact_messages` table; visitors can insert messages but cannot read the inbox. Apply all SQL migrations in `supabase/migrations/` before using these features.

For setup and database notes, see [Supabase setup](docs/supabase-setup.md). Required local environment variables are `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`; add them to `.env.local` (never commit environment files).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Milestone reflection

This milestone establishes a portfolio structure with a stronger narrative around the capstone project, multiple pieces of evidence, and a public projects archive that is dynamic and database-driven. The final portfolio narrative is clearer and aligned with the brief: it presents a professional identity, explains the type of work I build, and gives hiring teams a way to review concrete examples.

## AI use

AI assistance helped plan and scaffold parts of the portfolio and revise copy for clarity. I reviewed and approved the final wording and am responsible for explaining the code I submit.

## Peer review reflection

> “Its a clean well organized start with a strong capstone, filling in your case study details will make it stand out but overall looks clear and professional for first impression.” — Ammara Badat

This feedback informed the direction of the final portfolio pass. I kept the design clear and professional, while expanding project depth and strengthening the evidence behind the skills and project work.
