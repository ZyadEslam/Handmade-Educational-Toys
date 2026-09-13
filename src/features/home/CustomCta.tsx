"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { parseCustomOrder } from "@/lib/validators";
import { whatsappLink } from "@/lib/constants";
import { cx } from "@/lib/cx";
import { PaletteIcon, PencilIcon, ThreadIcon, RibbonIcon } from "@/components/ui/icons";

/**
 * Custom-order form: validated with zod, sanitized for XSS,
 * then handed off to WhatsApp (no backend needed — it's a one-woman shop).
 */
export function CustomCta({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const f = dict.custom.form;
  const isAr = locale === "ar";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = parseCustomOrder({ name, phone, message });
    if (!result.success) {
      const issue = result.error.issues[0]?.message ?? "invalid";
      setError(
        issue === "invalid-phone"
          ? f.errorPhone
          : result.error.issues.some((i) => i.path[0] === "message") && issue === "custom"
            ? f.errorLength
            : f.errorRequired
      );
      setSent(false);
      return;
    }
    const text = isAr
      ? `مرحبًا! أريد طلب لعبة مخصصة:\n${result.data.message}\n— ${result.data.name}${result.data.phone ? ` (${result.data.phone})` : ""}`
      : `Hi! I'd love a custom toy:\n${result.data.message}\n— ${result.data.name}${result.data.phone ? ` (${result.data.phone})` : ""}`;
    setError(null);
    setSent(true);
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section-pad relative scroll-mt-24 overflow-hidden bg-coral">
      {/* confetti dots */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(#2B2440 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="text-white">
          <p data-reveal className="font-display text-sm font-extrabold uppercase tracking-[0.2em] text-ink">
            ✦ {dict.custom.eyebrow}
          </p>
          <h2
            data-reveal
            data-reveal-delay="0.06"
            className="mt-3 font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold leading-tight text-white"
          >
            {dict.custom.heading}
          </h2>
          <p data-reveal data-reveal-delay="0.12" className="mt-4 max-w-md text-lg font-semibold leading-relaxed text-white/90">
            {dict.custom.sub}
          </p>
          <ul data-reveal data-reveal-delay="0.18" className="mt-6 flex flex-wrap gap-2.5">
            {[PaletteIcon, PencilIcon, ThreadIcon, RibbonIcon].map((Icon, i) => (
              <li
                key={i}
                className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink bg-white text-ink shadow-pop-sm"
                aria-hidden="true"
              >
                <Icon className="h-7 w-7" strokeWidth={2.6} />
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal data-reveal-delay="0.1" className="rounded-[1.75rem] border-[3px] border-ink bg-white p-6 shadow-pop-lg sm:p-8">
          {sent ? (
            <div className="grid min-h-[16rem] place-items-center text-center" role="status">
              <div>
                <div className="bg-dots mx-auto grid h-20 w-20 place-items-center rounded-3xl border-2 border-ink bg-mint text-4xl">
                  💌
                </div>
                <p className="mx-auto mt-5 max-w-xs font-display text-lg font-extrabold text-ink">{f.success}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <span className="font-display text-sm font-extrabold text-ink">{f.name} *</span>
                  <input
                    type="text"
                    name="name"
                    required
                    maxLength={60}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl border-2 border-ink/20 bg-cream/50 px-4 py-3 font-semibold text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:border-ink focus:bg-white"
                    placeholder={isAr ? "أحمد" : "Ahmed"}
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="font-display text-sm font-extrabold text-ink">{f.phone}</span>
                  <input
                    type="tel"
                    name="phone"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    dir="ltr"
                    className="rounded-xl border-2 border-ink/20 bg-cream/50 px-4 py-3 font-semibold text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:border-ink focus:bg-white"
                    placeholder="+20 1xx xxx xxxx"
                  />
                </label>
              </div>
              <label className="grid gap-1.5">
                <span className="font-display text-sm font-extrabold text-ink">{f.message} *</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  maxLength={500}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="resize-none rounded-xl border-2 border-ink/20 bg-cream/50 px-4 py-3 font-semibold text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:border-ink focus:bg-white"
                  placeholder={f.messagePlaceholder}
                />
              </label>
              {error && (
                <p role="alert" className="rounded-xl border-2 border-coral bg-[#FFEDEB] px-4 py-2.5 text-sm font-bold text-coral-deep">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className={cx(
                  "mt-1 inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-coral px-7 py-3.5 font-display text-base font-extrabold text-white shadow-pop transition-all hover:-translate-y-0.5 hover:bg-coral-deep active:translate-y-0.5 active:shadow-none"
                )}
              >
                {f.submit}
                <svg viewBox="0 0 24 24" className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12h16m0 0-6-6m6 6-6 6" />
                </svg>
              </button>
              <p className="text-center text-xs font-bold text-ink-soft">{f.note}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
