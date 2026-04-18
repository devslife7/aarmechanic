import { BUSINESS, SITE_URL, type Locale } from "@/lib/site-config";

function businessUrl(lang: Locale) {
  return `${SITE_URL}/${lang}`;
}

export function localBusinessSchema(lang: Locale, opts?: { areaName?: string; ratingValue?: number; reviewCount?: number }) {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    description: lang === "es" ? BUSINESS.descriptionEs : BUSINESS.description,
    url: businessUrl(lang),
    telephone: BUSINESS.phone,
    image: `${SITE_URL}/og-image.png`,
    logo: `${SITE_URL}/logo.png`,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: opts?.areaName
      ? [{ "@type": "Place", name: opts.areaName }]
      : BUSINESS.areasServed.map((a) => ({
          "@type": a.type,
          name: a.name,
        })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.latitude,
        longitude: BUSINESS.geo.longitude,
      },
      geoRadius: `${BUSINESS.serviceRadiusMiles * 1609}`,
    },
    openingHoursSpecification: BUSINESS.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    availableLanguage: BUSINESS.languages,
    sameAs: [
      BUSINESS.social.instagram,
      BUSINESS.social.tiktok,
      BUSINESS.social.linktree,
      BUSINESS.social.googleMaps,
    ],
    ...(opts?.ratingValue && opts?.reviewCount
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: opts.ratingValue.toFixed(1),
            reviewCount: opts.reviewCount,
          },
        }
      : {}),
  };
}

export function reviewListSchema(reviews: { author: string; quote: string; rating: number; date: string }[]) {
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewBody: r.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
    },
    itemReviewed: { "@id": `${SITE_URL}/#business` },
  }));
}

export function serviceSchema(params: {
  name: string;
  description: string;
  slug: string;
  lang: Locale;
  areaName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    serviceType: params.name,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: params.areaName
      ? { "@type": "Place", name: params.areaName }
      : BUSINESS.areasServed.map((a) => ({ "@type": a.type, name: a.name })),
    url: `${SITE_URL}/${params.lang}/services/${params.slug}`,
    availableLanguage: BUSINESS.languages,
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(params: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  image?: string;
  lang: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": params.url },
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.datePublished,
    inLanguage: params.lang === "es" ? "es-US" : "en-US",
    author: { "@type": "Person", name: BUSINESS.owner },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    ...(params.image ? { image: params.image } : {}),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
