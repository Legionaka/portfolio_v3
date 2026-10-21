import Link from "next/link";

const workspaces = [
  { role: "Patient workspace", summary: "A patient home for appointments, medical records, wallet and billing, invoices, notifications, and profile details." },
  { role: "Doctor workspace", summary: "A clinical workspace for the appointment queue, patient charts, results, prescriptions and referrals, clinical notes, availability, and patient messages." },
  { role: "Administrator workspace", summary: "An operations overview for appointments, patient requests, staff coverage, billing, patient records, staff accounts, and clinic scheduling." },
];

export default function MediClinicPage() {
  return (
    <main className="page-shell case-study">
      <Link className="back-link" href="/projects">← Back to projects</Link>
      <header className="case-hero">
        <p className="eyebrow">FEATURED CASE STUDY · HEALTHCARE</p>
        <h1>Medi-Clinic</h1>
        <p className="case-lede">A role-based clinic portal that brings patient services and clinic operations into one connected system.</p>
        <div className="tag-row"><span>Patient experience</span><span>Clinical workflows</span><span>Clinic operations</span></div>
      </header>

      <section className="case-section" aria-labelledby="overview-title">
        <div className="case-section-heading"><p className="eyebrow">01 / OVERVIEW</p><h2 id="overview-title">One clinic, every role.</h2></div>
        <p>Medi-Clinic is a demonstration portal for patients and care teams. Patients can manage appointments, view records and invoices, and use a wallet view. Staff dashboards support clinical workflows, scheduling, pharmacy operations, and billing. An administrator overview brings appointment status and revenue information into view.</p>
      </section>

      <section className="case-section" aria-labelledby="workspaces-title">
        <div className="case-section-heading"><p className="eyebrow">02 / ROLE-BASED WORKSPACES</p><h2 id="workspaces-title">The right tools for each role.</h2></div>
        <div className="case-grid">{workspaces.map((workspace, index) => <article className="case-card" key={workspace.role}><span className="case-index">0{index + 1}</span><h3>{workspace.role}</h3><p>{workspace.summary}</p></article>)}</div>
      </section>

      <section className="case-section" aria-labelledby="design-title">
        <div className="case-section-heading"><p className="eyebrow">03 / EXPERIENCE</p><h2 id="design-title">A clear way into complex workflows.</h2></div>
        <p>The public landing page gives patients and clinic teams a direct sign-in path. Once signed in, each role gets its own navigation and overview, keeping the most relevant tasks close at hand. The patient and staff interfaces use a calm teal palette, clear labels, and familiar dashboard patterns.</p>
      </section>

      <aside className="case-disclaimer"><strong>Demonstration system</strong><p>Medi-Clinic has not been verified for production use with real patient data.</p></aside>
    </main>
  );
}
