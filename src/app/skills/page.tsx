const skills = [
  {
    name: "Next.js App Router",
    description: "Building route-based pages and server-rendered project listings.",
    evidence: "Project listing page",
    href: "https://github.com/Legionaka/5SOC_Dash/tree/main/app",
    kind: "source",
  },
  {
    name: "React and TypeScript",
    description: "Structuring typed page components and reusable project views.",
    evidence: "Medi-Clinic case study",
    href: "https://github.com/Legionaka/5SOC_Dash",
    kind: "source",
  },
  {
    name: "Supabase and SQL",
    description: "Connecting project data and protecting writes with owner-only row policies.",
    evidence: "RLS migration",
    href: "https://github.com/Legionaka/5SOC_Dash/tree/main/supabase/migrations",
    kind: "source",
  },
  {
    name: "Authentication and CRUD",
    description: "Using the signed-in owner session to create, update, and delete project entries.",
    evidence: "Admin actions",
    href: "https://github.com/Legionaka/5SOC_Dash/blob/main/README.md#role-protected-routes",
    kind: "source",
  },
  {
    name: "Responsive interface design",
    description: "Adapting page layouts, navigation, and project cards for smaller screens.",
    evidence: "Portfolio styles",
    href: "https://github.com/Legionaka/portfolio_v3/blob/main/src/app/globals.css",
    kind: "source",
  },
  {
    name: "Node.js and Express",
    description: "Building an API-backed airport explorer with route and middleware structure.",
    evidence: "Altis Airport Explorer",
    href: "https://github.com/Legionaka/atlis_capstone",
    kind: "project",
  },
  {
    name: "External API integration",
    description: "Connecting airport and flight search to a third-party data provider.",
    evidence: "Altis provider module",
    href: "https://github.com/Legionaka/atlis_capstone/blob/main/src/providers/aerodatabox.js",
    kind: "source",
  },
  {
    name: "Offline-first web apps",
    description: "Caching the app shell and syncing fishing logs when a connection is available.",
    evidence: "Tight Lines PWA",
    href: "https://github.com/Legionaka/paap_app5/blob/main/sw.js",
    kind: "source",
  },
  {
    name: "Authentication and data sync",
    description: "Handling user sessions and synchronizing saved fishing records with Supabase.",
    evidence: "Tight Lines project",
    href: "https://github.com/Legionaka/paap_app5",
    kind: "project",
  },
  {
    name: "Invoice PDF generation",
    description: "Generating protected invoice PDFs on demand in the clinic portal.",
    evidence: "Medi-Clinic README",
    href: "https://github.com/Legionaka/5SOC_Dash#invoice-pdfs",
    kind: "source",
  },
  {
    name: "Deployment",
    description: "Publishing the portfolio and its public project page on Vercel.",
    evidence: "Live portfolio",
    href: "https://portfoliov3-ashen-rho.vercel.app/",
    kind: "live",
  },
];

export default function SkillsPage() {
  return (
    <main className="page-shell skills-page">
      <header className="skills-intro">
        <p className="eyebrow">TOOLS & PRACTICE</p>
        <h1>Skills, with proof.</h1>
        <p>Each skill links to code or a deployed page where you can see it in practice.</p>
      </header>
      <section className="skills-list" aria-label="Skills and evidence">
        {skills.map((skill, index) => (
          <article className="skill-card" key={skill.name}>
            <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="skill-copy"><h2>{skill.name}</h2><p>{skill.description}</p></div>
            <a className="skill-evidence" href={skill.href} target="_blank" rel="noreferrer">
              <span>{skill.kind === "live" ? "Live" : "Code"}</span>{skill.evidence}<span aria-hidden="true"> ↗</span>
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
