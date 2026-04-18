import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL, BUSINESS, LOCALES, isLocale, type Locale } from "@/lib/site-config";
import { BLOG_POSTS, getPost } from "@/lib/content/posts";
import { getDict } from "@/lib/i18n";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/schema";

export const revalidate = 3600;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => BLOG_POSTS.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/${lang}/blog/${slug}`;
  return {
    title: post.title[lang],
    description: post.excerpt[lang],
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${SITE_URL}/en/blog/${slug}`,
        "es-US": `${SITE_URL}/es/blog/${slug}`,
        "x-default": `${SITE_URL}/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title[lang],
      description: post.excerpt[lang],
      url,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

function renderBody(body: string) {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let para: string[] = [];

  const flush = () => {
    if (para.length > 0) {
      elements.push(
        <p key={elements.length} className="text-white/75 text-[1rem] leading-[1.85] font-light mb-5">
          {para.join(" ").trim()}
        </p>
      );
      para = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flush();
      continue;
    }
    if (line.startsWith("## ")) {
      flush();
      elements.push(
        <h2 key={elements.length} className="font-serif text-[1.8rem] text-white mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else {
      para.push(line);
    }
  }
  flush();
  return elements;
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const post = getPost(slug);
  if (!post) notFound();
  const locale: Locale = lang;
  const tx = getDict(locale);
  const url = `${SITE_URL}/${locale}/blog/${slug}`;
  const home = `/${locale}`;

  const schemas = [
    articleSchema({
      headline: post.title[locale],
      description: post.excerpt[locale],
      url,
      datePublished: post.publishedAt,
      lang: locale,
      image: post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/og-image.png`,
    }),
    breadcrumbSchema([
      { name: BUSINESS.name, url: `${SITE_URL}/${locale}` },
      { name: tx.nav.blog, url: `${SITE_URL}/${locale}/blog` },
      { name: post.title[locale], url },
    ]),
  ];

  return (
    <div className="bg-midnight text-white min-h-screen font-sans">
      <JsonLd data={schemas} />
      <SiteHeader lang={locale} />
      <main className="pt-[140px] pb-24 px-10 max-sm:px-5">
        <article className="max-w-[760px] mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6 text-[0.8rem] text-white/50">
            <Link href={home} className="hover:text-white no-underline">{BUSINESS.name}</Link>
            <span className="mx-2">/</span>
            <Link href={`${home}/blog`} className="hover:text-white no-underline">{tx.nav.blog}</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{post.title[locale]}</span>
          </nav>
          <header className="mb-10">
            <time className="text-[0.75rem] uppercase tracking-[0.12em] text-blue-400 font-semibold">
              {new Date(post.publishedAt).toLocaleDateString(locale === "es" ? "es-US" : "en-US", {
                year: "numeric", month: "long", day: "numeric",
              })}
            </time>
            <h1 className="font-serif text-[2.6rem] max-sm:text-[2rem] leading-[1.1] tracking-[-0.02em] mt-3 mb-4">
              {post.title[locale]}
            </h1>
            <p className="text-[1.05rem] text-white/65 leading-[1.75] font-light">{post.excerpt[locale]}</p>
          </header>
          <div>{renderBody(post.body[locale])}</div>

          <section className="mt-14 pt-10 border-t border-white/8 flex flex-wrap gap-4 items-center">
            <a href={`${home}#contact`} className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-[0.95rem] no-underline hover:bg-blue-400 transition-colors">
              {tx.nav.book}
            </a>
            <a href="https://wa.me/16104636087" className="inline-flex items-center gap-2 border border-white/15 text-white px-8 py-4 rounded-full font-medium text-[0.95rem] no-underline hover:bg-white/6 transition-colors">
              WhatsApp (610) 463-6087
            </a>
          </section>
        </article>
      </main>
      <SiteFooter lang={locale} />
    </div>
  );
}
