import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type Project = { id: string; title: string; summary: string; image_url: string | null; live_url: string | null; repo_url: string | null };

export default function ProjectsPage() {
  return <main className="page-shell projects-page">
    <header className="projects-intro"><p className="eyebrow">SELECTED WORK</p><h1>Projects</h1><p>A closer look at the people, workflows, and decisions behind each build.</p></header>
    <Suspense fallback={<p className="project-empty">Loading projects…</p>}><ProjectsContent /></Suspense>
  </main>;
}

async function ProjectsContent() {
  const supabase = await createSupabaseServerClient();
  let projects: Project[] = [];
  const configured = Boolean(supabase);
  let loadError = false;
  if (supabase) {
    const { data, error } = await supabase.from("projects").select("id,title,summary,image_url,live_url,repo_url").eq("published", true).order("created_at", { ascending: false });
    if (!error) projects = data ?? [];
    else loadError = true;
  }
  return <>
    {!configured ? <p className="project-empty">Projects will appear here once the Supabase connection is configured.</p> : loadError ? <p className="project-empty" role="status">Projects could not be loaded. Please try again later.</p> : projects.length === 0 ? <p className="project-empty">No published projects yet. Check back soon.</p> : <section className="project-list" aria-label="Published projects">
      {projects.map((project, index) => <article className="project-card projects-feature" key={project.id}>
        <div className="project-visual">{project.image_url ? <Image className="project-screenshot" src={project.image_url} alt={`${project.title} project preview`} fill sizes="(max-width: 700px) 100vw, 650px" unoptimized /> : <div className="project-no-image">{project.title}</div>}</div>
        <div className="project-info"><p className="eyebrow">{String(index + 1).padStart(2, "0")} / PROJECT</p><div className="project-title-row"><h2>{project.title}</h2></div><p>{project.summary}</p><div className="project-card-bottom">
          <div className="project-links">{project.live_url && <a href={project.live_url} target="_blank" rel="noreferrer">Live project ↗</a>}{project.repo_url && <a href={project.repo_url} target="_blank" rel="noreferrer">Source code ↗</a>}{project.title.toLowerCase().includes("medi-clinic") && <Link href="/projects/medi-clinic">Case study →</Link>}</div>
        </div></div>
      </article>)}
    </section>}
  </>;
}
