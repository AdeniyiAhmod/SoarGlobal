"use client";

import { useState } from "react";
import { Minus, Plus, Send } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { contact, faqs } from "@/lib/site";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-600">
            Questions
          </p>
          <h2 className="mt-4 max-w-md text-4xl font-extrabold leading-tight tracking-tight text-navy-950 sm:text-5xl">
            Clear answers before goods move.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-navy-950/68">
            A few common questions about sourcing, freight, export and parcel movement.
          </p>
          <div className="mt-8 hidden lg:block">
            <FaqActions />
          </div>
        </div>

        <div>
          <div className="grid gap-4">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              const answerId = `faq-answer-${index}`;

              return (
                <article
                  key={faq.question}
                  className={`rounded-2xl border bg-white transition ${
                    open ? "border-gold-500/60 shadow-soft" : "border-navy-950/10 hover:border-gold-500/40"
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold leading-7 text-navy-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 sm:px-6 sm:text-lg"
                    aria-expanded={open}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${open ? "bg-gold-500 text-navy-950" : "bg-slate-100 text-navy-950/72"}`}>
                      {open ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
                    </span>
                  </button>
                  {open ? (
                    <div id={answerId} className="px-5 pb-6 text-base leading-7 text-navy-950/68 sm:px-6">
                      {faq.answer}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
          <div className="mt-5 lg:hidden">
            <FaqActions />
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqActions() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:flex lg:flex-col xl:flex-row">
      <ButtonLink href="/quote" className="w-full px-3 sm:px-5">
        Get a Quote
      </ButtonLink>
      <ButtonLink href={contact.whatsappHref} variant="light" icon={Send} className="w-full px-3 sm:px-5">
        WhatsApp Us
      </ButtonLink>
    </div>
  );
}
