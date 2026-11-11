import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV of Legion Cunningham, a software engineering student and junior developer in Johannesburg.",
};

const projects = [
  {
    name: "TrueMarket",
    category: "Retail operations",
    summary:
      "A full stack point-of-sale system covering checkout, cashier shifts, refunds, inventory, and store reports.",
    stack: "Next.js · React · TypeScript · Supabase · PostgreSQL",
    href: "https://pos-system-kappa-nine.vercel.app/",
    linkLabel: "View live demo",
  },
  {
    name: "Medi-Clinic",
    category: "Healthcare workflows",
    summary:
      "A demonstration portal with separate patient, clinician, and administrator workspaces.",
    stack: "Next.js · React · Supabase Auth · PostgreSQL",
    href: "/projects/medi-clinic",
    linkLabel: "Read the case study",
  },
];

const certifications = [
  ["Databases", "September 2026"],
  ["HTML5 Application Development", "August 2026"],
  ["Software Development", "August 2026"],
  ["JavaScript", "July 2026"],
  ["Python", "May 2026"],
  ["HTML and CSS", "March 2026"],
  ["Computational Thinking", "March 2026"],
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg className="cv-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12 12 4M5 4h7v7" />
    </svg>
  ) : (
    <svg className="cv-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2.5 8h10m-4-4 4 4-4 4" />
    </svg>
  );
}

export default function CvPage() {
  return (
    <main className="page-shell cv-page">
      <header className="cv-hero">
        <p className="eyebrow">CURRICULUM VITAE</p>
        <h1>Legion Cunningham</h1>
        <p className="cv-role">Software Engineering Student <span aria-hidden="true">·</span> Junior Developer</p>
        <p className="cv-summary">
          I&apos;m studying IT programming at UniCollege and building practical
          applications through coursework and capstone projects. I&apos;m seeking an
          internship or junior developer role where I can contribute and continue
          developing my skills.
        </p>
        <div className="cv-actions">
          <a className="button button-primary cv-download" href="/Legion-Cunningham-CV.pdf" download>
            Download PDF <span aria-hidden="true">↓</span>
          </a>
          <a className="cv-email-link" href="mailto:legion.cunningham@gmail.com">
            Email Legion <ArrowIcon />
          </a>
        </div>
        <ul className="cv-contact-list" aria-label="Contact details">
          <li>Johannesburg, Gauteng</li>
          <li><a href="tel:+27825593196">082 559 3196</a></li>
          <li><a href="mailto:legion.cunningham@gmail.com">legion.cunningham@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/legion-cunningham" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon diagonal /></a></li>
          <li><a href="https://github.com/Legionaka" target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a></li>
        </ul>
      </header>

      <section className="cv-experience" aria-labelledby="cv-experience-title">
        <div className="cv-section-heading">
          <p className="eyebrow">PRACTICAL EXPERIENCE</p>
          <h2 id="cv-experience-title">Learning by building.</h2>
        </div>
        <article className="cv-experience-entry">
          <div>
            <h3>Software development coursework and capstone projects</h3>
            <p>UniCollege <span aria-hidden="true">·</span> 2026 - Present</p>
          </div>
          <p>
            Build applications through practical coursework, collaborate with
            peers on project milestones, and apply software development concepts
            to real-world use cases.
          </p>
        </article>
      </section>

      <section className="cv-projects" aria-labelledby="cv-projects-title">
        <div className="cv-section-heading cv-projects-heading">
          <div>
            <p className="eyebrow">SELECTED PROJECTS</p>
            <h2 id="cv-projects-title">Work across real workflows.</h2>
          </div>
          <Link href="/projects" className="cv-section-link">Browse all projects <ArrowIcon /></Link>
        </div>
        <div className="cv-project-grid">
          {projects.map((project) => (
            <article className="cv-project-card" key={project.name}>
              <p className="cv-project-category">{project.category}</p>
              <h3>{project.name}</h3>
              <p className="cv-project-summary">{project.summary}</p>
              <p className="cv-project-stack">{project.stack}</p>
              {project.href && (
                project.href.startsWith("/") ? (
                  <Link href={project.href} className="cv-project-link">{project.linkLabel} <ArrowIcon /></Link>
                ) : (
                  <a href={project.href} target="_blank" rel="noreferrer" className="cv-project-link">{project.linkLabel} <ArrowIcon diagonal /></a>
                )
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="cv-details-grid" aria-label="Education and technical skills">
        <article className="cv-detail-panel">
          <p className="eyebrow">EDUCATION</p>
          <h2>IT Programming</h2>
          <p>UniCollege <span aria-hidden="true">·</span> Full-time programme, in progress</p>
          <p className="cv-detail-date">2026 - Present</p>
          <div className="cv-education-secondary">
            <h3>National Senior Certificate <span>·</span> Bachelor Pass</h3>
            <p>Hoërskool Monument <span aria-hidden="true">·</span> 2021 - 2025</p>
          </div>
        </article>

        <article className="cv-detail-panel">
          <p className="eyebrow">TECHNICAL SKILLS</p>
          <dl className="cv-skill-groups">
            <div><dt>Languages</dt><dd>Python, JavaScript, TypeScript, SQL, HTML5, CSS</dd></div>
            <div><dt>Frameworks</dt><dd>React, Next.js, Flask, Node.js, Express, .NET (C#), Tailwind CSS</dd></div>
            <div><dt>Data and tools</dt><dd>REST APIs, SQLite, PostgreSQL, Supabase, Git, GitHub, Vercel</dd></div>
            <div><dt>Strengths</dt><dd>Problem solving, computational thinking, teamwork, communication</dd></div>
          </dl>
        </article>
      </section>

      <section className="cv-certifications" aria-labelledby="cv-certifications-title">
        <div className="cv-section-heading cv-certifications-heading">
          <div>
            <p className="eyebrow">CERTIFICATIONS</p>
            <h2 id="cv-certifications-title">Seven Certiport IT Specialist certificates.</h2>
          </div>
          <p>Certiport <span aria-hidden="true">·</span> Pearson VUE</p>
        </div>
        <ul className="cv-certification-list">
          {certifications.map(([name, date]) => (
            <li key={name}><span>{name}</span><time>{date}</time></li>
          ))}
        </ul>
      </section>
    </main>
  );
}
