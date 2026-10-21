import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="intro-title">
        <p className="eyebrow">FULL STACK DEVELOPER</p>
        <h1 id="intro-title">I build useful<br className="desktop-break" /> digital experiences.</h1>
        <p className="hero-copy">I’m Legion Cunningham. I enjoy turning complex problems into clear, thoughtful software for the people who use it.</p>
        <div className="hero-actions"><Link className="button button-primary" href="/projects">Explore my work <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/contact">Get in touch <span aria-hidden="true">→</span></Link></div>
      </section>
      <section className="featured" aria-labelledby="featured-title">
        <div className="section-heading"><div><p className="eyebrow">FEATURED PROJECT</p><h2 id="featured-title">Selected work</h2></div><Link className="text-link" href="/projects">All projects <span aria-hidden="true">→</span></Link></div>
        <Link className="project-card" href="/projects/medi-clinic" aria-label="Read the Medi-Clinic case study">
          <div className="project-visual"><Image className="project-screenshot" src="/images/medi-clinic/landing-page.png" alt="Medi-Clinic landing page introducing its connected-care portal." fill sizes="(max-width: 700px) 100vw, 560px" /></div>
          <div className="project-info"><p className="eyebrow">FEATURED CASE STUDY · HEALTHCARE</p><div className="project-title-row"><h3>Medi-Clinic</h3><span className="arrow-circle" aria-hidden="true">↗</span></div><p>A role-based clinic portal bringing patient services and care-team workflows together.</p><div className="tag-row"><span>Patient workspace</span><span>Clinical tools</span><span>Clinic operations</span></div><p className="safety-note">Demonstration system · Not verified for production patient data</p></div>
        </Link>
      </section>
      <section className="about-strip"><p className="eyebrow">A LITTLE ABOUT ME</p><p>I’m interested in building dependable, accessible products across the stack—from the interface people use to the systems that support it.</p><Link className="text-link" href="/about">More about me <span aria-hidden="true">→</span></Link></section>
    </main>
  );
}
