import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartProvider, useCart } from "@/features/cart/cart-context";
import { products } from "@/data/products";

function Probe() {
  const { count, total, add } = useCart();
  return (
    <div>
      <span data-testid="count">{count}</span>
      <span data-testid="total">{total}</span>
      <button onClick={() => add(products[0].id)}>add</button>
    </div>
  );
}

describe("cart store", () => {
  beforeEach(() => localStorage.clear());

  it("starts empty", () => {
    render(
      <CartProvider>
        <Probe />
      </CartProvider>
    );
    expect(screen.getByTestId("count").textContent).toBe("0");
  });

  it("adds and sums totals", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <Probe />
      </CartProvider>
    );
    await user.click(screen.getByText("add"));
    await user.click(screen.getByText("add"));
    await waitFor(() => expect(screen.getByTestId("count").textContent).toBe("2"));
    expect(screen.getByTestId("total").textContent).toBe(String(products[0].price * 2));
  });

  it("persists to localStorage after hydration", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <Probe />
      </CartProvider>
    );
    await user.click(screen.getByText("add"));
    await waitFor(() => {
      expect(localStorage.getItem("hm-toys:cart")).toContain(products[0].id);
    });
  });
});
