"use client";

import { FormEvent } from "react";
import { contact, services } from "@/lib/site";

type QuoteFormProps = {
  heading?: string;
};

export function QuoteForm({ heading = "Request a Quote" }: QuoteFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Quote request from ${data.get("name") ?? "website visitor"}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name") ?? ""}`,
        `Email: ${data.get("email") ?? ""}`,
        `Phone: ${data.get("phone") ?? ""}`,
        `Service: ${data.get("service") ?? ""}`,
        `Route: ${data.get("route") ?? ""}`,
        "",
        "Message:",
        `${data.get("message") ?? ""}`,
      ].join("\n"),
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded border border-navy-950/10 bg-white p-6 shadow-soft">
      <h2 className="text-2xl font-black uppercase text-navy-950">{heading}</h2>
      <p className="mt-2 text-sm leading-6 text-navy-950/68">
        Tell us what you need to move or source. This form opens your email app with the details ready to send.
      </p>
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
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded bg-gold-500 px-5 py-3 text-sm font-black uppercase tracking-wide text-navy-950 transition hover:bg-gold-600 sm:w-auto"
      >
        Send Quote Request
      </button>
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
