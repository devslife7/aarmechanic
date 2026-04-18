import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL, LOCALES, LOCALE_META, isLocale, BUSINESS } from "@/lib/site-config";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const title = lang === "es"
    ? "Anywhere Auto Repair — Mecánico Móvil | DC • MD • VA"
    : "Anywhere Auto Repair — Mobile Mechanic | DC • MD • VA";
  const description = lang === "es" ? BUSINESS.descriptionEs : BUSINESS.description;
  const url = `${SITE_URL}/${lang}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: "%s",
    },
    description,
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${SITE_URL}/en`,
        "es-US": `${SITE_URL}/es`,
        "x-default": `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.name,
      type: "website",
      locale: LOCALE_META[lang].ogLocale,
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => LOCALE_META[l].ogLocale),
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${BUSINESS.name} — ${BUSINESS.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <>{children}</>;
}
