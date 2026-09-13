import type { Locale } from "@/i18n/config";
import { whatsappLink } from "@/lib/constants";

/** Floating WhatsApp button — the fastest way to ask a question. */
export function WhatsAppFab({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const label = isAr ? "تواصل معنا عبر واتساب" : "Chat with us on WhatsApp";
  return (
    <a
      href={whatsappLink(isAr ? "مرحبًا! لدي سؤال 😊" : "Hi! I have a question 😊")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group fixed bottom-5 end-5 z-40 grid h-14 w-14 place-items-center rounded-full border-2 border-ink bg-[#25D366] shadow-pop transition-all hover:-translate-y-1"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full border-2 border-ink opacity-30" aria-hidden="true" />
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.2 1.1-1.7 1.2-.5 0-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c0 .2.1.4 0 .6l-.4.6-.5.5c-.1.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.1.5.2.6.4 0 .1 0 .7-.2 1.5Z" />
      </svg>
    </a>
  );
}
