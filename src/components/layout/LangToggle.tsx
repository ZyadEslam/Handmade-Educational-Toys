"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { otherLocale } from "@/i18n/config";
import { cx } from "@/lib/cx";

/**
 * Switches between /en and /ar while keeping the current path
 * (so the visitor does not lose their place on the page).
 */
export function LangToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(en|ar)(?=\/|$)/, "");
  const target = `/${otherLocale(locale)}${rest || ""}`;
  const isAr = locale === "ar";

  return (
    <Link
      href={target}
      hrefLang={otherLocale(locale)}
      className={cx(
        "inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ink transition-all hover:-translate-y-0.5 hover:bg-sun"
      )}
      aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
      </svg>
      {isAr ? "EN" : "عربي"}
    </Link>
  );
}
