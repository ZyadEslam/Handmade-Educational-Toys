import type { Dictionary } from "@/i18n/dictionaries/en";
import { SectionHeading, SectionShell } from "./SectionHeading";

const avatarBgs = ["bg-sun", "bg-sky", "bg-pink"];

/** Three short parent quotes — trust, without walls of text. */
export function Testimonials({ dict }: { dict: Dictionary }) {
  const t = dict.testimonials;
  return (
    <SectionShell className="bg-white">
      <SectionHeading title={t.heading} highlight={t.headingHighlight} />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {t.quotes.map((q, i) => (
          <figure
            key={q.name}
            data-reveal
            data-reveal-delay={String(i * 0.1)}
            className="relative flex flex-col rounded-[1.5rem] border-2 border-ink bg-cream p-6 shadow-pop transition-all duration-300 hover:-translate-y-1.5 hover:shadow-pop-lg"
          >
            <span aria-hidden="true" className="absolute -top-5 start-5 font-display text-6xl font-extrabold text-coral">
              “
            </span>
            <div className="flex gap-1" aria-label="5/5">
              {Array.from({ length: 5 }).map((_, s) => (
                <svg key={s} viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M12 2.5l2.8 6 6.7.6-5 4.4 1.4 6.5L12 16.6l-5.9 3.4 1.4-6.5-5-4.4 6.7-.6L12 2.5Z"
                    fill="#FFC94D"
                    stroke="#2B2440"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              ))}
            </div>
            <blockquote className="mt-4 flex-1 font-semibold leading-relaxed text-ink">{q.text}</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span
                className={`grid h-11 w-11 place-items-center rounded-full border-2 border-ink font-display text-lg font-extrabold text-ink ${avatarBgs[i % avatarBgs.length]}`}
                aria-hidden="true"
              >
                {q.name.charAt(0)}
              </span>
              <span className="leading-tight">
                <span className="block font-display font-extrabold text-ink">{q.name}</span>
                <span className="block text-xs font-bold text-ink-soft">{q.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}
