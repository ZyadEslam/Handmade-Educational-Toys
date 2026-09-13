import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { images } from "@/lib/images.generated";
import { Sparkle } from "@/components/ui/doodles";

/** Our story — the calm, human, trust-building moment of the page. */
export function Story({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.story;
  const img = images["craft-hands"];
  const isAr = locale === "ar";

  return (
    <section id="story" className="section-pad relative scroll-mt-24 overflow-hidden bg-cream">
      <Sparkle className="absolute start-[8%] top-16 h-8 w-8 rotate-12" />
      <Sparkle className="absolute bottom-16 end-[6%] h-6 w-6 -rotate-12" color="#5BC6F5" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        {/* photo with washi-tape corners */}
        <div data-reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative -rotate-2 overflow-hidden rounded-[1.75rem] border-[3px] border-ink shadow-pop-lg transition-transform duration-300 hover:rotate-0">
            <Image
              src={img.src}
              alt={isAr ? "أيدينا أثناء صناعة لعبة خشبية" : "Our hands shaping a wooden toy"}
              width={img.width}
              height={img.height}
              sizes="(min-width: 1024px) 38vw, 85vw"
              className="h-auto w-full object-cover"
              placeholder="blur"
              blurDataURL={img.blur}
            />
            {/* tape strips */}
            <span aria-hidden="true" className="absolute -top-3 start-8 h-7 w-24 -rotate-6 rounded-sm bg-sun/80" />
            <span aria-hidden="true" className="absolute -bottom-3 end-8 h-7 w-24 rotate-3 rounded-sm bg-pink/70" />
          </div>
          <div className="absolute -bottom-5 start-1/2 w-max -translate-x-1/2 rotate-[-2deg] rounded-2xl border-2 border-ink bg-white px-5 py-2.5 shadow-pop rtl:translate-x-1/2">
            <p className="font-display text-sm font-extrabold text-ink">{t.badge}</p>
          </div>
        </div>

        {/* words */}
        <div>
          <p data-reveal className="font-display text-sm font-extrabold uppercase tracking-[0.2em] text-coral">
            ✦ {t.eyebrow}
          </p>
          <h2 data-reveal data-reveal-delay="0.06" className="mt-3 font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold leading-tight text-ink">
            {t.heading}
          </h2>
          <p
            data-reveal
            data-reveal-delay="0.12"
            className={`mt-6 text-xl font-bold leading-relaxed text-ink sm:text-2xl ${isAr ? "" : "font-hand"}`}
          >
            “{t.quote}”
          </p>
          <div data-reveal data-reveal-delay="0.2" className="mt-8 flex items-center gap-4">
            <span
              className={`font-display text-3xl font-extrabold text-coral ${isAr ? "" : "font-hand"}`}
              dir="ltr"
            >
              {t.name}
            </span>
          </div>
          <p data-reveal data-reveal-delay="0.26" className="mt-1 text-sm font-bold uppercase tracking-wider text-ink-soft">
            {t.role}
          </p>
        </div>
      </div>
    </section>
  );
}
