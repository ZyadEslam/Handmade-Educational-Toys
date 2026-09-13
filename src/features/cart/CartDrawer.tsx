"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { useCart, useCartDetails } from "./cart-context";
import { images } from "@/lib/images.generated";
import { whatsappLink } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GiftIcon } from "@/components/ui/icons";
import { cx } from "@/lib/cx";

/**
 * Slide-over bag. Orders are completed over WhatsApp — no online payment,
 * which keeps the flow friendly and personal (and zero back-end).
 */
export function CartDrawer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { isOpen, closeCart, remove, setQty, total, count } = useCart();
  const details = useCartDetails();
  const t = dict.cart;
  const isAr = locale === "ar";
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  const message = details
    .map(({ line, product }) => `• ${product.name[locale]} × ${line.qty} — ${product.price * line.qty} ${t.unit}`)
    .concat(`(${t.total}: ${total} ${t.unit})`)
    .join("\n");

  const href = whatsappLink(`${isAr ? "مرحبًا! أريد طلب:" : "Hi! I'd like to order:"}\n${message}`);

  return (
    <div
      className={cx("fixed inset-0 z-[60]", !isOpen && "pointer-events-none")}
      aria-hidden={!isOpen}
    >
      {/* overlay */}
      <div
        className={cx(
          "absolute inset-0 bg-ink/40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={closeCart}
      />
      {/* panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={t.title}
        className={cx(
          "absolute inset-y-0 end-0 flex w-full max-w-md flex-col border-s-2 border-ink bg-white transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full rtl:-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b-2 border-ink/10 px-5 py-4">
          <h2 className="font-display text-xl font-extrabold text-ink">
            {t.title} <span className="text-coral">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="grid h-9 w-9 place-items-center rounded-xl border-2 border-ink bg-white transition-colors hover:bg-cream"
            aria-label={t.close}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {details.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <div className="bg-dots mx-auto grid h-24 w-24 place-items-center rounded-3xl border-2 border-ink bg-cream">
                  <GiftIcon className="h-12 w-12 text-coral" strokeWidth={2.2} />
                </div>
                <p className="mt-4 font-display font-bold text-ink-soft">{t.empty}</p>
                <Button href="#toys" className="mt-4" onClick={closeCart} variant="primary">
                  {t.emptyCta}
                </Button>
              </div>
            </div>
          ) : (
            <ul className="space-y-4">
              {details.map(({ line, product }) => {
                const img = images[product.image];
                return (
                  <li key={product.id} className="flex gap-3 rounded-2xl border-2 border-ink/10 bg-cream/60 p-3">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 border-ink bg-white">
                      <Image
                        src={img.src}
                        alt={product.name[locale]}
                        fill
                        sizes="80px"
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={img.blur}
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <p className="truncate font-display text-sm font-extrabold text-ink">{product.name[locale]}</p>
                      <p className="text-xs font-bold text-ink-soft">
                        {product.price} {t.unit}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-full border-2 border-ink bg-white px-1.5 py-0.5">
                          <button
                            type="button"
                            className="grid h-6 w-6 place-items-center rounded-full font-extrabold text-ink hover:bg-sun"
                            onClick={() => setQty(product.id, line.qty - 1)}
                            aria-label="−"
                          >
                            −
                          </button>
                          <span className="w-5 text-center text-sm font-extrabold">{line.qty}</span>
                          <button
                            type="button"
                            className="grid h-6 w-6 place-items-center rounded-full font-extrabold text-ink hover:bg-sun"
                            onClick={() => setQty(product.id, line.qty + 1)}
                            aria-label="+"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(product.id)}
                          className="text-xs font-bold text-ink-soft underline-offset-2 hover:text-coral hover:underline"
                        >
                          {t.remove}
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {details.length > 0 && (
          <div className="border-t-2 border-ink/10 px-5 py-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-display font-extrabold text-ink">{t.total}</span>
              <span className="font-display text-xl font-extrabold text-coral" dir="ltr">
                {total.toLocaleString(locale === "ar" ? "ar-EG" : "en-US")} {t.unit}
              </span>
            </div>
            <Button href={href} target="_blank" rel="noopener noreferrer" className="w-full" size="lg" variant="primary">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.2 1.1-1.7 1.2-.5 0-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c0 .2.1.4 0 .6l-.4.6-.5.5c-.1.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.1.5.2.6.4 0 .1 0 .7-.2 1.5Z" />
              </svg>
              {t.checkout}
            </Button>
            <p className="mt-2.5 text-center text-xs font-bold text-ink-soft">{t.note}</p>
          </div>
        )}
      </div>
    </div>
  );
}
