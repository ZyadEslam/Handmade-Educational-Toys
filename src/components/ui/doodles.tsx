import { cx } from "@/lib/cx";

/** Little hand-drawn star. */
export function Sparkle({ className, color = "#FFC94D" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        d="M12 1.5c.9 5.4 2.6 7.6 10.5 10.5-7.9 2.9-9.6 5.1-10.5 10.5C11.1 17.1 9.4 14.9 1.5 12 9.4 9.1 11.1 6.9 12 1.5Z"
        fill={color}
        stroke="#2B2440"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Smiley face used as a decorative dot. */
export function Smiley({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="14" fill="#FFC94D" stroke="#2B2440" strokeWidth="2.5" />
      <circle cx="11.5" cy="13" r="1.8" fill="#2B2440" />
      <circle cx="20.5" cy="13" r="1.8" fill="#2B2440" />
      <path
        d="M10.5 18.5c1.6 2.4 9.4 2.4 11 0"
        fill="none"
        stroke="#2B2440"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Rotating circular sticker — “100% handmade” badge. */
export function HandmadeSticker({ className, label }: { className?: string; label: string }) {
  const text = `${label.toUpperCase()} • ${label.toUpperCase()} • `;
  return (
    <div className={cx("relative grid place-items-center", className)}>
      <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path
            id="sticker-circle"
            d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
            fill="none"
          />
        </defs>
        <circle cx="60" cy="60" r="58" fill="#FF6B5C" stroke="#2B2440" strokeWidth="3" />
        <text className="font-display" fontSize="13.5" fontWeight="700" fill="#FFF7EC" letterSpacing="2.5">
          <textPath href="#sticker-circle">{text}</textPath>
        </text>
      </svg>
      <span className="absolute h-[46%] w-[46%]">
        <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
          <circle cx="32" cy="32" r="19" fill="#FFF7EC" stroke="#2B2440" strokeWidth="3" />
          <circle cx="25.5" cy="28.5" r="2.4" fill="#2B2440" />
          <circle cx="38.5" cy="28.5" r="2.4" fill="#2B2440" />
          <path
            d="M24.5 36.5c2.2 3.2 12.8 3.2 15 0"
            fill="none"
            stroke="#2B2440"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </div>
  );
}

/** Organic wave divider between sections. */
export function Wave({ className, fill = "#FFF7EC" }: { className?: string; fill?: string }) {
  return (
    <svg
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      className={cx("block h-10 w-full sm:h-16", className)}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 70V38c120-22 260-34 420-24s290 40 460 36 320-32 560-24v44Z"
        fill={fill}
      />
    </svg>
  );
}
