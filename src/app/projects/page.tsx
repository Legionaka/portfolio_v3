import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="page-shell projects-page">
      <header className="projects-intro">
        <p className="eyebrow">SELECTED WORK</p>
        <h1>Projects</h1>
        <p>A closer look at the people, workflows, and decisions behind each build.</p>
      </header>

      <section aria-labelledby="featured-project-title">
        <Link className="project-card projects-feature" href="/projects/medi-clinic" aria-label="Explore the Medi-Clinic case study">
          <div className="project-visual"><Image className="project-screenshot" src="/images/medi-clinic/landing-page.png" alt="Medi-Clinic landing page with connected-care introduction and patient sign-in." fill sizes="(max-width: 700px) 100vw, 650px" /></div>
          <div className="project-info">
            <p className="eyebrow">01 / HEALTHCARE · ROLE-BASED PORTAL</p>
            <div className="project-title-row"><h2 id="featured-project-title">Medi-Clinic</h2><span className="arrow-circle" aria-hidden="true">↗</span></div>
            <p>A clinic portal with dedicated tools for patients, doctors, and administrators.</p>
            <div className="tag-row"><span>Patient workspace</span><span>Clinical tools</span><span>Clinic operations</span></div>
            <div className="project-card-bottom"><span className="project-cta">Explore case study <span aria-hidden="true">→</span></span><span className="safety-note">Demonstration system · Not verified for production patient data</span></div>
          </div>
        </Link>
      </section>
    </main>
  );
}
