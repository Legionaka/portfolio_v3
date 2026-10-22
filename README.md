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

- [Medi-Clinic case study](https://portfoliov3-ashen-rho.vercel.app/projects/medi-clinic) · [Current demo URL](https://5-soc-dash-zlps.vercel.app/) · [Source repository](https://github.com/Legionaka/5SOC_Dash)

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

## Milestone 2 reflection

> I created a `projects` table with a title, summary, image, project links, and published status, and enabled Row Level Security. The public Projects page reads published entries, while write policies require my configured owner account and a matching `owner_id`. As a signed-out visitor using the publishable key, my insert was rejected with HTTP 401 and an RLS error; update and delete returned HTTP 200 with empty results for an existing published test row, which remained unchanged. Signed in as the owner, I verified that I can add, edit, and delete projects.

For the implementation and setup notes, see [Supabase setup](docs/supabase-setup.md).

## AI use

AI assistance helped plan and scaffold the portfolio and draft or revise some portfolio copy. I am responsible for reviewing the published wording and being able to explain the code I submit.

## Peer review reflection

> "Its a clean well organized start with a strong capstone , filling in your case study details will make it like stand out but overall looks clear and proffesional for first impression" — Ammara Badat, W1 submission.

**Reflection:** I am aiming for a Full Stack Developer role. I chose a dark, minimal design with a warm accent so the project work is easy to scan. Ammara’s feedback was that the first impression is clear and professional, and that more case study detail will help it stand out. I added the Medi-Clinic screenshots and will expand the case study with my role, verified tech stack, key decisions, and next steps.
