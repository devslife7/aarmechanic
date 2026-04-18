import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL, BUSINESS, LOCALES, isLocale, type Locale } from "@/lib/site-config";
import { AREA_SLUGS, getAreaContent, isAreaSlug, getAllAreas } from "@/lib/content/areas";
import { SERVICE_SLUGS, getServiceContent } from "@/lib/content/services";
import { getDict } from "@/lib/i18n";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import {
  JsonLd,
  localBusinessSchema,
  breadcrumbSchema,
} from "@/lib/schema";

export const revalidate = 86400;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    AREA_SLUGS.map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isAreaSlug(slug)) return {};
  const area = getAreaContent(slug, lang);
  const url = `${SITE_URL}/${lang}/service-area/${slug}`;
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${SITE_URL}/en/service-area/${slug}`,
        "es-US": `${SITE_URL}/es/service-area/${slug}`,
        "x-default": `${SITE_URL}/en/service-area/${slug}`,
      },
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url,
      type: "article",
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isAreaSlug(slug)) notFound();
  const locale: Locale = lang;
  const area = getAreaContent(slug, locale);
  const tx = getDict(locale);
  const url = `${SITE_URL}/${locale}/service-area/${slug}`;
  const home = `/${locale}`;

  const otherAreas = getAllAreas(locale).filter((a) => a.slug !== slug);

  const schemas = [
    localBusinessSchema(locale, { areaName: area.name }),
    breadcrumbSchema([
      { name: BUSINESS.name, url: `${SITE_URL}/${locale}` },
      { name: tx.nav.serviceArea, url: `${SITE_URL}/${locale}#area` },
      { name: area.name, url },
    ]),
  ];

  return (
    <div className="bg-midnight text-white min-h-screen font-sans">
      <JsonLd data={schemas} />
      <SiteHeader lang={locale} />

      <article className="pt-[140px] pb-24 px-10 max-sm:px-5">
        <div className="max-w-[880px] mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6 text-[0.8rem] text-white/50">
            <Link href={home} className="hover:text-white no-underline">{BUSINESS.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{tx.nav.serviceArea}</span>
            <span className="mx-2">/</span>
            <span className="text-white/80">{area.name}</span>
          </nav>

          <header className="mb-12">
            <p className="text-[0.75rem] uppercase tracking-[0.14em] text-blue-400 mb-4 font-semibold">
              {area.region} — {area.state}
            </p>
            <h1 className="font-serif text-[3rem] max-sm:text-[2.2rem] leading-[1.05] tracking-[-0.02em] mb-6">
              {locale === "es" ? "Mecánico Móvil en" : "Mobile Mechanic in"}{" "}
              <em className="text-blue-400 not-italic">{area.name}</em>
            </h1>
            <p className="text-[1.1rem] text-white/70 leading-[1.75] max-w-[720px] font-light">
              {area.intro}
            </p>
          </header>

          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] mb-5 text-white">
              {locale === "es" ? "Vecindarios y zonas que servimos" : "Neighborhoods and zones we serve"}
            </h2>
            <div className="flex flex-wrap gap-2">
              {area.neighborhoods.map((n, i) => (
                <span key={i} className="text-[0.85rem] text-white/80 bg-white/[0.04] border border-white/10 rounded-full px-4 py-2">
                  {n}
                </span>
              ))}
            </div>
            <p className="mt-6 text-white/55 text-[0.92rem] leading-[1.7] font-light">{area.travelNote}</p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] mb-5 text-white">
              {locale === "es" ? "Servicios disponibles" : "Services available"}
            </h2>
            <ul className="grid grid-cols-2 max-md:grid-cols-1 gap-3">
              {SERVICE_SLUGS.map((svcSlug) => {
                const s = getServiceContent(svcSlug, locale);
                return (
                  <li key={svcSlug}>
                    <Link href={`${home}/services/${svcSlug}`} className="flex flex-col p-5 bg-white/[0.03] hover:bg-white/[0.07] border border-white/8 rounded-xl no-underline transition-colors">
                      <span className="font-semibold text-white">{s.name}</span>
                      <span className="text-white/50 text-[0.85rem] mt-1 font-light">{s.shortDesc}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="mb-16 flex flex-wrap gap-4 items-center">
            <a href={`${home}#contact`} className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-[0.95rem] no-underline hover:bg-blue-400 transition-colors">
              {area.cta}
            </a>
            <a href="tel:+16104636087" className="inline-flex items-center gap-2 border border-white/15 text-white px-8 py-4 rounded-full font-medium text-[0.95rem] no-underline hover:bg-white/6 transition-colors">
              (610) 463-6087
            </a>
            <a href="https://wa.me/16104636087" className="inline-flex items-center gap-2 border border-white/15 text-white px-8 py-4 rounded-full font-medium text-[0.95rem] no-underline hover:bg-white/6 transition-colors">
              WhatsApp
            </a>
          </section>

          <section className="border-t border-white/8 pt-10">
            <h2 className="font-serif text-[1.6rem] mb-6 text-white">
              {locale === "es" ? "Otras áreas que servimos" : "Other areas we serve"}
            </h2>
            <ul className="grid grid-cols-2 max-md:grid-cols-1 gap-3">
              {otherAreas.map((a) => (
                <li key={a.slug}>
                  <Link href={`${home}/service-area/${a.slug}`} className="flex flex-col p-5 bg-white/[0.03] hover:bg-white/[0.07] border border-white/8 rounded-xl no-underline transition-colors">
                    <span className="font-semibold text-white">{a.name}</span>
                    <span className="text-white/50 text-[0.85rem] mt-1 font-light">{a.travelNote}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      <SiteFooter lang={locale} />
    </div>
  );
}
