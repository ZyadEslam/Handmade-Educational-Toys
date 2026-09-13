"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { Logo } from "@/components/ui/Logo";
import { LangToggle } from "./LangToggle";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/features/cart/cart-context";
import { cx } from "@/lib/cx";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, openCart } = useCart();
  const t = dict.header.nav;
  const isAr = locale === "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "#toys", label: t.toys },
    { href: "#why", label: t.why },
    { href: "#gallery", label: t.gallery },
    { href: "#story", label: t.story },
    { href: "#faq", label: t.faq },
  ];

  return (
    <header
      className={cx(
        "sticky top-0 z-50 w-full border-b-2 transition-all duration-300",
        scrolled ? "border-ink/10 bg-white/90 shadow-[0_4px_20px_rgba(43,36,64,0.08)] backdrop-blur-md" : "border-transparent bg-white"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}#top`} aria-label="HM Toys — home" className="shrink-0">
          <Logo locale={locale} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-bold text-ink-soft transition-colors hover:bg-lilac hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LangToggle locale={locale} />
          <button
            type="button"
            onClick={openCart}
            className="relative grid h-10 w-10 place-items-center rounded-2xl border-2 border-ink bg-white transition-all hover:-translate-y-0.5 hover:bg-sun"
            aria-label={dict.cart.title}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 7h12l1.2 12.2a1.5 1.5 0 0 1-1.5 1.8H6.3a1.5 1.5 0 0 1-1.5-1.8L6 7Z" />
              <path d="M9 9V6a3 3 0 0 1 6 0v3" />
            </svg>
            {count > 0 && (
              <span className="absolute -end-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full border-2 border-ink bg-coral px-1 text-[0.65rem] font-extrabold text-white">
                {count}
              </span>
            )}
          </button>
          <Button href="#toys" className="hidden md:inline-flex" variant="primary" size="md">
            {dict.header.cta}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cx(
              "grid h-10 w-10 place-items-center rounded-2xl border-2 border-ink bg-white transition-colors hover:bg-cream lg:hidden",
              open && "bg-sun"
            )}
            aria-expanded={open}
            aria-label={isAr ? "القائمة" : "Menu"}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t-2 border-ink/10 bg-white px-4 py-3 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 font-display text-base font-bold text-ink hover:bg-lilac"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button href="#toys" className="w-full" size="lg" onClick={() => setOpen(false)}>
                {dict.header.cta}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
