import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "navy" | "outline" | "light";
  className?: string;
  onClick?: () => void;
  icon?: LucideIcon;
};

const variants = {
  gold:
    "bg-gold-500 text-navy-950 hover:bg-gold-600 focus-visible:outline-gold-500",
  navy:
    "bg-navy-950 text-white hover:bg-navy-800 focus-visible:outline-navy-950",
  outline:
    "border border-white/40 bg-white/5 text-white hover:bg-white/15 focus-visible:outline-white",
  light:
    "border border-navy-950/10 bg-white text-navy-950 hover:border-gold-500 hover:text-gold-600 focus-visible:outline-gold-500",
};

export function ButtonLink({
  href,
  children,
  variant = "gold",
  className = "",
  onClick,
  icon: Icon = ArrowRight,
}: ButtonLinkProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
        <Icon aria-hidden="true" size={17} />
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
      <Icon aria-hidden="true" size={17} />
    </Link>
  );
}
