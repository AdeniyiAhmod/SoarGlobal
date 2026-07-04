import Image from "next/image";
import Link from "next/link";

type BrandProps = {
  inverse?: boolean;
  compact?: boolean;
};

export function Brand({ inverse = false, compact = false }: BrandProps) {
  return (
    <Link href="/" aria-label="Soar Global" className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500">
      <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-navy-950/10">
        <Image
          src="/images/soar-logo-mark.png"
          alt="Soar Global logo mark"
          fill
          sizes="64px"
          className="object-contain p-1"
          priority
        />
      </span>
      <span className="leading-tight">
        <span className={`block text-lg font-bold tracking-wide sm:font-extrabold ${inverse ? "text-white" : "text-navy-950"}`}>
          Soar Global
        </span>
        {!compact ? (
          <span className="block text-xs font-semibold text-gold-600">
            Trade & Logistics
          </span>
        ) : null}
      </span>
    </Link>
  );
}
