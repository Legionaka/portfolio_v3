import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell placeholder-page" style={{ paddingTop: "96px" }}>
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p>
        The page you’re looking for doesn’t exist or may have moved. Head back to the
        portfolio homepage to keep exploring.
      </p>
      <div className="about-actions" style={{ marginTop: "22px" }}>
        <Link className="button button-primary" href="/">
          Back to home <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}
