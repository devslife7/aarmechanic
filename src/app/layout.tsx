import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AAR Mechanic",
  description: "Anywhere Auto Repair",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
