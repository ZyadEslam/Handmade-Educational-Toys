import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

/**
 * Consistent short heading block: eyebrow pill + big display heading.
 * Keep copy to three words — images do the talking.
 */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  sub,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  sub?: string;
  align?: "start" | "center";
}) {
  return (
    <div className={cx("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-start")}>
      {eyebrow && (
        <p
          data-reveal
          className={cx(
            "mb-3 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-3.5 py-1 font-display text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-ink-soft shadow-pop-sm",
            align === "center" && "mx-auto"
          )}
        >
          <span className="text-coral">★</span>
          {eyebrow}
        </p>
      )}
      <h2
        data-reveal
        className="font-display text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold leading-tight tracking-tight text-ink"
      >
        {title} {highlight && <span className="underline-squiggle text-coral">{highlight}</span>}
      </h2>
      {sub && (
        <p data-reveal data-reveal-delay="0.08" className="mt-4 text-base font-semibold text-ink-soft sm:text-lg">
          {sub}
        </p>
      )}
    </div>
  );
}

export function SectionShell({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cx("section-pad relative scroll-mt-24", className)}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
