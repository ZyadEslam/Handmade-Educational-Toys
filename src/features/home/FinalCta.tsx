import type { Dictionary } from "@/i18n/dictionaries/en";
import { Button } from "@/components/ui/Button";
import { Sparkle, Smiley } from "@/components/ui/doodles";

/** Last lift before the footer — big, sunny, one action. */
export function FinalCta({ dict }: { dict: Dictionary }) {
  const t = dict.cta;
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-6">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          data-reveal
          className="relative overflow-hidden rounded-[2.5rem] border-[3px] border-ink bg-sun px-6 py-16 text-center shadow-pop-lg sm:px-12"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08]"
            style={{ backgroundImage: "radial-gradient(#2B2440 1.5px, transparent 1.5px)", backgroundSize: "22px 22px" }}
          />
          <Sparkle className="absolute -top-5 start-10 h-10 w-10 rotate-12" />
          <Sparkle className="absolute bottom-6 end-12 h-8 w-8 -rotate-12" color="#FF6B5C" />
          <Smiley className="absolute start-6 bottom-8 hidden h-12 w-12 rotate-6 sm:block" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-[clamp(2.2rem,6vw,3.8rem)] font-extrabold leading-tight tracking-tight text-ink">
              {t.heading} <span className="underline-squiggle text-coral">{t.headingHighlight}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg font-semibold text-ink/80">{t.sub}</p>
            <div className="mt-9">
              <Button href="#toys" size="lg" variant="ink">
                {t.button}
                <svg viewBox="0 0 24 24" className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12h16m0 0-6-6m6 6-6 6" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
