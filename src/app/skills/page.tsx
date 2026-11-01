const skills = [
	{
		name: "Next.js App Router",
		description:
			"Building route-based pages and server-rendered project listings with structured app architecture.",
		evidence: "Portfolio project pages",
		href: "https://github.com/Legionaka/portfolio_v3",
		kind: "source",
	},
	{
		name: "React and TypeScript",
		description:
			"Structuring typed interfaces and reusable UI patterns for real application flows.",
		evidence: "Medi-Clinic case study",
		href: "/projects/medi-clinic",
		kind: "source",
	},
	{
		name: "Supabase and SQL",
		description:
			"Designing and securing data models with owner-only access, RLS, and database-backed content.",
		evidence: "Supabase setup notes",
		href: "https://github.com/Legionaka/portfolio_v3/blob/main/docs/supabase-setup.md",
		kind: "source",
	},
	{
		name: "Authentication and CRUD",
		description:
			"Protecting admin access and enabling project management through owner-only authenticated flows.",
		evidence: "Portfolio admin",
		href: "/admin/login",
		kind: "source",
	},
	{
		name: "Responsive interface design",
		description:
			"Adapting layouts, spacing, and navigation to work smoothly across desktop and mobile screens.",
		evidence: "Portfolio styles",
		href: "https://github.com/Legionaka/portfolio_v3/blob/main/src/app/globals.css",
		kind: "source",
	},
	{
		name: "Node.js and Express",
		description:
			"Building API-backed exploration experiences around route, data, and middleware structure.",
		evidence: "Altis Airport Explorer",
		href: "https://github.com/Legionaka/atlis_capstone",
		kind: "project",
	},
	{
		name: "External API integration",
		description:
			"Connecting search and route data to a third-party provider in a user-friendly experience.",
		evidence: "Altis provider module",
		href: "https://github.com/Legionaka/atlis_capstone",
		kind: "source",
	},
	{
		name: "Offline-first web apps",
		description:
			"Implementing resilient local data handling and sync-ready app patterns for mobile use cases.",
		evidence: "Tight Lines project",
		href: "https://github.com/Legionaka/paap_app5",
		kind: "source",
	},
	{
		name: "Authentication and data sync",
		description:
			"Handling user sessions and syncing saved records through a managed backend and app state flow.",
		evidence: "Tight Lines project",
		href: "https://github.com/Legionaka/paap_app5",
		kind: "project",
	},
	{
		name: "Invoice PDF generation",
		description:
			"Generating protected invoice documents on demand within a healthcare workflow.",
		evidence: "Medi-Clinic project",
		href: "/projects/medi-clinic",
		kind: "source",
	},
	{
		name: "Deployment",
		description:
			"Publishing and maintaining portfolio work through a live production deployment workflow.",
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
				<p>
					Each skill links to code or a deployed page where you can see it in
					practice.
				</p>
			</header>

			<section className="skills-list" aria-label="Skills and evidence">
				{skills.map((skill, index) => (
					<article className="skill-card" key={skill.name}>
						<span className="skill-number">
							{String(index + 1).padStart(2, "0")}
						</span>
						<div className="skill-copy">
							<h2>{skill.name}</h2>
							<p>{skill.description}</p>
						</div>
						<a
							className="skill-evidence"
							href={skill.href}
							target={
								skill.href.startsWith("/") ? undefined : "_blank"
							}
							rel={
								skill.href.startsWith("/")
									? undefined
									: "noreferrer"
							}
						>
							<span>
								{skill.kind === "live" ? "Live" : "Code"}
							</span>
							{skill.evidence}
							<span aria-hidden="true"> ↗</span>
						</a>
					</article>
				))}
			</section>
		</main>
	);
}
