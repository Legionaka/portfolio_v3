import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Legion Cunningham, a full stack developer focused on useful products and clear workflows.",
};

const strengths = [
  "Full stack product thinking",
  "UI, data, and workflow design",
  "Role-based user experiences",
  "Reliable deployment and iteration",
];

export default function AboutPage() {
  return (
    <main className="page-shell about-page">
      <header className="about-hero">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h1>I’m Legion Cunningham.</h1>
        <p className="about-lede">
          I build digital products that help people do work with less friction,
          clearer context, and better confidence.
        </p>
      </header>

      <section className="about-panel" aria-labelledby="about-work-title">
        <div className="about-panel-copy">
          <p className="eyebrow">WHAT I’M BUILDING</p>
          <h2 id="about-work-title">Useful tools for real workflows.</h2>
          <p>
            My featured project is Medi-Clinic, a role-based portal for patients and
            clinic teams. It brings appointments, records, billing, and operational
            workflows into one connected experience.
          </p>
          <p>
            I’m especially interested in roles where I can contribute across the
            interface, the data layer, and the product decisions that shape how
            people actually use the software.
          </p>
        </div>

        <div className="about-side">
          <div className="about-metrics" aria-label="Core strengths">
            {strengths.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="about-actions">
            <Link className="button button-primary" href="/projects">
              Explore my work <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/contact">
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
