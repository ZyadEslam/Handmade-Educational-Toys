import type { Dictionary } from "@/i18n/dictionaries/en";

/** Seamless scrolling strip of brand promises — pure CSS animation (GPU friendly). */
export function Marquee({ dict }: { dict: Dictionary }) {
  const items = dict.marquee;
  const row = (ariaHidden: boolean) => (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-6 pe-6 whitespace-nowrap px-3 font-display text-sm font-extrabold uppercase tracking-wider"
        >
          <span>{item}</span>
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0 text-ink"
            aria-hidden="true"
          >
            <path
              d="M12 1.5c.9 5.4 2.6 7.6 10.5 10.5-7.9 2.9-9.6 5.1-10.5 10.5C11.1 17.1 9.4 14.9 1.5 12 9.4 9.1 11.1 6.9 12 1.5Z"
              fill="currentColor"
            />
          </svg>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-hidden="true"
      className="relative -rotate-1 scale-x-105 overflow-hidden border-y-[3px] border-ink bg-sun py-3 shadow-pop"
    >
      <div className="marquee-mask flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
