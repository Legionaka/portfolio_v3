import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legion Cunningham | Full Stack Developer",
  description: "Portfolio of Legion Cunningham, a full stack developer building thoughtful digital experiences.",
};

const navigation = [["About", "/about"], ["Projects", "/projects"], ["Skills", "/skills"], ["Contact", "/contact"], ["CV", "/cv"]];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en"><body>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header"><Link className="brand" href="/" aria-label="Legion Cunningham home"><span className="brand-mark">LC</span><span>Legion Cunningham</span></Link><nav className="site-nav" aria-label="Main navigation">{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav></header>
      <div id="main-content">{children}</div>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Legion Cunningham</span><div><span>Full Stack Developer</span><a href="mailto:hello@example.com">Email ↗</a></div></footer>
    </body></html>
  );
}
