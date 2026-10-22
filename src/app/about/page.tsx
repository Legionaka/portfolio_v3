import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="page-shell about-page">
      <header className="about-hero">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h1>I’m Legion Cunningham.</h1>
        <p className="about-lede">
          I’m working toward a Full Stack Developer role, building web experiences
          that make complex tasks feel clear and manageable.
        </p>
      </header>

      <section className="about-content" aria-labelledby="about-work-title">
        <div>
          <p className="eyebrow">WHAT I’M BUILDING</p>
          <h2 id="about-work-title">Useful tools for real workflows.</h2>
        </div>
        <div className="about-copy">
          <p>
            My featured project is Medi-Clinic, a role-based portal for patients
            and clinic teams. It brings appointments, care records, billing, and
            day-to-day staff workflows into one place.
          </p>
          <p>
            I’m interested in roles where I can work across the interface and the
            systems behind it, learn from a team, and keep improving through
            practical projects.
          </p>
          <div className="about-actions">
            <Link className="button button-primary" href="/projects">Explore my work <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/contact">Get in touch <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
