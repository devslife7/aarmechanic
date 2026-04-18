import { NextRequest, NextResponse } from "next/server";
import { fetchLiveReviews } from "@/lib/reviews";
import { isLocale } from "@/lib/site-config";

export async function GET(request: NextRequest) {
  const langParam = request.nextUrl.searchParams.get("lang");
  const lang = isLocale(langParam ?? undefined) ? (langParam as "en" | "es") : "en";
  const data = await fetchLiveReviews(lang);
  if (!data) return NextResponse.json({ error: "Unavailable" }, { status: 503 });
  return NextResponse.json(data);
}
