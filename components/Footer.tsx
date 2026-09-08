import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Brand } from "@/components/Brand";
import { ButtonLink } from "@/components/ButtonLink";
import { contact, navItems } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.2fr_1.8fr]">
        <div>
          <Brand inverse />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/68">
            Trade, sourcing and logistics support from Northern Ireland to global markets.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <FooterColumn title="Navigate" items={navItems} />
          <div>
            <h3 className="text-sm font-bold">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/72">
              <a href={contact.phoneHref} className="inline-flex items-start gap-2 hover:text-gold-500 sm:items-center sm:gap-3">
                <Phone className="mt-0.5 shrink-0 sm:mt-0" size={17} aria-hidden="true" />
                <span>{contact.phone}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="inline-flex items-start gap-2 break-all hover:text-gold-500 sm:items-center sm:gap-3">
                <Mail className="mt-0.5 shrink-0 sm:mt-0" size={17} aria-hidden="true" />
                <span>{contact.email}</span>
              </a>
              <ButtonLink href="/quote" className="mt-2 w-fit px-4">
                Get a Quote
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-5 text-xs text-white/56 md:flex-row md:items-center md:justify-between">
          <p>© 2024 Soar Global Trade & Logistics Ltd.</p>
          <div className="flex gap-5">
            <Link href="/resources#privacy-policy" className="hover:text-gold-500">
              Privacy Policy
            </Link>
            <Link href="/resources#terms-conditions" className="hover:text-gold-500">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label?: string; title?: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold">{title}</h3>
      <ul className="mt-4 grid gap-2 text-sm text-white/70">
        {items.map((item) => (
          <li key={item.href}>
            <Link className="hover:text-gold-500" href={item.href}>
              {item.label ?? item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
