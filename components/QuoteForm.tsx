"use client";

import { FormEvent, useState } from "react";
import { contact, services } from "@/lib/site";

type QuoteFormProps = {
  heading?: string;
  intro?: string;
  submitLabel?: string;
  subjectLabel?: string;
  successMessage?: string;
};

export function QuoteForm({
  heading = "Request a Quote",
  intro = "Tell us what you need to move or source, and we will route the enquiry to the Soar Global inbox.",
  submitLabel = "Send Quote Request",
  subjectLabel = "Quote request",
  successMessage = "Thank you. Your enquiry has been sent.",
}: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: subjectLabel,
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          route: data.get("route"),
          message: data.get("message"),
          _honey: data.get("_honey"),
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Could not send your enquiry. Please email us directly.");
      }

      form.reset();
      setStatus("success");
      setFeedback(successMessage);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? `${error.message} You can also email ${contact.email}.`
          : `Could not send your enquiry. Please email ${contact.email}.`,
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded border border-navy-950/10 bg-white p-6 shadow-soft">
      <h2 className="text-2xl font-bold uppercase text-navy-950 sm:font-extrabold">{heading}</h2>
      <p className="mt-2 text-sm leading-6 text-navy-950/68">{intro}</p>
      <input name="_honey" type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Email address" name="email" type="email" required />
        <Field label="Phone number" name="phone" type="tel" />
        <label className="grid gap-2 text-sm font-bold text-navy-950">
          Service
          <select name="service" className="min-h-12 rounded border border-navy-950/15 px-3 text-base font-medium outline-none focus:border-gold-500">
            {services.map((service) => (
              <option key={service.slug}>{service.title}</option>
            ))}
          </select>
        </label>
        <Field label="Origin and destination" name="route" className="sm:col-span-2" />
        <label className="grid gap-2 text-sm font-bold text-navy-950 sm:col-span-2">
          Message
          <textarea
            name="message"
            rows={5}
            required
            className="rounded border border-navy-950/15 px-3 py-3 text-base font-medium outline-none focus:border-gold-500"
            placeholder="Share shipment size, product type, timelines or any support you need."
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded bg-gold-500 px-5 py-3 text-sm font-bold uppercase tracking-wide text-navy-950 transition hover:bg-gold-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : submitLabel}
      </button>
      {feedback ? (
        <p
          className={`mt-4 text-sm leading-6 ${status === "success" ? "text-emerald-700" : "text-red-700"}`}
          role="status"
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`grid gap-2 text-sm font-bold text-navy-950 ${className}`}>
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="min-h-12 rounded border border-navy-950/15 px-3 text-base font-medium outline-none focus:border-gold-500"
      />
    </label>
  );
}
