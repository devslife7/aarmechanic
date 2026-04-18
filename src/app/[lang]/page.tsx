import { notFound } from "next/navigation";
import { HomePage } from "@/components/home-page";
import { SITE_URL, BUSINESS, isLocale, type Locale } from "@/lib/site-config";
import { fetchLiveReviews } from "@/lib/reviews";
import {
  JsonLd,
  localBusinessSchema,
  reviewListSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { getDict } from "@/lib/i18n";

export const revalidate = 3600;

export default async function LangHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;

  const reviews = await fetchLiveReviews(locale);
  const dict = getDict(locale);

  const displayedReviews = reviews?.reviews ?? dict.reviews.items.map((r) => ({
    author: r.author,
    avatar: r.avatar ?? null,
    date: r.date,
    rating: 5,
    quote: r.quote,
  }));

  const schemas = [
    localBusinessSchema(locale, {
      ratingValue: reviews?.rating,
      reviewCount: reviews?.userRatingCount,
    }),
    ...reviewListSchema(displayedReviews.map((r) => ({
      author: r.author,
      quote: r.quote,
      rating: r.rating ?? 5,
      date: r.date,
    }))),
    breadcrumbSchema([
      { name: BUSINESS.name, url: `${SITE_URL}/${locale}` },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <HomePage lang={locale} initialReviews={reviews} />
    </>
  );
}
