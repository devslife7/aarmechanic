import type { FieldErrors } from "react-hook-form";

export type ContactLang = "en" | "es";
type ContactField = "name" | "phone" | "vehicle" | "vin" | "fuel" | "issue";

const messages: Record<ContactLang, Record<string, string>> = {
  en: {
    name_too_short: "Please enter your name (at least 2 characters).",
    name_too_long: "Name is too long.",
    phone_required: "Phone number is required.",
    phone_invalid_chars: "Phone can only contain digits, spaces, and ()+-.",
    phone_invalid_length: "Enter a valid 10-digit US phone number.",
    vehicle_too_short: "Tell us the make, model, and year.",
    vehicle_too_long: "Vehicle description is too long.",
    vin_invalid: "VIN must be 17 characters (no I, O, or Q).",
    fuel_invalid: "Select gas or diesel.",
    issue_too_short: "Please describe the issue (at least 5 characters).",
    issue_too_long: "Description is too long (max 2000 characters).",
    required: "This field is required.",
    generic: "Please check this field.",
  },
  es: {
    name_too_short: "Ingresa tu nombre (al menos 2 caracteres).",
    name_too_long: "El nombre es demasiado largo.",
    phone_required: "El número de teléfono es obligatorio.",
    phone_invalid_chars: "El teléfono solo puede tener dígitos, espacios y ()+-.",
    phone_invalid_length: "Ingresa un número de teléfono válido de 10 dígitos.",
    vehicle_too_short: "Indica la marca, modelo y año.",
    vehicle_too_long: "La descripción del vehículo es muy larga.",
    vin_invalid: "El VIN debe tener 17 caracteres (sin I, O o Q).",
    fuel_invalid: "Selecciona gasolina o diésel.",
    issue_too_short: "Describe el problema (al menos 5 caracteres).",
    issue_too_long: "La descripción es muy larga (máximo 2000 caracteres).",
    required: "Este campo es obligatorio.",
    generic: "Revisa este campo.",
  },
};

export function translateError(code: string | undefined, lang: ContactLang): string {
  if (!code) return messages[lang].generic;
  return messages[lang][code] ?? messages[lang].generic;
}

export function getFieldError(
  errors: FieldErrors,
  field: ContactField,
  lang: ContactLang,
): string | undefined {
  const err = errors[field];
  if (!err) return undefined;
  const code = typeof err.message === "string" ? err.message : undefined;
  if (err.type === "required" && !code) return messages[lang].required;
  return translateError(code, lang);
}
