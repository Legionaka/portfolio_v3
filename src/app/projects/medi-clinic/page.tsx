import Link from "next/link";
import Image from "next/image";

const workspaces = [
  { role: "Patient workspace", summary: "A patient home for appointments, medical records, wallet and billing, invoices, notifications, and profile details." },
  { role: "Doctor workspace", summary: "A clinical workspace for the appointment queue, patient charts, results, prescriptions and referrals, clinical notes, availability, and patient messages." },
  { role: "Administrator workspace", summary: "An operations overview for appointments, patient requests, staff coverage, billing, patient records, staff accounts, and clinic scheduling." },
];

const screens = [
  { src: "/images/medi-clinic/landing-page.png", alt: "Medi-Clinic public landing page with a sign-in action and connected-care introduction.", caption: "Public landing page", detail: "A welcoming entry point for patients and clinic teams." },
  { src: "/images/medi-clinic/admin-overview.png", alt: "Medi-Clinic administrator dashboard showing appointment, patient request, and invoice summaries with clinic operation links.", caption: "Administrator overview", detail: "Clinic operations, staff coverage, appointments, and billing." },
  { src: "/images/medi-clinic/patient-workspace.png", alt: "Medi-Clinic patient workspace with appointment, medical record, wallet, and billing shortcuts.", caption: "Patient workspace", detail: "Appointments, records, notifications, and billing in one place." },
  { src: "/images/medi-clinic/doctor-workspace.png", alt: "Medi-Clinic doctor workspace with appointment queue, patient charts, results, prescriptions, and clinical tools.", caption: "Doctor workspace", detail: "A role-specific view for clinical work and follow-up." },
];

const projectUrl = "https://5-soc-dash-zlps.vercel.app/";
const repositoryUrl = "https://github.com/Legionaka/5SOC_Dash";
const stack = ["Next.js App Router", "React", "Supabase Auth", "PostgreSQL", "Tailwind CSS", "PDFKit"];

export default function MediClinicPage() {
  return (
    <main className="page-shell case-study">
      <Link className="back-link" href="/projects">← Back to projects</Link>
      <header className="case-hero">
        <p className="eyebrow">FEATURED CASE STUDY · HEALTHCARE</p>
        <h1>Medi-Clinic</h1>
        <p className="case-lede">A role-based clinic portal that brings patient services and clinic operations into one connected system.</p>
        <div className="tag-row"><span>Patient experience</span><span>Clinical workflows</span><span>Clinic operations</span></div>
        <div className="case-hero-links"><a className="button button-primary" href={projectUrl} target="_blank" rel="noreferrer">Open live project <span aria-hidden="true">↗</span></a><a className="case-inline-link" href={repositoryUrl} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a></div>
      </header>

      <section className="case-section case-problem" aria-labelledby="problem-title">
        <div className="case-section-heading"><p className="eyebrow">01 / THE CHALLENGE</p><h2 id="problem-title">One clinic, different needs.</h2></div>
        <p>Patients, clinicians, and administrators work with the same clinic but need different information and tools. Patients need appointments, records, and billing; care teams need clinical workspaces; administrators need an overview of operations. Medi-Clinic brings these experiences into one demonstration portal while keeping the workspaces distinct.</p>
      </section>

      <section className="case-section" aria-labelledby="workspaces-title">
        <div className="case-section-heading"><p className="eyebrow">02 / THE APPROACH</p><h2 id="workspaces-title">The right tools for each role.</h2></div>
        <div className="case-grid">{workspaces.map((workspace, index) => <article className="case-card" key={workspace.role}><span className="case-index">0{index + 1}</span><h3>{workspace.role}</h3><p>{workspace.summary}</p></article>)}</div>
      </section>

      <section className="case-section" aria-labelledby="role-stack-title">
        <div className="case-section-heading"><p className="eyebrow">03 / MY ROLE & STACK</p><h2 id="role-stack-title">Built end to end.</h2></div>
        <div className="case-role-stack"><p>I built the Medi-Clinic system end to end, including its role-based patient, care-team, and administrator experiences.</p><h3>Technology</h3><div className="tag-row">{stack.map((item) => <span key={item}>{item}</span>)}</div></div>
      </section>

      <section className="case-section" aria-labelledby="design-title">
        <div className="case-section-heading"><p className="eyebrow">04 / DESIGN DECISIONS</p><h2 id="design-title">Keep each role focused.</h2></div>
        <div className="case-decision-grid">
          <article><h3>Separate workspaces</h3><p>Each role has its own navigation and landing view, so patient services and staff tools are grouped around the work shown in that workspace.</p></article>
          <article><h3>Surface the next task</h3><p>Overview cards put appointments, pending work, and account information near the top, with links into the relevant workflow.</p></article>
          <article><h3>Use a shared visual language</h3><p>Consistent labels, spacing, and dashboard patterns help the different workspaces feel like one clinic system.</p></article>
        </div>
      </section>

      <section className="case-section" aria-labelledby="screens-title">
        <div className="case-section-heading"><p className="eyebrow">05 / PRODUCT SCREENS</p><h2 id="screens-title">One system, distinct experiences.</h2></div>
        <div className="case-gallery">{screens.map((screen, index) => <figure className={`case-shot${index === 0 ? " case-shot-wide" : ""}`} key={screen.src}><Image src={screen.src} alt={screen.alt} width={index === 0 ? 1901 : index === 1 ? 1906 : index === 2 ? 1910 : 1900} height={index === 0 ? 871 : index === 1 ? 867 : index === 2 ? 868 : 871} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 80vw, 900px" /> <figcaption><strong>{screen.caption}</strong><span>{screen.detail}</span></figcaption></figure>)}</div>
      </section>

      <section className="case-section case-next" aria-labelledby="next-title">
        <div className="case-section-heading"><p className="eyebrow">06 / WHAT I’D DO NEXT</p><h2 id="next-title">Verify the deployment and remaining work.</h2></div>
        <p>My next steps are to configure and smoke-test a deployed URL, record two-user access checks against Supabase, and implement or defer the remaining proposal items.</p>
        <a className="case-inline-link" href={projectUrl} target="_blank" rel="noreferrer">Visit Medi-Clinic <span aria-hidden="true">↗</span></a>
      </section>

      <aside className="case-disclaimer"><strong>Demonstration system</strong><p>Medi-Clinic has not been verified for production use with real patient data.</p></aside>
    </main>
  );
}
