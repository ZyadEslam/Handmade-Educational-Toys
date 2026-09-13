import { describe, expect, it, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomCta } from "@/features/home/CustomCta";
import { en } from "@/i18n/dictionaries/en";

describe("<CustomCta />", () => {
  afterEach(() => vi.restoreAllMocks());

  it("shows an error when required fields are empty", async () => {
    const user = userEvent.setup();
    render(<CustomCta locale="en" dict={en} />);
    await user.click(screen.getByRole("button", { name: new RegExp(en.custom.form.submit) }));
    expect(await screen.findByRole("alert")).toHaveTextContent(en.custom.form.errorRequired);
  });

  it("submits a valid order to WhatsApp (sanitized text)", async () => {
    const open = vi.fn();
    vi.stubGlobal("open", open);
    const user = userEvent.setup();
    render(<CustomCta locale="en" dict={en} />);

    await user.type(screen.getByPlaceholderText("Ahmed"), "Nour");
    await user.type(screen.getByPlaceholderText("+20 1xx xxx xxxx"), "+201001234567");
    await user.type(
      screen.getByPlaceholderText(en.custom.form.messagePlaceholder),
      "A dinosaur busy board in green, please!"
    );
    await user.click(screen.getByRole("button", { name: new RegExp(en.custom.form.submit) }));

    expect(await screen.findByText(en.custom.form.success)).toBeInTheDocument();
    expect(open).toHaveBeenCalledOnce();
    const [url] = open.mock.calls[0];
    expect(String(url)).toContain("wa.me");
    expect(decodeURIComponent(String(url))).toContain("dinosaur");
    expect(decodeURIComponent(String(url))).toContain("Nour");
  });
});
