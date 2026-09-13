"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export { gsap, ScrollTrigger, useGSAP };

/** True when the visitor prefers reduced motion (WCAG 2.3.3). */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Register GSAP plugins exactly once (idempotent). */
export function registerGsap(): void {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}
