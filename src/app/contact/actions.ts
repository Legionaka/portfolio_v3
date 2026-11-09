"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export type ContactFormState = { status: "idle" | "success" | "error"; message?: string };

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();
  const startedAt = Number(formData.get("startedAt"));
  const elapsed = Date.now() - startedAt;

  if (website || !Number.isFinite(startedAt) || elapsed < 2500 || elapsed > 60 * 60 * 1000) {
    return { status: "success", message: "Thanks. Your message has been sent." };
  }
  if (!name || name.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || message.length < 10 || message.length > 5000) {
    return { status: "error", message: "Please check your details and message, then try again." };
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) return { status: "error", message: "The contact form is temporarily unavailable. Please email me directly." };

  const { error } = await supabase.from("contact_messages").insert({ name, email, message });
  if (error) return { status: "error", message: "The message could not be sent. Please email me directly." };
  return { status: "success", message: "Thanks. Your message has been sent." };
}
