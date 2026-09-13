import { describe, expect, it } from "vitest";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, otherLocale, locales } from "@/i18n/config";
import { en } from "@/i18n/dictionaries/en";
import { ar } from "@/i18n/dictionaries/ar";

describe("i18n config", () => {
  it("knows its locales", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("ar")).toBe(true);
    expect(isLocale("fr")).toBe(false);
    expect(otherLocale("en")).toBe("ar");
    expect(otherLocale("ar")).toBe("en");
    expect(locales).toEqual(["en", "ar"]);
  });

  it("falls back to English for unknown locales", () => {
    expect(getDictionary("fr" as never)).toBe(en);
  });
});

describe("dictionaries", () => {
  it("Arabic mirrors the full English shape (keys are complete)", () => {
    const flatten = (obj: Record<string, unknown>, prefix = ""): string[] =>
      Object.entries(obj).flatMap(([k, v]) =>
        v && typeof v === "object" && !Array.isArray(v)
          ? flatten(v as Record<string, unknown>, `${prefix}${k}.`)
          : [`${prefix}${k}`]
      );
    expect(flatten(ar as unknown as Record<string, unknown>).sort()).toEqual(
      flatten(en as unknown as Record<string, unknown>).sort()
    );
  });

  it("has no empty strings in either language", () => {
    const walk = (obj: Record<string, unknown>) => {
      for (const v of Object.values(obj)) {
        if (typeof v === "string") expect(v.trim().length).toBeGreaterThan(0);
        else if (v && typeof v === "object") walk(v as Record<string, unknown>);
      }
    };
    walk(en as unknown as Record<string, unknown>);
    walk(ar as unknown as Record<string, unknown>);
  });
});
