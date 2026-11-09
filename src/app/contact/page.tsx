import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get in touch with Legion Cunningham for product, full-stack, and digital experience opportunities.",
};

const contactLinks = [
	{
		label: "Email",
		value: "legion.cunningham@gmail.com",
		href: "mailto:legion.cunningham@gmail.com",
	},
	{
		label: "GitHub",
		value: "github.com/Legionaka",
		href: "https://github.com/Legionaka",
	},
	{
		label: "LinkedIn",
		value: "linkedin.com/in/legion-cunningham",
		href: "https://www.linkedin.com/in/legion-cunningham",
	},
];

export default function ContactPage() {
	return (
		<main className="page-shell contact-page">
			<header className="contact-hero">
				<p className="eyebrow">GET IN TOUCH</p>
				<h1>Let’s build something useful.</h1>
				<p>
					I’m open to product, web, and full-stack opportunities where
					thoughtful, user-centred software makes a real difference.
				</p>
			</header>

			<section className="contact-panel" aria-label="Contact options">
				{contactLinks.map((link) => (
					<article className="contact-card" key={link.label}>
						<strong>{link.label}</strong>
						<span>
							<a
								href={link.href}
								target={
									link.href.startsWith("http")
										? "_blank"
										: undefined
								}
								rel={
									link.href.startsWith("http")
										? "noreferrer"
										: undefined
								}
							>
								{link.value}
							</a>
						</span>
					</article>
				))}
			</section>

			<p className="contact-note">
				I’m especially interested in roles involving product thinking, web
				application development, systems design, and the kind of work that
				balances strong UX with reliable implementation.
			</p>

			<div className="about-actions" style={{ marginTop: "26px" }}>
				<Link
					className="button button-primary"
					href="/projects"
				>
					View selected work <span aria-hidden="true">↗</span>
				</Link>
			</div>
		</main>
	);
}
