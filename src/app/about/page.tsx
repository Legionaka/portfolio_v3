import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Legion Cunningham, a full stack developer building useful products and clear workflows.",
};

const focusAreas = [
  {
    number: "01",
    title: "Understand the workflow",
    description:
      "Clarify who the product serves, what they need to do, and where the current process gets difficult.",
    detail: "People · Tasks · Decisions",
  },
  {
    number: "02",
    title: "Design and build the system",
    description:
      "Connect focused interfaces with the data, roles, and backend behavior that support each workflow.",
    detail: "Interface · Data · Access",
  },
  {
    number: "03",
    title: "Make decisions easy to review",
    description:
      "Show how the product works, explain key trade-offs, and leave a clear path for what comes next.",
    detail: "Evidence · Trade-offs · Next steps",
  },
];

export default function AboutPage() {
  return (
    <main className="page-shell about-page">
      <header className="about-hero">
        <p className="eyebrow">ABOUT</p>
        <h1>I&apos;m Legion Cunningham.</h1>
        <p className="about-lede">
          I build useful digital products by bringing product thinking, clear
          interfaces, and dependable full stack development together.
        </p>
        <div className="about-hero-links">
          <Link className="button button-primary" href="/projects">
            See my work <span aria-hidden="true">↗</span>
          </Link>
          <Link className="text-link" href="/contact">
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>

      <section className="about-story" aria-labelledby="about-story-title">
        <div>
          <p className="eyebrow">HOW I APPROACH THE WORK</p>
          <h2 id="about-story-title">Good software makes the next step easier.</h2>
        </div>
        <div className="about-story-copy">
          <p>
            I&apos;m interested in the parts of software where people, information,
            and everyday processes meet. My work focuses on making those
            experiences easier to follow, while building the underlying systems
            with care.
          </p>
          <p>
            Medi-Clinic is a good example: one clinic system with distinct
            workspaces for patients, clinicians, and administrators. I built it
            end to end as a demonstration project and documented the decisions
            behind it in a case study.
          </p>
          <Link className="about-case-link" href="/projects/medi-clinic">
            Read the Medi-Clinic case study <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="about-focus" aria-labelledby="about-focus-title">
        <div className="about-focus-heading">
          <div>
            <p className="eyebrow">HOW I WORK</p>
            <h2 id="about-focus-title">From a real problem to a clear result.</h2>
          </div>
          <p className="about-focus-intro">
            A practical process that connects user needs, engineering decisions,
            and product outcomes.
          </p>
        </div>
        <ol className="about-focus-grid">
          {focusAreas.map((area) => (
            <li className="about-focus-card" key={area.number}>
              <span className="about-focus-number" aria-hidden="true">{area.number}</span>
              <div className="about-focus-copy">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <span className="about-focus-detail">{area.detail}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-next" aria-labelledby="about-next-title">
        <div>
          <p className="eyebrow">NEXT</p>
          <h2 id="about-next-title">Let&apos;s make something useful.</h2>
          <p>
            I&apos;m open to product, web, and full stack opportunities where
            thoughtful software can make a practical difference.
          </p>
        </div>
        <div className="about-actions">
          <Link className="button button-primary" href="/contact">
            Contact me <span aria-hidden="true">→</span>
          </Link>
          <Link className="text-link" href="/cv">
            View my CV <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
