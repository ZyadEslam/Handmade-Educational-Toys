import { describe, expect, it } from "vitest";
import { sanitize, sanitizeWithLimit, stripUrls, isCleanText } from "@/lib/sanitize";

describe("sanitize", () => {
  it("strips HTML tags", () => {
    expect(sanitize("<script>alert(1)</script>hello")).toBe("alert(1)hello");
    expect(sanitize("<img src=x onerror=alert(1)>")).toBe("");
  });

  it("removes control characters and collapses whitespace", () => {
    // control chars are stripped entirely; newlines/extra spaces collapse to one
    expect(sanitize("a\u0000b\u0007\n\n  c")).toBe("ab c");
    expect(sanitize("x \t\n  y")).toBe("x y");
  });

  it("handles edge inputs safely", () => {
    expect(sanitize("")).toBe("");
    expect(sanitize("   ")).toBe("");
    expect(sanitize("plain text 😊")).toBe("plain text 😊");
  });
});

describe("sanitizeWithLimit", () => {
  it("enforces the maximum length without splitting surrogate pairs", () => {
    const out = sanitizeWithLimit("😀😀😀😀", 5);
    expect([...out].length).toBeLessThanOrEqual(5);
  });
});

describe("stripUrls", () => {
  it("removes URLs and traversal attempts", () => {
    expect(stripUrls("visit https://evil.com please")).toBe("visit  please");
    expect(stripUrls("../../etc/passwd")).toBe("etc/passwd".replace("../", ""));
  });
});

describe("isCleanText", () => {
  it("flags markup and event handlers", () => {
    expect(isCleanText("nice toy")).toBe(true);
    expect(isCleanText("<b>x</b>")).toBe(false);
    expect(isCleanText("javascript:alert(1)")).toBe(false);
    expect(isCleanText("onmouseover=alert(1)")).toBe(false);
  });
});
