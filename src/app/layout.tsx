import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif, Outfit, Teko } from "next/font/google";
import "./globals.css";

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
  title: "Anywhere Auto Repair — Mobile Mechanic | DC • MD • VA",
  description: "Professional mobile mechanic serving Washington DC, Maryland, and Virginia. Honest work, fair pricing, zero waiting rooms.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon-32x32.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Anywhere Auto Repair — Mobile Mechanic | DC • MD • VA",
    description: "Professional mobile mechanic serving Washington DC, Maryland, and Virginia. Honest work, fair pricing, zero waiting rooms.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${outfit.variable} ${teko.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
