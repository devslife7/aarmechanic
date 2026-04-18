import type { Metadata } from "next";
import { headers } from "next/headers";
import { Space_Grotesk, Instrument_Serif, Outfit, Teko } from "next/font/google";
import "./globals.css";
import { SITE_URL, LOCALE_META, isLocale, DEFAULT_LOCALE } from "@/lib/site-config";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const teko = Teko({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-teko",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon-32x32.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hdrs = await headers();
  const locHdr = hdrs.get("x-locale");
  const locale = isLocale(locHdr) ? locHdr : DEFAULT_LOCALE;
  const htmlLang = LOCALE_META[locale].htmlLang;

  return (
    <html lang={htmlLang}>
      <body
        className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${outfit.variable} ${teko.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
