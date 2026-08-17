import type { Metadata } from "next";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import { MEDIA_CONTENT, META_CONTENT } from "@/constants/content";
import { EVENT } from "@/constants/event";

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const greatVibes = Great_Vibes({ variable: "--font-script", weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(EVENT.siteUrl),
  title: META_CONTENT.title,
  description: META_CONTENT.description,
  openGraph: {
    title: META_CONTENT.title,
    description: META_CONTENT.description,
    url: EVENT.siteUrl,
    siteName: META_CONTENT.siteName,
    images: [MEDIA_CONTENT.images.hero.src],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META_CONTENT.title,
    description: META_CONTENT.twitterDescription,
    images: [MEDIA_CONTENT.images.hero.src],
  },
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
  icons: { icon: "/favicon.ico" },
};

export const viewport = { themeColor: "#0a1230" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${inter.variable} ${greatVibes.variable} antialiased bg-[var(--color-navy)] text-white`}>
        {children}
      </body>
    </html>
  );
}
