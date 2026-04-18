import "server-only";
import type { Locale } from "@/lib/site-config";

const PLACE_ID = "ChIJI0mzWuCzt4kRckRaqmd6yhk";

export type LiveReview = {
  author: string;
  avatar: string | null;
  date: string;
  rating: number;
  quote: string;
};

export type LiveReviews = {
  rating: number;
  userRatingCount: number;
  reviews: LiveReview[];
};

export async function fetchLiveReviews(lang: Locale): Promise<LiveReviews | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "id,displayName,rating,userRatingCount,reviews,googleMapsUri",
        "Accept-Language": lang,
      },
      next: { revalidate: 3600, tags: [`reviews-${lang}`] },
    });
    if (!res.ok) return null;
    const place = await res.json();
    const reviews: LiveReview[] = (place.reviews ?? []).map((r: {
      authorAttribution?: { displayName?: string; photoUri?: string };
      relativePublishTimeDescription?: string;
      rating?: number;
      text?: { text?: string };
      originalText?: { text?: string };
    }) => ({
      author: r.authorAttribution?.displayName ?? "Google User",
      avatar: r.authorAttribution?.photoUri ?? null,
      date: r.relativePublishTimeDescription ?? "",
      rating: r.rating ?? 5,
      quote: r.text?.text ?? r.originalText?.text ?? "",
    }));
    if (reviews.length === 0) return null;
    return {
      rating: place.rating ?? 5,
      userRatingCount: place.userRatingCount ?? reviews.length,
      reviews,
    };
  } catch {
    return null;
  }
}
