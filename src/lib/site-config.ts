export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://anywhereautorepair.net").replace(/\/$/, "");

export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "es";
}

export const BUSINESS = {
  name: "Anywhere Auto Repair",
  legalName: "Anywhere Auto Repair",
  tagline: "Mobile Mechanic — DC • MD • VA",
  description:
    "Professional mobile auto repair serving Washington DC, Maryland, and Virginia. Honest work, fair pricing, zero waiting rooms. Bilingual service (English / Español).",
  descriptionEs:
    "Mecánico móvil profesional que sirve a Washington DC, Maryland y Virginia. Trabajo honesto, precios justos y cero salas de espera. Servicio bilingüe (English / Español).",
  owner: "Tyler",
  phone: "+1-610-463-6087",
  phoneDisplay: "(610) 463-6087",
  whatsapp: "https://wa.me/16104636087",
  email: "devslife7@gmail.com",
  address: {
    streetAddress: "",
    addressLocality: "Springfield",
    addressRegion: "VA",
    postalCode: "22150",
    addressCountry: "US",
  },
  // Springfield, VA (approximate base location — mobile service, no fixed shop)
  geo: {
    latitude: 38.7893,
    longitude: -77.1872,
  },
  serviceRadiusMiles: 50,
  priceRange: "$$",
  areasServed: [
    { name: "Washington, D.C.", type: "AdministrativeArea" },
    { name: "Virginia", type: "State" },
    { name: "Maryland", type: "State" },
  ],
  languages: ["English", "Spanish"],
  // Mobile service — general contact hours for scheduling
  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  social: {
    instagram: "https://www.instagram.com/anywhere_auto_repair",
    tiktok: "https://www.tiktok.com/@cheftylermellen",
    whatsapp: "https://wa.me/16104636087",
    linktree: "https://linktr.ee/anywhereautorepair",
    googleMaps: "https://g.page/r/CXJEWqpnesoZEBE",
  },
  googlePlaceId: "ChIJI0mzWuCzt4kRckRaqmd6yhk",
  googleReviewLink: "https://g.page/r/CXJEWqpnesoZEBE/review",
} as const;

export const LOCALE_META: Record<Locale, { htmlLang: string; ogLocale: string; hreflang: string }> = {
  en: { htmlLang: "en-US", ogLocale: "en_US", hreflang: "en-US" },
  es: { htmlLang: "es-US", ogLocale: "es_US", hreflang: "es-US" },
};
