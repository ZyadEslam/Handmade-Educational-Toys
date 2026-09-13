"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { productById, type Product } from "@/data/products";

export type CartLine = { id: string; qty: number };

type Listener = () => void;

const STORAGE_KEY = "hm-toys:cart";
const EMPTY: CartLine[] = [];

/**
 * Tiny external store backed by localStorage.
 * Read through `useSyncExternalStore` (SSR-safe, hydration-safe, no
 * setState-in-effect, no render cascades) — customers keep their bag.
 */
class CartStore {
  private lines: CartLine[] = EMPTY;
  private listeners = new Set<Listener>();
  hydrated = false;

  subscribe = (listener: Listener): (() => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  getSnapshot = (): CartLine[] => this.lines;

  getServerSnapshot = (): CartLine[] => EMPTY;

  /** Read what was saved last visit (client only, once). */
  hydrate = (): void => {
    if (this.hydrated) return;
    this.hydrated = true;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as CartLine[];
      if (Array.isArray(parsed)) {
        this.lines = parsed.filter(
          (l) => typeof l.id === "string" && Number.isInteger(l.qty) && l.qty > 0 && Boolean(productById(l.id))
        );
        this.emit();
      }
    } catch {
      /* corrupted storage — start fresh */
    }
  };

  /** Write current state (never called before hydrate). */
  persist = (): void => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.lines));
    } catch {
      /* storage unavailable — cart still works in memory */
    }
  };

  add = (id: string): void => {
    const existing = this.lines.find((l) => l.id === id);
    this.lines = existing
      ? this.lines.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l))
      : [...this.lines, { id, qty: 1 }];
    this.emit();
  };

  remove = (id: string): void => {
    this.lines = this.lines.filter((l) => l.id !== id);
    this.emit();
  };

  setQty = (id: string, qty: number): void => {
    this.lines =
      qty <= 0
        ? this.lines.filter((l) => l.id !== id)
        : this.lines.map((l) => (l.id === id ? { ...l, qty } : l));
    this.emit();
  };

  private emit(): void {
    this.listeners.forEach((listener) => listener());
  }
}

type CartContextValue = {
  lines: CartLine[];
  count: number;
  total: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  add: (id: string) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [store] = useState(() => new CartStore());
  // Snapshot is the source of truth; server + first paint render empty.
  const lines = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    store.hydrate();
  }, [store]);

  useEffect(() => {
    if (store.hydrated) store.persist();
  }, [lines, store]);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((sum, l) => sum + l.qty, 0);
    const total = lines.reduce((sum, l) => {
      const p = productById(l.id);
      return sum + (p ? p.price * l.qty : 0);
    }, 0);
    return {
      lines,
      count,
      total,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      add: store.add,
      remove: store.remove,
      setQty: store.setQty,
    };
  }, [lines, isOpen, store]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

/** The complete bag, joined with product data (safe for display). */
export function useCartDetails() {
  const { lines } = useCart();
  return useMemo(
    () =>
      lines
        .map((l) => ({ line: l, product: productById(l.id) }))
        .filter((x): x is { line: CartLine; product: Product } => Boolean(x.product)),
    [lines]
  );
}
