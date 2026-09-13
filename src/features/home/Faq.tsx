"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { SectionHeading, SectionShell } from "./SectionHeading";
import { cx } from "@/lib/cx";

/** Accessible accordion (WAI-ARIA pattern) — CSS grid-row animation, no measurement. */
export function Faq({ dict }: { dict: Dictionary }) {
  const t = dict.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell id="faq" className="bg-white">
      <SectionHeading title={t.heading} highlight={t.headingHighlight} />
      <div className="mx-auto mt-12 max-w-3xl divide-y-2 divide-ink/10 rounded-[1.5rem] border-2 border-ink bg-cream/60 shadow-pop">
        {t.items.map((item, i) => {
          const open = openIndex === i;
          const panelId = `faq-panel-${i}`;
          const buttonId = `faq-button-${i}`;
          return (
            <div key={item.q} className={cx(i === 0 && "rounded-t-[calc(1.5rem-2px)]", i === t.items.length - 1 && "rounded-b-[calc(1.5rem-2px)]")}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start sm:px-7"
                >
                  <span className="font-display text-base font-extrabold text-ink sm:text-lg">{item.q}</span>
                  <span
                    aria-hidden="true"
                    className={cx(
                      "grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-ink font-display text-lg font-extrabold transition-all duration-300",
                      open ? "rotate-45 bg-coral text-white" : "bg-white text-ink"
                    )}
                  >
                    +
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={cx(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-6 font-semibold leading-relaxed text-ink-soft sm:px-7">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
