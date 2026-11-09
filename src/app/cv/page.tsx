import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "CV",
	description:
		"Professional summary and experience overview for Legion Cunningham, a full stack developer focused on useful digital products.",
};

const experience = [
	{
		title: "Full Stack Developer",
		detail: "Focused on web applications, product workflows, and well-structured data-driven interfaces.",
	},
	{
		title: "Product-minded problem solver",
		detail: "Works across UX, app logic, and backend systems to turn practical requirements into usable software.",
	},
	{
		title: "Evidence-based builder",
		detail: "Builds with a focus on accessibility, maintainability, iterative delivery, and clear technical decisions.",
	},
];

const strengths = [
	"Next.js and React application development",
	"TypeScript and component-driven frontend architecture",
	"Supabase data design, auth, and RLS workflows",
	"Responsive UI implementation and user-focused design decisions",
	"API integration, deployment, and iterative delivery",
];

export default function CvPage() {
	return (
		<main className="page-shell cv-page">
			<header className="cv-hero">
				<p className="eyebrow">EXPERIENCE</p>
				<h1>CV</h1>
				<p>
					I build useful software for real workflows—combining product thinking,
					front-end clarity, and dependable backend structure.
				</p>
				<div className="cv-meta">
					<span>Legion Cunningham</span>
					<span>Full Stack Developer</span>
					<span>Available for product and web roles</span>
				</div>
				<a className="button button-primary cv-download" href="/Legion-Cunningham-CV.pdf" download>
					Download CV <span aria-hidden="true">↓</span>
				</a>
			</header>

			<section className="cv-grid" aria-label="CV details">
				<article className="cv-card">
					<h2>Profile</h2>
					<p>
						Full stack developer focused on building digital products that are
						useful, understandable, and reliable for the people who depend on them.
					</p>
				</article>

				<article className="cv-card">
					<h2>Core strengths</h2>
					<ul className="cv-list">
						{strengths.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</article>

				<article className="cv-card">
					<h2>Selected experience</h2>
					<ul className="cv-list">
						{experience.map((item) => (
							<li key={item.title}>
								<strong>{item.title}</strong> — {item.detail}
							</li>
						))}
					</ul>
				</article>

				<article className="cv-card">
					<h2>Portfolio highlights</h2>
					<p>
						Work spans healthcare operations, route discovery tools, offline-first
						mobile experiences, and a portfolio system backed by Supabase and App
						Router.
					</p>
					<Link href="/projects" aria-label="View selected work">
						Explore projects ↗
					</Link>
				</article>
			</section>
		</main>
	);
}
