import { NextRequest, NextResponse } from "next/server";

// Anywhere Auto Repair — resolved from https://g.page/r/CXJEWqpnesoZEBE/review
const PLACE_ID = "ChIJI0mzWuCzt4kRckRaqmd6yhk";

export async function GET(request: NextRequest) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing API key" }, { status: 500 });
  }

  const langParam = request.nextUrl.searchParams.get("lang");
  const lang = langParam === "es" ? "es" : "en";

  const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "id,displayName,rating,userRatingCount,reviews,googleMapsUri",
      "Accept-Language": lang,
    },
    next: { revalidate: 3600, tags: [`reviews-${lang}`] },
  });

  if (!res.ok) {
    const err = await res.text();
    return NextResponse.json({ error: err }, { status: res.status });
  }

  const place = await res.json();

  return NextResponse.json({
    placeId: place.id,
    name: place.displayName?.text,
    rating: place.rating,
    userRatingCount: place.userRatingCount,
    googleMapsUri: place.googleMapsUri,
    reviews: (place.reviews ?? []).map((r: any) => ({
      author: r.authorAttribution?.displayName ?? "Google User",
      avatar: r.authorAttribution?.photoUri ?? null,
      date: r.relativePublishTimeDescription ?? "",
      rating: r.rating ?? 5,
      quote: r.text?.text ?? r.originalText?.text ?? "",
    })),
  });
}
