import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Faq } from "@/features/home/Faq";
import { en } from "@/i18n/dictionaries/en";

describe("<Faq />", () => {
  it("renders all questions and exposes the correct aria wiring", () => {
    render(<Faq dict={en} />);
    en.faq.items.forEach((item, i) => {
      const button = screen.getByRole("button", { name: item.q });
      expect(button).toHaveAttribute("aria-controls", `faq-panel-${i}`);
      expect(button).toHaveAttribute("aria-expanded", i === 0 ? "true" : "false");
    });
  });

  it("opens the clicked answer and closes the previous one", async () => {
    const user = userEvent.setup();
    render(<Faq dict={en} />);
    const first = screen.getByRole("button", { name: en.faq.items[0].q });
    const second = screen.getByRole("button", { name: en.faq.items[1].q });

    await user.click(second);
    expect(second).toHaveAttribute("aria-expanded", "true");
    expect(first).toHaveAttribute("aria-expanded", "false");

    await user.click(second);
    expect(second).toHaveAttribute("aria-expanded", "false");
  });
});
