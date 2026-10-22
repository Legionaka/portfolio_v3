"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function field(formData: FormData, name: string) { return String(formData.get(name) ?? "").trim(); }
function safeUrl(value: string) { return !value || /^https?:\/\//i.test(value); }

export async function signIn(formData: FormData) {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/admin/login?error=setup");
  const { error } = await supabase.auth.signInWithPassword({ email: field(formData, "email"), password: field(formData, "password") });
  if (error) redirect("/admin/login?error=credentials");
  redirect("/admin");
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase?.auth.signOut();
  redirect("/admin/login");
}

export async function saveProject(formData: FormData) {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/admin/login?error=setup");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");
  const { data: isOwner } = await supabase.rpc("is_portfolio_owner");
  if (!isOwner) redirect("/admin/login?error=owner");
  const id = field(formData, "id");
  const title = field(formData, "title");
  const summary = field(formData, "summary");
  const image_url = field(formData, "image_url") || null;
  const live_url = field(formData, "live_url") || null;
  const repo_url = field(formData, "repo_url") || null;
  if (!title || !summary || ![image_url, live_url, repo_url].every((value) => value === null || safeUrl(value))) redirect("/admin?error=invalid");
  const project = { title, summary, image_url, live_url, repo_url, published: formData.get("published") === "on", owner_id: user.id };
  const result = id ? await supabase.from("projects").update(project).eq("id", id) : await supabase.from("projects").insert(project);
  if (result.error) redirect("/admin?error=save");
  revalidatePath("/projects"); revalidatePath("/admin");
  redirect("/admin?saved=1");
}

export async function deleteProject(formData: FormData) {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/admin/login?error=setup");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");
  const { data: isOwner } = await supabase.rpc("is_portfolio_owner");
  if (!isOwner) redirect("/admin/login?error=owner");
  const { error } = await supabase.from("projects").delete().eq("id", field(formData, "id"));
  if (error) redirect("/admin?error=delete");
  revalidatePath("/projects"); revalidatePath("/admin");
  redirect("/admin?saved=1");
}
