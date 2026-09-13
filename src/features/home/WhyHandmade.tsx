import type { Dictionary } from "@/i18n/dictionaries/en";
import { SectionHeading, SectionShell } from "./SectionHeading";
import { Wave } from "@/components/ui/doodles";
import { LeafIcon, WoodIcon, BrainIcon, GiftIcon } from "@/components/ui/icons";

const IconComponents = [LeafIcon, WoodIcon, BrainIcon, GiftIcon];
const tints = ["bg-mint", "bg-cream", "bg-lilac", "bg-[#FFEFF5]"];

/** The “serious” section — quiet, calm, trustworthy. Content first. */
export function WhyHandmade({ dict }: { dict: Dictionary }) {
  const t = dict.why;
  return (
    <div id="why" className="relative scroll-mt-24 bg-cream">
      <Wave className="absolute -top-px w-full rotate-180 text-white" fill="#ffffff" />
      <SectionShell className="!pt-16">
        <SectionHeading eyebrow={t.eyebrow} title={t.heading} highlight={t.headingHighlight} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => (
            <div
              key={item.title}
              data-reveal
              data-reveal-delay={String(i * 0.08)}
              className="group rounded-[1.5rem] border-2 border-ink bg-white p-6 shadow-pop transition-all duration-300 hover:-translate-y-1.5 hover:shadow-pop-lg"
            >
              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl border-2 border-ink text-ink transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${tints[i % tints.length]}`}
              >
                {(() => {
                  const Icon = IconComponents[i % IconComponents.length];
                  return <Icon className="h-8 w-8" strokeWidth={2.6} />;
                })()}
              </div>
              <h3 className="mt-4 font-display text-lg font-extrabold text-ink">{item.title}</h3>
              <p className="mt-1.5 text-sm font-semibold leading-relaxed text-ink-soft">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionShell>
      <Wave className="w-full text-ink/5" fill="#ffffff" />
    </div>
  );
}
