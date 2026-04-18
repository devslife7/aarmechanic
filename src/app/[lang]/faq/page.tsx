import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL, BUSINESS, isLocale, type Locale } from "@/lib/site-config";
import { getFaqEntries } from "@/lib/content/faq";
import { getDict } from "@/lib/i18n";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import {
  JsonLd,
  faqPageSchema,
  breadcrumbSchema,
  localBusinessSchema,
} from "@/lib/schema";
import Link from "next/link";

export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const title = lang === "es"
    ? "Preguntas Frecuentes — Anywhere Auto Repair | DC • MD • VA"
    : "FAQ — Mobile Mechanic in DC, MD & VA | Anywhere Auto Repair";
  const description = lang === "es"
    ? "Preguntas frecuentes sobre el mecánico móvil de Anywhere Auto Repair — precios, áreas de servicio, garantía, formas de pago y más."
    : "Common questions about Anywhere Auto Repair's mobile mechanic service — pricing, service area, warranty, payment methods, scheduling, and more.";
  const url = `${SITE_URL}/${lang}/faq`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${SITE_URL}/en/faq`,
        "es-US": `${SITE_URL}/es/faq`,
        "x-default": `${SITE_URL}/en/faq`,
      },
    },
    openGraph: { title, description, url, type: "article" },
  };
}

export default async function FaqPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const entries = getFaqEntries(locale);
  const tx = getDict(locale);
  const url = `${SITE_URL}/${locale}/faq`;
  const home = `/${locale}`;

  const schemas = [
    localBusinessSchema(locale),
    faqPageSchema(entries),
    breadcrumbSchema([
      { name: BUSINESS.name, url: `${SITE_URL}/${locale}` },
      { name: tx.nav.faq, url },
    ]),
  ];

  return (
    <div className="bg-midnight text-white min-h-screen font-sans">
      <JsonLd data={schemas} />
      <SiteHeader lang={locale} />
      <main className="pt-[140px] pb-24 px-10 max-sm:px-5">
        <div className="max-w-[880px] mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6 text-[0.8rem] text-white/50">
            <Link href={home} className="hover:text-white no-underline">{BUSINESS.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{tx.nav.faq}</span>
          </nav>
          <header className="mb-12">
            <h1 className="font-serif text-[3rem] max-sm:text-[2.2rem] leading-[1.05] tracking-[-0.02em] mb-6">
              {locale === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
            </h1>
            <p className="text-[1.1rem] text-white/70 leading-[1.75] max-w-[720px] font-light">
              {locale === "es"
                ? "Todo lo que la gente pregunta antes de agendar un mecánico móvil en el área DMV."
                : "Everything people ask before booking a mobile mechanic in the DMV."}
            </p>
          </header>

          <ul className="space-y-4">
            {entries.map((f, i) => (
              <li key={i} className="bg-white/[0.03] border border-white/8 rounded-2xl p-7">
                <h2 className="font-semibold text-[1.05rem] text-white mb-3">{f.q}</h2>
                <p className="text-white/70 text-[0.95rem] leading-[1.75] font-light">{f.a}</p>
              </li>
            ))}
          </ul>

          <section className="mt-14 flex flex-wrap gap-4 items-center">
            <a href={`${home}#contact`} className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-[0.95rem] no-underline hover:bg-blue-400 transition-colors">
              {tx.nav.book}
            </a>
            <a href="https://wa.me/16104636087" className="inline-flex items-center gap-2 border border-white/15 text-white px-8 py-4 rounded-full font-medium text-[0.95rem] no-underline hover:bg-white/6 transition-colors">
              WhatsApp (610) 463-6087
            </a>
          </section>
        </div>
      </main>
      <SiteFooter lang={locale} />
    </div>
  );
}
