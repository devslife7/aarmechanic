import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL, BUSINESS, LOCALES, isLocale, type Locale } from "@/lib/site-config";
import { SERVICE_SLUGS, getServiceContent, isServiceSlug, getAllServices } from "@/lib/content/services";
import { AREA_SLUGS, getAreaContent } from "@/lib/content/areas";
import { getDict } from "@/lib/i18n";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import {
  JsonLd,
  serviceSchema,
  breadcrumbSchema,
  localBusinessSchema,
} from "@/lib/schema";

export const revalidate = 86400;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    SERVICE_SLUGS.map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isServiceSlug(slug)) return {};
  const service = getServiceContent(slug, lang);
  const url = `${SITE_URL}/${lang}/services/${slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${SITE_URL}/en/services/${slug}`,
        "es-US": `${SITE_URL}/es/services/${slug}`,
        "x-default": `${SITE_URL}/en/services/${slug}`,
      },
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      type: "article",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isServiceSlug(slug)) notFound();
  const locale: Locale = lang;
  const service = getServiceContent(slug, locale);
  const tx = getDict(locale);
  const url = `${SITE_URL}/${locale}/services/${slug}`;
  const home = `/${locale}`;

  const otherServices = getAllServices(locale).filter((s) => s.slug !== slug);

  const schemas = [
    localBusinessSchema(locale),
    serviceSchema({
      name: service.name,
      description: service.metaDescription,
      slug,
      lang: locale,
    }),
    breadcrumbSchema([
      { name: BUSINESS.name, url: `${SITE_URL}/${locale}` },
      { name: tx.nav.services, url: `${SITE_URL}/${locale}#services` },
      { name: service.name, url },
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
            <Link href={`${home}#services`} className="hover:text-white no-underline">{tx.nav.services}</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{service.name}</span>
          </nav>

          <header className="mb-12">
            <p className="text-[0.75rem] uppercase tracking-[0.14em] text-blue-400 mb-4 font-semibold">
              {tx.services.tag}
            </p>
            <h1 className="font-serif text-[3.2rem] max-sm:text-[2.2rem] leading-[1.05] tracking-[-0.02em] mb-6">
              {service.name} <em className="text-blue-400 not-italic">— DC • MD • VA</em>
            </h1>
            <p className="text-[1.15rem] text-white/70 leading-[1.75] max-w-[720px] font-light">
              {service.heroTagline}
            </p>
          </header>

          <section className="prose-invert mb-12">
            <p className="text-white/75 text-[1.02rem] leading-[1.85] font-light mb-8">{service.intro}</p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-[2rem] mb-6 text-white">
              {locale === "es" ? "Qué incluye el servicio" : "What's included"}
            </h2>
            <ul className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
              {service.whatsIncluded.map((item, i) => (
                <li key={i} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6">
                  <h3 className="font-semibold text-[1.02rem] mb-2 text-white">{item.title}</h3>
                  <p className="text-white/55 text-[0.92rem] leading-[1.7] font-light">{item.body}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-[2rem] mb-6 text-white">
              {locale === "es" ? "Problemas comunes que resolvemos" : "Common issues we solve"}
            </h2>
            <ul className="space-y-2">
              {service.commonIssues.map((issue, i) => (
                <li key={i} className="flex gap-3 text-white/70 text-[0.95rem] font-light">
                  <span className="text-blue-400 shrink-0">•</span>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12 bg-white/[0.03] border border-white/8 rounded-3xl p-8">
            <h2 className="font-serif text-[1.6rem] mb-3 text-white">
              {locale === "es" ? "¿Por qué móvil?" : "Why mobile?"}
            </h2>
            <p className="text-white/70 text-[0.98rem] leading-[1.75] font-light">{service.whyMobile}</p>
          </section>

          <section className="mb-16 flex flex-wrap gap-4 items-center">
            <a href={`${home}#contact`} className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-[0.95rem] no-underline hover:bg-blue-400 transition-colors">
              {service.cta}
            </a>
            <a href="tel:+16104636087" className="inline-flex items-center gap-2 border border-white/15 text-white px-8 py-4 rounded-full font-medium text-[0.95rem] no-underline hover:bg-white/6 transition-colors">
              (610) 463-6087
            </a>
            <a href="https://wa.me/16104636087" className="inline-flex items-center gap-2 border border-white/15 text-white px-8 py-4 rounded-full font-medium text-[0.95rem] no-underline hover:bg-white/6 transition-colors">
              WhatsApp
            </a>
          </section>

          <section className="mb-16 border-t border-white/8 pt-10">
            <h2 className="font-serif text-[1.6rem] mb-6 text-white">
              {locale === "es" ? "Áreas donde damos este servicio" : "Areas we serve for this"}
            </h2>
            <div className="flex flex-wrap gap-2">
              {AREA_SLUGS.map((areaSlug) => {
                const a = getAreaContent(areaSlug, locale);
                return (
                  <Link key={areaSlug} href={`${home}/service-area/${areaSlug}`} className="text-[0.82rem] text-white/70 hover:text-blue-400 border border-white/12 hover:border-blue-400/40 rounded-full px-4 py-2 no-underline transition-colors">
                    {a.name}
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="border-t border-white/8 pt-10">
            <h2 className="font-serif text-[1.6rem] mb-6 text-white">
              {locale === "es" ? "Otros servicios" : "Other services"}
            </h2>
            <ul className="grid grid-cols-2 max-md:grid-cols-1 gap-3">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`${home}/services/${s.slug}`} className="flex flex-col p-5 bg-white/[0.03] hover:bg-white/[0.07] border border-white/8 rounded-xl no-underline transition-colors">
                    <span className="font-semibold text-white">{s.name}</span>
                    <span className="text-white/50 text-[0.85rem] mt-1 font-light">{s.shortDesc}</span>
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
