"use client";

import { useRef } from "react";
import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { images } from "@/lib/images.generated";
import { gsap, useGSAP, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { Button } from "@/components/ui/Button";

/** Signature product deep-dive: dark, confident, with spinning gears. */
export function Spotlight({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const ref = useRef<HTMLElement>(null);
  const t = dict.spotlight;
  const img = images["prod-busyboard"];

  useGSAP(
    () => {
      // if (prefersReducedMotion()) return;
      registerGsap();
      const ctx = gsap.context(() => {
        // the two background gears rotate forever, slowly, in opposite directions
        gsap.to("[data-gear-a]", {
          rotation: 360,
          duration: 24,
          repeat: -1,
          ease: "none",
        });
        gsap.to("[data-gear-b]", {
          rotation: -360,
          duration: 32,
          repeat: -1,
          ease: "none",
        });
        // the board tilts playfully as you scroll through
        gsap.fromTo(
          "[data-spot-tilt]",
          { rotate: 0 },
          {
            rotate: locale === "ar" ? 2.5 : -2.5,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      }, ref);
      return () => ctx.revert();
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y-2 border-ink bg-ink text-white"
    >
      {/* dotted texture + confetti */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(#fff 1.4px, transparent 1.4px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* spinning gears */}
      <svg
        data-gear-a
        viewBox="0 0 200 200"
        className="absolute -start-14 bottom-10 h-56 w-56 opacity-30"
        aria-hidden="true"
      >
        <GearPath fill="#FF6B5C" />
      </svg>
      <svg
        data-gear-b
        viewBox="0 0 200 200"
        className="absolute -end-16 top-8 h-64 w-64 opacity-25"
        aria-hidden="true"
      >
        <GearPath fill="#FFC94D" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        {/* image */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            data-spot-tilt
            className="relative overflow-hidden rounded-[2rem] border-[3px] border-white/90 bg-white shadow-pop-lg"
          >
            <Image
              src={img.src}
              alt={t.imageAlt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 1024px) 44vw, 90vw"
              className="h-auto w-full object-cover"
              placeholder="blur"
              blurDataURL={img.blur}
            />
          </div>
          {/* sticker */}
          <div className="absolute -top-6 end-4 rotate-6 rounded-2xl border-2 border-ink bg-coral px-4 py-2 font-display text-sm font-extrabold text-white shadow-pop">
            {t.sticker} ★
          </div>
        </div>

        {/* copy */}
        <div>
          <p
            data-reveal
            className="font-display text-sm font-extrabold uppercase tracking-[0.2em] text-sun"
          >
            ✦ {t.eyebrow}
          </p>
          <h2
            data-reveal
            data-reveal-delay="0.06"
            className="mt-3 font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-tight"
          >
            {t.heading}
          </h2>
          <p
            data-reveal
            data-reveal-delay="0.12"
            className="mt-4 max-w-lg text-lg font-semibold leading-relaxed text-white/80"
          >
            {t.sub}
          </p>
          <ul className="mt-7 space-y-3">
            {[t.bullet1, t.bullet2, t.bullet3].map((b, i) => (
              <li
                key={b}
                data-reveal
                data-reveal-delay={0.15 + i * 0.07}
                className="flex items-center gap-3 font-bold"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-teal text-sm font-extrabold text-white">
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div data-reveal data-reveal-delay="0.35" className="mt-9">
            <Button href="#contact" size="lg" variant="primary">
              {t.cta}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 12h16m0 0-6-6m6 6-6 6" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function GearPath({ fill }: { fill: string }) {
  return (
    <g>
      {Array.from({ length: 8 }).map((_, i) => (
        <rect
          key={i}
          x="88"
          y="8"
          width="24"
          height="34"
          rx="7"
          fill={fill}
          stroke="#2B2440"
          strokeWidth="3"
          transform={`rotate(${i * 45} 100 100)`}
        />
      ))}
      <circle
        cx="100"
        cy="100"
        r="46"
        fill={fill}
        stroke="#2B2440"
        strokeWidth="3"
      />
      <circle
        cx="100"
        cy="100"
        r="17"
        fill="#FFF7EC"
        stroke="#2B2440"
        strokeWidth="3"
      />
    </g>
  );
}
