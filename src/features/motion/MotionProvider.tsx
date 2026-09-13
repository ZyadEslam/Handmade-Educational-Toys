"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion, registerGsap } from "@/lib/gsap";

/**
 * One declarative animation system for the whole page.
 * Sections stay server-rendered and opt into effects with data attributes:
 *
 *   data-reveal           → fade + rise when scrolled into view (once)
 *   data-reveal-delay="n" → seconds to delay (stagger lists by index)
 *   data-float            → gentle idle bobbing
 *   data-speed="0.3"      → parallax strength while scrolling (0–1)
 *
 * All animations are skipped for visitors with prefers-reduced-motion.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return; // content stays fully visible & static
      registerGsap();

      const ctx = gsap.context(() => {
        // Scroll reveals
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 42, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              ease: "power3.out",
              delay: Number(el.dataset.revealDelay ?? 0),
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            }
          );
        });

        // Idle floats
        gsap.utils.toArray<HTMLElement>("[data-float]").forEach((el) => {
          gsap.to(el, {
            y: -12,
            duration: 2.2 + Math.random() * 1.4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: Math.random() * 1.5,
          });
        });

        // Scrub parallax
        gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
          const speed = Math.min(Math.max(Number(el.dataset.speed ?? 0.2), 0), 1);
          gsap.fromTo(
            el,
            { yPercent: speed * 12 },
            {
              yPercent: -speed * 12,
              ease: "none",
              scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: 0.6 },
            }
          );
        });
      }, root);

      return () => ctx.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root} className="contents">
      {children}
    </div>
  );
}

/** Convenience: register once at app start (idempotent). */
export function registerMotionPlugins(): void {
  registerGsap();
}
