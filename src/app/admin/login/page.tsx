import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { signIn } from "../actions";

export const instant = false;

export default async function AdminLogin({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return <main className="page-shell admin-page"><h1>Supabase setup needed</h1><p>Add the required environment variables and apply the migration described in the README.</p><Link href="/projects">Back to projects</Link></main>;
  const { data: { user } } = await supabase.auth.getUser();
  const { error } = await searchParams;
  const { data: isOwner } = user ? await supabase.rpc("is_portfolio_owner") : { data: false };
  if (user && isOwner) redirect("/admin");
  return <main className="page-shell admin-page"><p className="eyebrow">PORTFOLIO MANAGEMENT</p><h1>Admin sign in</h1><p>Sign in with the owner account configured for this portfolio.</p>
    {error === "credentials" && <p className="admin-message" role="alert">Email or password is incorrect.</p>}
    {(error === "owner" || (user && !isOwner)) && <p className="admin-message" role="alert">This account is not the portfolio owner.</p>}
    <form className="admin-form" action={signIn}><label>Email<input name="email" type="email" autoComplete="email" required /></label><label>Password<input name="password" type="password" autoComplete="current-password" required /></label><button className="admin-button" type="submit">Sign in</button></form>
  </main>;
}
