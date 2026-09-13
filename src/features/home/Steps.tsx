import type { Dictionary } from "@/i18n/dictionaries/en";
import { SectionHeading, SectionShell } from "./SectionHeading";

const bubbleColors = ["bg-coral text-white", "bg-sun text-ink", "bg-teal text-white"];

/** Three easy steps — short, friendly, with a dashed “journey” line. */
export function Steps({ dict }: { dict: Dictionary }) {
  const t = dict.steps;
  return (
    <SectionShell className="bg-lilac/50">
      <SectionHeading eyebrow={t.eyebrow} title={t.heading} highlight={t.headingHighlight} />
      <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
        {/* dashed connector (ltr+rtl aware) */}
        <div
          aria-hidden="true"
          className="absolute inset-x-[16%] top-8 hidden border-t-[3px] border-dashed border-ink/25 md:block"
        />
        {t.items.map((item, i) => (
          <li key={item.title} data-reveal data-reveal-delay={String(i * 0.12)} className="relative text-center">
            <span
              className={`mx-auto grid h-16 w-16 place-items-center rounded-full border-[3px] border-ink font-display text-2xl font-extrabold shadow-pop ${bubbleColors[i % bubbleColors.length]}`}
            >
              {i + 1}
            </span>
            <h3 className="mt-5 font-display text-xl font-extrabold text-ink">{item.title}</h3>
            <p className="mx-auto mt-2 max-w-[16rem] font-semibold text-ink-soft">{item.desc}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
