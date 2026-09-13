import { describe, expect, it } from "vitest";
import { cx } from "@/lib/cx";

describe("cx", () => {
  it("merges conditional classes", () => {
    expect(cx("a", false && "b", "c")).toBe("a c");
  });

  it("resolves tailwind conflicts (later wins)", () => {
    expect(cx("bg-white", "bg-coral")).toBe("bg-coral");
    expect(cx("p-4", "p-6")).toBe("p-6");
  });
});
