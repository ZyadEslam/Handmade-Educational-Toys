"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { useCart } from "@/features/cart/cart-context";
import { cx } from "@/lib/cx";

/** Adds to the bag and pops a tiny, friendly confirmation. */
export function AddToBagButton({ productId, dict }: { productId: string; dict: Dictionary }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(productId);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      aria-live="polite"
      className={cx(
        "inline-flex items-center gap-1.5 rounded-xl border-2 border-ink px-3.5 py-2 font-display text-xs font-extrabold transition-all active:translate-y-0.5 active:shadow-none sm:text-sm",
        added
          ? "bg-teal text-white shadow-none"
          : "bg-ink text-white shadow-pop-sm hover:-translate-y-0.5 hover:bg-coral"
      )}
    >
      {added ? (
        <>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m4.5 12.5 5 5 10-11" />
          </svg>
          {dict.products.added} ✓
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 7h12l1.2 12.2a1.5 1.5 0 0 1-1.5 1.8H6.3a1.5 1.5 0 0 1-1.5-1.8L6 7Z" />
            <path d="M9 9V6a3 3 0 0 1 6 0v3" />
          </svg>
          {dict.products.addToBag}
        </>
      )}
    </button>
  );
}
