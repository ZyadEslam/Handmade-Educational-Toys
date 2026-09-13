import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { SITE, whatsappLink } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { Sparkle } from "@/components/ui/doodles";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.footer;
  const year = new Date().getFullYear();
  const isAr = locale === "ar";

  const links = [
    { href: `/${locale}#story`, label: t.links[0] },
    { href: `/${locale}#why`, label: t.links[1] },
    { href: `/${locale}#gallery`, label: t.links[2] },
    { href: `/${locale}#faq`, label: t.links[3] },
  ];

  return (
    <footer className="relative overflow-hidden border-t-2 border-ink bg-cream">
      <Sparkle className="absolute -top-4 start-8 h-8 w-8 rotate-12" />
      <Sparkle className="absolute bottom-10 end-10 h-6 w-6 -rotate-12" color="#FF92B6" />

      <div className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo locale={locale} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">{t.blurb}</p>
            <div className="mt-5 flex gap-2">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-2xl border-2 border-ink bg-white transition-all hover:-translate-y-0.5 hover:bg-pink"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={whatsappLink(isAr ? "مرحبًا! لدي سؤال عن الألعاب" : "Hi! I have a question about your toys")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-2xl border-2 border-ink bg-white transition-all hover:-translate-y-0.5 hover:bg-mint"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.2 1.1-1.7 1.2-.5 0-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c0 .2.1.4 0 .6l-.4.6-.5.5c-.1.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.1.5.2.6.4 0 .1 0 .7-.2 1.5Z" />
                </svg>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-2xl border-2 border-ink bg-white transition-all hover:-translate-y-0.5 hover:bg-sky"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
            </div>
          </div>

          <nav aria-label={t.linksTitle}>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-ink-soft">
              {t.linksTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm font-bold text-ink underline-offset-4 hover:text-coral hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-ink-soft">
              {t.contactTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm font-bold text-ink">
              <li>
                <a className="hover:text-coral" href={`mailto:${SITE.email}`} dir="ltr">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a className="hover:text-coral" href={whatsappLink("Hello!")} target="_blank" rel="noopener noreferrer" dir="ltr">
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li>{t.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t-2 border-ink/10 pt-6 sm:flex-row">
          <p className="text-xs font-bold text-ink-soft">
            © {year} {isAr ? "HM Toys" : "HM Toys"} — {t.rights}
          </p>
          <p className="text-xs font-bold text-ink-soft">{t.madeBy}</p>
        </div>
      </div>
    </footer>
  );
}
