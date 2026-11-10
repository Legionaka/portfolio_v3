import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ProjectPreview } from "./project-preview";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Legion Cunningham's selected work across product, full-stack, and user-focused digital experiences.",
};

type Project = {
  id: string;
  title: string;
  summary: string;
  image_url: string | null;
  live_url: string | null;
  repo_url: string | null;
  video_url: string | null;
  role: string | null;
  outcome: string | null;
  stack: string[];
  featured: boolean;
  sort_order: number;
  fallback?: boolean;
};

const mediClinicFallback: Project = {
  id: "medi-clinic-fallback",
  title: "Medi-Clinic",
  summary: "A role-based demonstration portal bringing patient services and clinic operations into one connected system.",
  image_url: "/images/medi-clinic/landing-page.png",
  live_url: "https://5-soc-dash-zlps.vercel.app/",
  repo_url: "https://github.com/Legionaka/5SOC_Dash",
  video_url: null,
  role: "Full-stack developer",
  outcome: "Connected patient, clinician, and administrator workflows in one demonstration portal.",
  stack: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
  featured: true,
  sort_order: 0,
  fallback: true,
};

export default function ProjectsPage() {
  return (
    <main className="page-shell projects-page">
      <header className="projects-intro">
        <p className="eyebrow">SELECTED WORK</p>
        <h1>Projects</h1>
        <p>A closer look at the people, workflows, and decisions behind each build.</p>
      </header>
      <Suspense fallback={<p className="project-empty">Loading projects...</p>}>
        <ProjectsContent />
      </Suspense>
    </main>
  );
}

async function ProjectsContent() {
  const supabase = await createSupabaseServerClient();
  let projects: Project[] = [];
  let loadError = false;

  if (supabase) {
    const { data, error } = await supabase
      .from("projects")
      .select("id,title,summary,image_url,live_url,repo_url,video_url,role,outcome,stack,featured,sort_order")
      .eq("published", true)
      .order("featured", { ascending: false })
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (!error) projects = (data ?? []) as Project[];
    else loadError = true;
  }

  if (loadError || projects.length === 0) {
    projects = [mediClinicFallback, ...projects.filter((project) => !project.title.toLowerCase().includes("medi-clinic"))];
  } else if (!projects.some((project) => project.title.toLowerCase().includes("medi-clinic"))) {
    projects.unshift(mediClinicFallback);
  }

  return (
    <>
      {loadError && <p className="project-empty" role="status">Some projects could not be loaded. Showing the featured case study while the connection is restored.</p>}
      {!supabase && <p className="project-empty" role="status">Showing the featured case study. More projects will appear when the portfolio database is connected.</p>}
      <section className="project-list" aria-label="Published projects">
        {projects.map((project, index) => (
          <article className="project-card projects-feature" key={project.id || `${project.title}-${index}`}>
            <div className="project-visual">
              <ProjectPreview title={project.title} src={project.image_url} />
            </div>
            <div className="project-info">
              <p className="eyebrow">{project.featured ? "FEATURED PROJECT" : `${String(index + 1).padStart(2, "0")} / PROJECT`}</p>
              <div className="project-title-row"><h2>{project.title}</h2></div>
              <p>{project.summary}</p>
              {(project.role || project.outcome) && (
                <dl className="project-evidence">
                  {project.role && <div><dt>Contribution</dt><dd>{project.role}</dd></div>}
                  {project.outcome && <div><dt>What it delivers</dt><dd>{project.outcome}</dd></div>}
                </dl>
              )}
              {project.stack?.length > 0 && <div className="tag-row project-stack" aria-label="Technology used">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>}
              <div className="project-card-bottom"><div className="project-links">
                {project.live_url && <a href={project.live_url} target="_blank" rel="noreferrer">{project.fallback || project.title.toLowerCase().includes("medi-clinic") ? "Open demo portal" : "Live project"} <span aria-hidden="true">&#8599;</span></a>}
                {project.repo_url && <a href={project.repo_url} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">&#8599;</span></a>}
                {project.video_url && <a href={project.video_url} target="_blank" rel="noreferrer">Watch demo <span aria-hidden="true">&#8599;</span></a>}
                {project.title.toLowerCase().includes("medi-clinic") && <Link href="/projects/medi-clinic">Case study <span aria-hidden="true">&#8594;</span></Link>}
              </div></div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
