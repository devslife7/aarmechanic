import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL, BUSINESS, isLocale, type Locale } from "@/lib/site-config";
import { BLOG_POSTS } from "@/lib/content/posts";
import { getDict } from "@/lib/i18n";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const title = lang === "es"
    ? "Blog — Consejos de Mecánico Móvil | Anywhere Auto Repair"
    : "Blog — Mobile Mechanic Tips | Anywhere Auto Repair";
  const description = lang === "es"
    ? "Consejos, explicaciones y guías sobre reparación móvil de autos en el área DMV."
    : "Tips, explainers, and guides about mobile auto repair across the DMV.";
  const url = `${SITE_URL}/${lang}/blog`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${SITE_URL}/en/blog`,
        "es-US": `${SITE_URL}/es/blog`,
        "x-default": `${SITE_URL}/en/blog`,
      },
    },
    openGraph: { title, description, url, type: "website" },
  };
}

export default async function BlogIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const tx = getDict(locale);
  const home = `/${locale}`;
  const schemas = [
    breadcrumbSchema([
      { name: BUSINESS.name, url: `${SITE_URL}/${locale}` },
      { name: tx.nav.blog, url: `${SITE_URL}/${locale}/blog` },
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
            <span className="text-white/80">{tx.nav.blog}</span>
          </nav>
          <header className="mb-12">
            <h1 className="font-serif text-[3rem] max-sm:text-[2.2rem] leading-[1.05] tracking-[-0.02em] mb-6">
              {locale === "es" ? "Blog" : "Blog"}
            </h1>
            <p className="text-[1.1rem] text-white/70 leading-[1.75] max-w-[720px] font-light">
              {locale === "es"
                ? "Consejos directos sobre cómo funciona la reparación móvil en el DMV."
                : "Straight talk about how mobile auto repair works in the DMV."}
            </p>
          </header>

          <ul className="space-y-5">
            {BLOG_POSTS.map((p) => (
              <li key={p.slug}>
                <Link href={`${home}/blog/${p.slug}`} className="block p-7 bg-white/[0.03] hover:bg-white/[0.07] border border-white/8 rounded-2xl no-underline transition-colors">
                  <time className="text-[0.75rem] uppercase tracking-[0.12em] text-blue-400 font-semibold">
                    {new Date(p.publishedAt).toLocaleDateString(locale === "es" ? "es-US" : "en-US", {
                      year: "numeric", month: "long", day: "numeric",
                    })}
                  </time>
                  <h2 className="font-serif text-[1.6rem] text-white mt-2 mb-3">{p.title[locale]}</h2>
                  <p className="text-white/60 text-[0.95rem] leading-[1.7] font-light">{p.excerpt[locale]}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter lang={locale} />
    </div>
  );
}
