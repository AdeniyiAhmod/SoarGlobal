import type { Metadata } from "next";
import { Mail, MapPin, Phone, Send, type LucideIcon } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Soar Global Trade & Logistics in Belfast, Northern Ireland.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-padding bg-slate-50">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded bg-navy-950 p-7 text-white shadow-soft">
            <h1 className="text-3xl font-extrabold tracking-tight">Contact Soar Global</h1>
            <p className="mt-3 text-sm leading-6 text-white/68">Call, email or send a short enquiry.</p>
            <div className="mt-6 grid gap-5">
              <ContactLink icon={MapPin} title="Visit us" value={contact.address} href="/contact" />
              <ContactLink icon={Phone} title="Call us" value={contact.phone} href={contact.phoneHref} />
              <ContactLink icon={Mail} title="Email us" value={contact.email} href={`mailto:${contact.email}`} />
              <ContactLink icon={Send} title="WhatsApp" value={contact.whatsapp} href={contact.whatsappHref} />
            </div>
          </div>
          <QuoteForm heading="Send an Enquiry" />
        </div>
      </section>
    </>
  );
}

function ContactLink({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="flex gap-4 rounded border border-white/10 p-4 transition hover:border-gold-500">
      <Icon className="shrink-0 text-gold-500" size={28} aria-hidden="true" />
      <span>
        <span className="block text-xs font-bold uppercase text-white/50">{title}</span>
        <span className="mt-1 block text-sm font-semibold leading-6 text-white/82">{value}</span>
      </span>
    </a>
  );
}
