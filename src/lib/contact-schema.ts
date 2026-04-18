import { z } from "zod";

const phoneAllowedChars = /^[\d\s()+\-.]+$/;
const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "name_too_short" })
    .max(80, { message: "name_too_long" }),

  phone: z
    .string()
    .trim()
    .min(1, { message: "phone_required" })
    .refine((v) => phoneAllowedChars.test(v), { message: "phone_invalid_chars" })
    .refine(
      (v) => {
        const digits = v.replace(/\D/g, "");
        return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
      },
      { message: "phone_invalid_length" },
    ),

  vehicle: z
    .string()
    .trim()
    .min(2, { message: "vehicle_too_short" })
    .max(120, { message: "vehicle_too_long" }),

  vin: z
    .string()
    .trim()
    .transform((v) => v.toUpperCase())
    .refine((v) => v === "" || vinRegex.test(v), { message: "vin_invalid" })
    .optional()
    .or(z.literal("")),

  fuel: z.enum(["gas", "diesel"], { message: "fuel_invalid" }),

  issue: z
    .string()
    .trim()
    .min(5, { message: "issue_too_short" })
    .max(2000, { message: "issue_too_long" }),

  website: z
    .string()
    .optional()
    .refine((v) => !v || v.length === 0, { message: "honeypot" }),

  _t: z.number().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return raw;
}
