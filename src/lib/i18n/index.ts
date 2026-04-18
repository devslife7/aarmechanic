import { en } from "./en";
import { es } from "./es";
import type { Locale } from "@/lib/site-config";

export type { Dict } from "./en";

const dicts = { en, es } as const;

export function getDict(lang: Locale) {
  return dicts[lang];
}
