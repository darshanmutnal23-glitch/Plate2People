"use client";

import { useState, FormEvent } from "react";

export default function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      role: formData.get("role") as string,
      city: formData.get("city") as string,
      message: (formData.get("message") as string) || "",
    };

    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to submit");
    }
  }

  return (
    <div className="join-panel" id="contact">
      <h3>Become a partner</h3>
      <p>Tell us how you would like to contribute.</p>

      <form id="partnerForm" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="name">Your name *</label>
            <input
              id="name"
              name="name"
              required
              placeholder="Full name"
              disabled={status === "loading"}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              disabled={status === "loading"}
            />
          </div>

          <div className="field">
            <label htmlFor="role">I am a… *</label>
            <select
              id="role"
              name="role"
              required
              disabled={status === "loading"}
            >
              <option value="">Choose one</option>
              <option>Restaurant / caterer</option>
              <option>NGO / community organisation</option>
              <option>Volunteer / student</option>
              <option>Event organiser</option>
              <option>Other</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="city">City *</label>
            <input
              id="city"
              name="city"
              required
              placeholder="e.g. Belagavi"
              disabled={status === "loading"}
            />
          </div>

          <div className="field full">
            <label htmlFor="message">How would you like to help?</label>
            <textarea
              id="message"
              name="message"
              placeholder="Share a little about your organisation or idea…"
              disabled={status === "loading"}
            />
          </div>

          <div className="field full">
            <button
              className="btn"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading"
                ? "Sending…"
                : "Send Partnership Interest ↗"}
            </button>
          </div>
        </div>

        {status === "success" && (
          <div className="success" role="status">
            Thanks for your interest! We have received your details and will get
            back to you soon.
          </div>
        )}

        {status === "error" && (
          <div className="error" role="alert">
            {errorMsg || "Something went wrong. Please try again."}
          </div>
        )}

        <p className="notice">
          Food safety comes first. Only suitable food handled and transported
          safely should be redistributed.
        </p>
      </form>
    </div>
  );
}
