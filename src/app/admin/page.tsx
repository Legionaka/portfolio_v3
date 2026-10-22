import { redirect } from "next/navigation";
import { Suspense } from "react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { deleteProject, saveProject, signOut } from "./actions";

type Project = { id: string; title: string; summary: string; image_url: string | null; live_url: string | null; repo_url: string | null; published: boolean };
function ProjectForm({ project }: { project?: Project }) {
  return <form className="admin-form project-edit-form" action={saveProject}>
    {project && <input type="hidden" name="id" value={project.id} />}
    <label>Title<input name="title" defaultValue={project?.title} required maxLength={120} /></label>
    <label>Summary<textarea name="summary" defaultValue={project?.summary} required maxLength={600} rows={3} /></label>
    <label>Preview image URL<input name="image_url" type="url" defaultValue={project?.image_url ?? ""} placeholder="https://…" /></label>
    <label>Live project URL<input name="live_url" type="url" defaultValue={project?.live_url ?? ""} placeholder="https://…" /></label>
    <label>Source code URL<input name="repo_url" type="url" defaultValue={project?.repo_url ?? ""} placeholder="https://github.com/…" /></label>
    <label className="admin-checkbox"><input name="published" type="checkbox" defaultChecked={project?.published ?? true} /> Published on public Projects page</label>
    <button className="admin-button" type="submit">{project ? "Save changes" : "Add project"}</button>
  </form>;
}

export default function AdminPage({ searchParams }: { searchParams: Promise<{ error?: string; saved?: string }> }) {
  return <main className="page-shell admin-page"><Suspense fallback={<p>Loading portfolio admin…</p>}><AdminContent searchParams={searchParams} /></Suspense></main>;
}

async function AdminContent({ searchParams }: { searchParams: Promise<{ error?: string; saved?: string }> }) {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/admin/login?error=setup");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");
  const { data: isOwner } = await supabase.rpc("is_portfolio_owner");
  if (!isOwner) redirect("/admin/login?error=owner");
  const { data, error } = await supabase.from("projects").select("id,title,summary,image_url,live_url,repo_url,published").order("created_at", { ascending: false });
  const projects = (data ?? []) as Project[];
  const params = await searchParams;
  return <><div className="admin-heading"><div><p className="eyebrow">PORTFOLIO MANAGEMENT</p><h1>Projects admin</h1><p>Signed in as {user.email}</p></div><form action={signOut}><button className="admin-button admin-button-secondary">Sign out</button></form></div>
    {params.saved && <p className="admin-message">Changes saved.</p>}{params.error && <p className="admin-message" role="alert">Could not save that change. Check the project details and owner policy.</p>}{error && <p className="admin-message" role="alert">Could not load projects. Confirm the migration and owner setup are complete.</p>}
    <section className="admin-section"><h2>Add a project</h2><ProjectForm /></section>
    <section className="admin-section"><h2>Existing projects ({projects.length})</h2>{projects.length === 0 ? <p>No project entries yet.</p> : projects.map((project) => <article className="admin-project" key={project.id}><div><strong>{project.title}</strong><span>{project.published ? "Published" : "Draft"}</span></div><ProjectForm project={project} /><form action={deleteProject}><input type="hidden" name="id" value={project.id} /><button className="admin-button admin-button-danger" type="submit">Delete {project.title}</button></form></article>)}</section>
  </>;
}
