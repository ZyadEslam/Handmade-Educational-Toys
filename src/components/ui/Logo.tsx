import type { Locale } from "@/i18n/config";
import { cx } from "@/lib/cx";

/**
 * The HM Toys brand mark — a smiling sun with rainbow rays.
 * Pure SVG, no gradients: crisp, hand-drawn, family friendly.
 */
export function SunMark({ className }: { className?: string }) {
  const rays: Array<{ color: string; angle: number; x: number; y: number; w: number; h: number; rx: number }> = [
    { color: "#FFC94D", angle: 0, x: -14, y: -4, w: 28, h: 8, rx: 4 },
    { color: "#2EC4B6", angle: 45, x: -14, y: -4, w: 28, h: 8, rx: 4 },
    { color: "#FF92B6", angle: 90, x: -14, y: -4, w: 28, h: 8, rx: 4 },
    { color: "#8B7CF6", angle: 135, x: -14, y: -4, w: 28, h: 8, rx: 4 },
    { color: "#FFC94D", angle: 180, x: -14, y: -4, w: 28, h: 8, rx: 4 },
    { color: "#2EC4B6", angle: 225, x: -14, y: -4, w: 28, h: 8, rx: 4 },
    { color: "#FF92B6", angle: 270, x: -14, y: -4, w: 28, h: 8, rx: 4 },
    { color: "#8B7CF6", angle: 315, x: -14, y: -4, w: 28, h: 8, rx: 4 },
  ];
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <g>
        {rays.map((r, i) => (
          <rect
            key={i}
            x={r.x}
            y={r.y}
            width={r.w}
            height={r.h}
            rx={r.rx}
            fill={r.color}
            stroke="#2B2440"
            strokeWidth="2.5"
            transform={`rotate(${r.angle})`}
          />
        ))}
      </g>
      {/* face */}
      <circle cx="32" cy="32" r="19" fill="#FF6B5C" stroke="#2B2440" strokeWidth="3" />
      <circle cx="25.5" cy="28.5" r="2.6" fill="#2B2440" />
      <circle cx="38.5" cy="28.5" r="2.6" fill="#2B2440" />
      <path
        d="M24.5 36.5c2.2 3.2 12.8 3.2 15 0"
        fill="none"
        stroke="#2B2440"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="20.5" cy="34" r="2.2" fill="#FFD9DF" />
      <circle cx="43.5" cy="34" r="2.2" fill="#FFD9DF" />
    </svg>
  );
}

/** Full logo lockup: mark + bilingual wordmark. */
export function Logo({
  locale,
  className,
  compact = false,
}: {
  locale: Locale;
  className?: string;
  compact?: boolean;
}) {
  const isAr = locale === "ar";
  return (
    <span className={cx("inline-flex items-center gap-2.5", className)}>
      <SunMark className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold tracking-tight text-ink sm:text-xl">
          {isAr ? "HM Toys" : "HM Toys"}
        </span>
        {!compact && (
          <span className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-ink-soft">
            {isAr ? "ألعاب تعليمية يدوية" : "Handmade · Educational · Toys"}
          </span>
        )}
      </span>
    </span>
  );
}
