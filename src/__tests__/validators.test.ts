import { describe, expect, it } from "vitest";
import { parseCustomOrder } from "@/lib/validators";

const valid = { name: "  Nour  ", phone: "+201001234567", message: "A pink puzzle with my daughter's name please" };

describe("parseCustomOrder", () => {
  it("sanitizes and accepts a valid order", () => {
    const res = parseCustomOrder(valid);
    expect(res.success).toBe(true);
    if (res.success) {
      expect(res.data.name).toBe("Nour");
      expect(res.data.message).toBe("A pink puzzle with my daughter's name please");
    }
  });

  it("rejects missing fields", () => {
    expect(parseCustomOrder({ ...valid, name: "" }).success).toBe(false);
    expect(parseCustomOrder({ ...valid, message: "short" }).success).toBe(false);
  });

  it("rejects bad phone numbers", () => {
    expect(parseCustomOrder({ ...valid, phone: "abc" }).success).toBe(false);
    expect(parseCustomOrder({ ...valid, phone: "0100" }).success).toBe(false);
  });

  it("strips XSS payloads before returning data", () => {
    const res = parseCustomOrder({
      ...valid,
      message: "<script>alert(1)</script> I want a green busy board ".repeat(20) + "with your name",
    });
    expect(res.success).toBe(true);
    if (res.success) {
      expect(res.data.message).not.toMatch(/<script>/);
      expect([...res.data.message].length).toBeLessThanOrEqual(500);
    }
  });

  it("caps very long messages", () => {
    const res = parseCustomOrder({ ...valid, message: "a".repeat(2000) });
    expect(res.success).toBe(true);
    if (res.success) expect([...res.data.message].length).toBeLessThanOrEqual(500);
  });
});
