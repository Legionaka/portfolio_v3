"use client";

import { useActionState, useRef } from "react";
import { sendContactMessage, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactMessage, initialState);
  const startedAt = useRef<HTMLInputElement>(null);

  return (
    <form
      className="contact-form"
      action={action}
      aria-describedby="contact-privacy-note"
      onFocusCapture={() => {
        if (startedAt.current && !startedAt.current.value) {
          startedAt.current.value = String(Date.now());
        }
      }}
    >
      <input ref={startedAt} type="hidden" name="startedAt" defaultValue="" />
      <div className="contact-form-trap" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label>
        Your name
        <input name="name" autoComplete="name" maxLength={120} required />
      </label>
      <label>
        Email address
        <input name="email" type="email" autoComplete="email" maxLength={254} required />
      </label>
      <label>
        Message
        <textarea name="message" rows={6} minLength={10} maxLength={5000} required />
      </label>
      <button className="admin-button" type="submit" disabled={pending}>
        {pending ? "Sending..." : "Send message"}
      </button>
      {state.message && (
        <p
          className="contact-form-status"
          role={state.status === "error" ? "alert" : "status"}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
