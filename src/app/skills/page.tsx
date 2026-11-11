import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore Legion Cunningham's full stack skills through code, project documentation, and live work.",
};

const portfolio = "https://github.com/Legionaka/portfolio_v3";
const mediClinic = "https://github.com/Legionaka/5SOC_Dash";
const stillwater = "https://github.com/Legionaka/paap_app5";

const skills = [
  {
    name: "Next.js, React, and TypeScript",
    description:
      "Build route-based interfaces and server-rendered pages with typed project data.",
    evidence: "Server-rendered project listing",
    href: `${portfolio}/blob/main/src/app/projects/page.tsx`,
    kind: "Code",
  },
  {
    name: "PostgreSQL and row-level security",
    description:
      "Define project data access so published content is public and write actions are owner-controlled.",
    evidence: "Projects access policies",
    href: `${portfolio}/blob/main/supabase/migrations/202610220001_projects_rls.sql`,
    kind: "Code",
  },
  {
    name: "Authentication and authorization",
    description:
      "Connect Supabase Auth sessions to role-aware routes and protected application actions.",
    evidence: "Medi-Clinic protected routes",
    href: `${mediClinic}#role-protected-routes`,
    kind: "Project notes",
  },
  {
    name: "Node.js API development",
    description:
      "Serve location data through application endpoints backed by published database records.",
    evidence: "Stillwater location API",
    href: `${stillwater}/blob/main/server/location-api.js`,
    kind: "Code",
  },
  {
    name: "External data integration",
    description:
      "Import dated reservoir reports, validate source values, and retain the reporting context.",
    evidence: "Stillwater DWS importer",
    href: `${stillwater}/blob/main/server/dws-importer.js`,
    kind: "Code",
  },
  {
    name: "Account flows and data sync",
    description:
      "Build account and community workflows, with saved waters available across devices.",
    evidence: "Stillwater account and sync notes",
    href: `${stillwater}#neon-data-and-dws-updates`,
    kind: "Project notes",
  },
  {
    name: "Offline-capable web apps",
    description:
      "Cache previously opened public guides and location data for offline reading.",
    evidence: "Stillwater offline behavior",
    href: `${stillwater}#design-and-quality-checks`,
    kind: "Project notes",
  },
  {
    name: "Invoice PDF generation",
    description:
      "Generate invoice PDFs on demand from authenticated patient and admin workflows.",
    evidence: "Medi-Clinic invoice implementation notes",
    href: `${mediClinic}#invoice-pdfs`,
    kind: "Project notes",
  },
  {
    name: "Responsive interface design",
    description:
      "Adapt page layouts, project views, and navigation for desktop and mobile screens.",
    evidence: "Portfolio styles",
    href: `${portfolio}/blob/main/src/app/globals.css`,
    kind: "Code",
  },
  {
    name: "Deployment",
    description:
      "Publish a working portfolio with public project pages and a Supabase-backed content workflow.",
    evidence: "Live portfolio",
    href: "https://portfolio-v3-ochre-rho.vercel.app/",
    kind: "Live",
  },
];

export default function SkillsPage() {
  return (
    <main className="page-shell skills-page">
      <header className="skills-intro">
        <p className="eyebrow">TOOLS & PRACTICE</p>
        <h1>Skills, with proof.</h1>
        <p>
          A selection of tools and practices shown in working projects. Follow
          each link to the code, project notes, or live result.
        </p>
      </header>

      <section className="skills-list" aria-label="Skills and evidence">
        {skills.map((skill, index) => (
          <article className="skill-card" key={skill.name}>
            <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="skill-copy">
              <h2>{skill.name}</h2>
              <p>{skill.description}</p>
            </div>
            <a className="skill-evidence" href={skill.href} target="_blank" rel="noreferrer">
              <span>{skill.kind}</span>
              {skill.evidence}
              <svg className="skill-evidence-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 12 12 4M5 4h7v7" />
              </svg>
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
