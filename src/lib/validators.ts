import { z } from "zod";
import { sanitize, sanitizeWithLimit } from "./sanitize";

/** Custom-order / contact form — validated then sanitized. */
export const customOrderSchema = z.object({
  name: z
    .string()
    .transform((v) => sanitize(v))
    .pipe(z.string().min(2).max(60)),
  phone: z
    .string()
    .transform((v) => sanitize(v))
    .pipe(
      z
        .string()
        .regex(/^\+?[0-9\s\-()]{7,18}$/, "invalid-phone")
    ),
  message: z
    .string()
    .transform((v) => sanitizeWithLimit(v, 500))
    .pipe(z.string().min(10).max(500)),
});

export type CustomOrderInput = z.input<typeof customOrderSchema>;
export type CustomOrder = z.output<typeof customOrderSchema>;

export function parseCustomOrder(input: CustomOrderInput) {
  return customOrderSchema.safeParse(input);
}
