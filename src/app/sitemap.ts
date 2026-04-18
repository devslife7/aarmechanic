import type { MetadataRoute } from "next";
import { SITE_URL, LOCALES } from "@/lib/site-config";
import { SERVICE_SLUGS } from "@/lib/content/services";
import { AREA_SLUGS } from "@/lib/content/areas";
import { BLOG_POSTS } from "@/lib/content/posts";

function localeAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const loc of LOCALES) {
    languages[loc === "en" ? "en-US" : "es-US"] = `${SITE_URL}/${loc}${path}`;
  }
  languages["x-default"] = `${SITE_URL}/en${path}`;
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of LOCALES) {
    entries.push({
      url: `${SITE_URL}/${lang}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: localeAlternates("") },
    });

    for (const slug of SERVICE_SLUGS) {
      entries.push({
        url: `${SITE_URL}/${lang}/services/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.85,
        alternates: { languages: localeAlternates(`/services/${slug}`) },
      });
    }

    for (const slug of AREA_SLUGS) {
      entries.push({
        url: `${SITE_URL}/${lang}/service-area/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: localeAlternates(`/service-area/${slug}`) },
      });
    }

    entries.push({
      url: `${SITE_URL}/${lang}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: localeAlternates("/faq") },
    });

    entries.push({
      url: `${SITE_URL}/${lang}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
      alternates: { languages: localeAlternates("/blog") },
    });

    for (const post of BLOG_POSTS) {
      entries.push({
        url: `${SITE_URL}/${lang}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: "yearly",
        priority: 0.5,
        alternates: { languages: localeAlternates(`/blog/${post.slug}`) },
      });
    }
  }

  return entries;
}
