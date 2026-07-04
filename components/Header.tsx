"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Brand } from "@/components/Brand";
import { ButtonLink } from "@/components/ButtonLink";
import { navItems } from "@/lib/site";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-950/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10 2xl:px-14">
        <Brand compact />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                className={`text-sm font-semibold transition hover:text-gold-600 ${active ? "text-gold-600" : "text-navy-950/72"}`}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <ButtonLink href="/quote">Get a Quote</ButtonLink>
        </div>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-navy-950/15 text-navy-950 md:hidden"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-navy-950/10 bg-white md:hidden">
          <nav className="container-shell grid gap-1 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded px-2 py-3 text-base font-semibold text-navy-950 hover:bg-gold-500/10 hover:text-gold-600"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/quote" className="mt-2" onClick={close}>
              Get a Quote
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
