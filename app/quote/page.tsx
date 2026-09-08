import type { Metadata } from "next";
import { CheckCircle2, Mail, Phone, Send } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Send an early quote enquiry to Soar Global for procurement, freight, import, export or parcel shipping.",
};

export default function QuotePage() {
  return (
    <>
      <section className="section-padding bg-slate-50">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded bg-navy-950 p-7 text-white shadow-soft">
            <span className="inline-flex rounded-full bg-gold-500/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
              Coming soon
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:font-extrabold">Quotes are being prepared.</h1>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Soar Global is not taking instant quote bookings yet. You can still send an early enquiry, and the team will
              reply when quoting opens or advise the next practical step.
            </p>
            <div className="mt-7 space-y-3">
              {["Goods or product type", "Origin and destination", "Approximate size or weight", "Preferred timeline"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-white/82">
                    <CheckCircle2 className="shrink-0 text-gold-500" size={18} aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <QuickContact icon={Mail} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
              <QuickContact icon={Phone} label="Phone" value={contact.phone} href={contact.phoneHref} />
              <QuickContact icon={Send} label="WhatsApp" value={contact.whatsapp} href={contact.whatsappHref} />
            </div>
          </aside>
          <QuoteForm
            heading="Send Early Enquiry"
            intro="Share the basics now. The team will receive your enquiry by email and follow up when quote handling opens."
            submitLabel="Send Early Enquiry"
            subjectLabel="Early quote enquiry"
            successMessage="Thank you. Your early enquiry has been sent to Soar Global."
          />
        </div>
      </section>
    </>
  );
}

function QuickContact({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="flex gap-3 rounded border border-white/10 p-4 transition hover:border-gold-500">
      <Icon className="shrink-0 text-gold-500" size={22} aria-hidden="true" />
      <span>
        <span className="block text-xs font-semibold uppercase tracking-wide text-white/48">{label}</span>
        <span className="mt-1 block break-words text-sm font-medium leading-5 text-white/84">{value}</span>
      </span>
    </a>
  );
}
