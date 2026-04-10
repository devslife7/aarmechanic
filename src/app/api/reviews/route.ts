import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing API key" }, { status: 500 });
  }

  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "places.id,places.displayName,places.rating,places.userRatingCount,places.reviews",
    },
    body: JSON.stringify({
      textQuery: "Anywhere Auto Repair",
      locationBias: {
        circle: {
          center: { latitude: 38.1319444, longitude: -79.3308385 },
          radius: 50000.0,
        },
      },
    }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    const err = await res.text();
    return NextResponse.json({ error: err }, { status: res.status });
  }

  const data = await res.json();
  const place = data.places?.[0];

  if (!place) {
    return NextResponse.json({ error: "Place not found" }, { status: 404 });
  }

  return NextResponse.json({
    rating: place.rating,
    userRatingCount: place.userRatingCount,
    reviews: (place.reviews ?? []).map((r: any) => ({
      author: r.authorAttribution?.displayName ?? "Google User",
      avatar: r.authorAttribution?.photoUri ?? null,
      date: r.relativePublishTimeDescription ?? "",
      rating: r.rating ?? 5,
      quote: r.text?.text ?? "",
    })),
  });
}
