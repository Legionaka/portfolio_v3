import type { Metadata } from "next";
import Link from "next/link";
import { SiteNavigation } from "./mobile-nav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfoliov3-ashen-rho.vercel.app"),
  title: {
    default: "Legion Cunningham | Full Stack Developer",
    template: "%s | Legion Cunningham",
  },
  description:
    "Portfolio of Legion Cunningham, a full stack developer building thoughtful digital experiences.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Legion Cunningham | Full Stack Developer",
    description: "Portfolio of Legion Cunningham, a full stack developer building thoughtful digital experiences.",
    siteName: "Legion Cunningham Portfolio",
    images: [{ url: "/images/medi-clinic/landing-page.png", alt: "Medi-Clinic featured project" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legion Cunningham | Full Stack Developer",
    description: "Portfolio of Legion Cunningham, a full stack developer building thoughtful digital experiences.",
    images: ["/images/medi-clinic/landing-page.png"],
  },
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="Legion Cunningham home">
            Legion Cunningham
          </Link>
          <SiteNavigation />
          <div className="header-links">
            <a href="https://www.linkedin.com/in/legion-cunningham" target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="/Legion-Cunningham-CV.pdf" target="_blank">
              Resume <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>
        <div id="main-content">{children}</div>
        <footer className="site-footer">
          <span>Legion Cunningham · Portfolio</span>
          <div>
            <span>Full Stack Developer</span>
            <Link href="/contact">Contact ↗</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
