"use client";

import { useRef } from "react";
import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { images } from "@/lib/images.generated";
import { gsap, useGSAP, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { Button } from "@/components/ui/Button";
import { HandmadeSticker, Sparkle, Smiley } from "@/components/ui/doodles";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const ref = useRef<HTMLElement>(null);
  const t = dict.hero;

  useGSAP(
    () => {
      // if (prefersReducedMotion()) return;
      registerGsap();

      const ctx = gsap.context(() => {
        // entrance: staggered rise
        gsap.fromTo(
          "[data-hero-item]",
          { y: 34, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.9, ease: "power3.out", stagger: 0.11, delay: 0.15 }
        );

        // collage: gentle settle-tilt on load, drift on scroll
        gsap.fromTo(
          "[data-hero-tilt]",
          { rotate: locale === "ar" ? 4 : -4, scale: 0.94 },
          { rotate: locale === "ar" ? 2 : -2, scale: 1, duration: 1.2, ease: "back.out(1.6)" }
        );
        gsap.to("[data-hero-parallax]", {
          yPercent: -8,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 0.5 },
        });
      }, ref);

      return () => ctx.revert();
    },
    { scope: ref }
  );

  const heroImg = images["hero-alphabet"];

  return (
    <section ref={ref} id="top" className="relative overflow-hidden bg-white">
      {/* playful background confetti */}
      <div className="bg-dots absolute inset-0 opacity-60" aria-hidden="true" />
      <Sparkle className="absolute start-[6%] top-24 h-7 w-7 animate-bounce-slow" />
      <Sparkle className="absolute end-[8%] top-40 h-9 w-9 -rotate-12" color="#8B7CF6" />
      <Sparkle className="absolute start-[45%] top-16 h-5 w-5" color="#FF92B6" />
      <Smiley className="absolute bottom-24 start-[3%] hidden h-10 w-10 md:block" />
      <div aria-hidden="true" className="absolute -end-24 top-24 h-64 w-64 rounded-full border-2 border-dashed border-teal/40" />
      <div aria-hidden="true" className="absolute -start-16 bottom-10 h-40 w-40 rounded-full border-2 border-dashed border-coral/40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8 lg:pb-24 lg:pt-20">
        {/* ——— copy ——— */}
        <div className="max-w-xl">
          <p
            data-hero-item
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sun px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-wide text-ink shadow-pop-sm"
          >
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-coral" />
            {t.eyebrow}
          </p>

          <h1
            data-hero-item
            className="mt-6 font-display text-[clamp(2.6rem,7vw,4.6rem)] font-extrabold leading-[1.02] tracking-tight text-ink"
          >
            {t.titleA}{" "}
            <span className="underline-squiggle whitespace-nowrap text-coral">{t.titleHighlight}</span>{" "}
            {t.titleB}
          </h1>

          <p data-hero-item className="mt-5 max-w-md text-lg font-semibold leading-relaxed text-ink-soft">
            {t.sub}
          </p>

          <div data-hero-item className="mt-7 flex flex-wrap gap-3">
            {t.chips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full bg-lilac px-3.5 py-1.5 text-sm font-extrabold text-ink"
              >
                <span className="text-teal">✦</span>
                {chip}
              </span>
            ))}
          </div>

          <div data-hero-item className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#toys" size="lg" variant="primary">
              {t.ctaPrimary}
              <svg viewBox="0 0 24 24" className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 12h16m0 0-6-6m6 6-6 6" />
              </svg>
            </Button>
            <Button href="#story" size="lg" variant="secondary">
              {t.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* ——— product collage ——— */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div data-hero-tilt className="relative">
            <div
              className="relative overflow-hidden rounded-[2rem] border-[3px] border-ink shadow-pop-lg"
              data-hero-parallax
            >
              <Image
                src={heroImg.src}
                alt={t.imageAlt}
                width={heroImg.width}
                height={heroImg.height}
                priority
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="h-auto w-full object-cover"
                placeholder="blur"
                blurDataURL={heroImg.blur}
              />
            </div>

            {/* floating secondary product */}
            <div
              data-float
              className="absolute -bottom-8 -start-4 w-28 -rotate-6 overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-pop sm:-start-8 sm:w-36"
            >
              <Image
                src={images["fly-rainbow"].src}
                alt={t.floatingCard}
                width={images["fly-rainbow"].width}
                height={images["fly-rainbow"].height}
                className="h-auto w-full object-cover"
              />
              <p className="border-t-2 border-ink bg-sun px-2 py-1 text-center font-display text-[0.6rem] font-extrabold text-ink sm:text-xs">
                {t.floatingCard}
              </p>
            </div>

            {/* rotating sticker */}
            <HandmadeSticker
              label={t.floatingBadge}
              className="absolute -top-9 -end-2 h-24 w-24 sm:-end-6 sm:h-28 sm:w-28"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
