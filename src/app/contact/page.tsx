import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Legion Cunningham about product, web, and full stack opportunities.",
};

const contactLinks = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/legion-cunningham",
    href: "https://www.linkedin.com/in/legion-cunningham",
  },
  {
    label: "GitHub",
    value: "github.com/Legionaka",
    href: "https://github.com/Legionaka",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg className="contact-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12 12 4M5 4h7v7" />
    </svg>
  ) : (
    <svg className="contact-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2.5 8h10m-4-4 4 4-4 4" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="page-shell contact-page">
      <header className="contact-hero">
        <p className="eyebrow">CONTACT</p>
        <h1>Have a role or project in mind?</h1>
        <p>
          I&apos;m open to product, web, and full stack opportunities. Email is the
          quickest way to reach me.
        </p>
        <a className="contact-primary-link" href="mailto:legion.cunningham@gmail.com">
          <span>
            <small>Email me</small>
            legion.cunningham@gmail.com
          </span>
          <ArrowIcon diagonal />
        </a>
      </header>

      <section className="contact-panel" aria-label="More ways to connect">
        {contactLinks.map((link) => (
          <a
            className="contact-card contact-card-secondary"
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <strong>{link.label}</strong>
              <span className="contact-card-value">{link.value}</span>
            </span>
            <ArrowIcon diagonal />
          </a>
        ))}
      </section>

      <section className="contact-form-section" aria-labelledby="contact-form-title">
        <div className="contact-form-intro">
          <p className="eyebrow">SEND A MESSAGE</p>
          <h2 id="contact-form-title">Start a conversation.</h2>
          <p>Share the role, project, or question you&apos;d like to discuss.</p>
        </div>
        <ContactForm />
      </section>

      <p className="contact-privacy-note" id="contact-privacy-note">
        Your message and email are stored privately and used to respond to you.
      </p>

      <div className="contact-work-link">
        <span>Want context first?</span>
        <Link className="text-link" href="/projects">
          View selected work <ArrowIcon />
        </Link>
      </div>
    </main>
  );
}
