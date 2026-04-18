# Anywhere Auto Repair — aarmechanic.net

Next.js 16 (App Router) marketing site for a mobile mechanic serving DC • MD • VA. Bilingual EN/ES.

## Local dev

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev
```

Visit <http://localhost:3000> — redirects to `/en`.

## Project layout

```
src/
  app/
    layout.tsx                   # root: fonts, <html lang> (from middleware header)
    page.tsx                     # / → redirects to /en
    robots.ts                    # /robots.txt
    sitemap.ts                   # /sitemap.xml (includes hreflang alternates)
    [lang]/
      layout.tsx                 # per-locale metadata (canonical + hreflang + OG)
      page.tsx                   # homepage (SSR reviews + JSON-LD)
      services/[slug]/page.tsx
      service-area/[slug]/page.tsx
      faq/page.tsx
      blog/page.tsx
      blog/[slug]/page.tsx
    api/
      contact/route.ts
      reviews/route.ts           # also used server-side via src/lib/reviews.ts
  components/
    home-page.tsx                # main homepage client component
    site-chrome.tsx              # header/footer for sub-pages
    chat-widget/
  lib/
    site-config.ts               # SITE_URL, BUSINESS, locales — single source of truth
    schema.tsx                   # JSON-LD helpers (LocalBusiness, Service, FAQ, Article…)
    reviews.ts                   # server-side Google Places fetcher (SSR on homepage)
    i18n/{en,es,index}.ts
    content/services.ts          # 6 services × EN/ES
    content/areas.ts             # 8 DMV areas × EN/ES
    content/faq.ts
    content/posts/index.ts
  middleware.ts                  # /→/<locale> redirect + sets x-locale header
```

## SEO — what's implemented

- Per-locale `<html lang>`, titles, descriptions, OG, Twitter cards
- `alternates.canonical` + `hreflang` on every page (en-US, es-US, x-default)
- `robots.ts` + `sitemap.ts` (routes × locales, all with hreflang alternate links)
- Structured data (JSON-LD) on every page:
  - Homepage: `LocalBusiness`/`AutoRepair`, `Review`s, `AggregateRating`, `BreadcrumbList`
  - Service pages: `Service` + `LocalBusiness` + `BreadcrumbList`
  - Service-area pages: `LocalBusiness` (scoped by `areaServed`) + `BreadcrumbList`
  - FAQ: `FAQPage` + `BreadcrumbList`
  - Blog posts: `Article` + `BreadcrumbList`
- Google reviews rendered server-side (crawlable HTML, not client-hydrated)
- ISR revalidate (1hr–24hr) on all content pages
- Internal linking: homepage → services/areas/FAQ/blog; services ↔ areas via cross-links

## Post-deploy checklist

1. Set `NEXT_PUBLIC_SITE_URL` in the production environment (e.g. `https://anywhereautorepair.net`).
2. Claim the site at <https://search.google.com/search-console>, copy the HTML-tag verification code (just the `content` value), set `NEXT_PUBLIC_GSC_VERIFICATION`, redeploy, then verify.
3. Submit `https://anywhereautorepair.net/sitemap.xml` in Search Console.
4. Verify the Google Business Profile for Place ID `ChIJI0mzWuCzt4kRckRaqmd6yhk`. Keep NAP (name/address/phone) consistent with `src/lib/site-config.ts`.
5. (Optional) Bing Webmaster Tools: submit sitemap.
6. Image optimization: `public/og-image.png` (1.0 MB) and `public/tyler.png` (1.1 MB) should be compressed to under ~300 KB each for better LCP.

## Verifying SEO

Locally:

```bash
npm run build && npm start
curl -s http://localhost:3000/robots.txt
curl -s http://localhost:3000/sitemap.xml
curl -s http://localhost:3000/en | grep -E '<title>|canonical|hreflang|application/ld\+json'
curl -s http://localhost:3000/es/services/brake-repair | grep -E '<title>|canonical'
```

Post-deploy:

- Google Rich Results Test: <https://search.google.com/test/rich-results>
- Lighthouse (mobile): target SEO ≥ 95
- hreflang checker: <https://hreflang.org>
