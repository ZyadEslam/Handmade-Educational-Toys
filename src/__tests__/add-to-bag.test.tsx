import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddToBagButton } from "@/features/products/AddToBagButton";
import { CartProvider } from "@/features/cart/cart-context";
import { en } from "@/i18n/dictionaries/en";
import { products } from "@/data/products";

describe("<AddToBagButton />", () => {
  it("confirms with a success state after adding", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <AddToBagButton productId={products[0].id} dict={en} />
      </CartProvider>
    );
    await user.click(screen.getByRole("button", { name: en.products.addToBag }));
    expect(await screen.findByText(new RegExp(en.products.added))).toBeInTheDocument();
  });
});
