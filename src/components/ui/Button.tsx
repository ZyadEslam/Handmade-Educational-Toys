import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

type Variant = "primary" | "secondary" | "ink" | "sun" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl font-display font-bold transition-all duration-200 border-2 border-ink select-none active:translate-y-0.5 active:shadow-none disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-coral text-white shadow-pop hover:-translate-y-0.5 hover:bg-coral-deep",
  secondary: "bg-white text-ink shadow-pop hover:-translate-y-0.5 hover:bg-cream",
  ink: "bg-ink text-white shadow-pop hover:-translate-y-0.5 hover:bg-[#3a3157]",
  sun: "bg-sun text-ink shadow-pop hover:-translate-y-0.5 hover:bg-[#ffd76f]",
  ghost: "border-transparent bg-transparent text-ink hover:bg-lilac",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsAnchor = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsAnchor | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cx(base, variants[variant], sizes[size], className);
  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
