// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO, OpenGraph, robots, favicon
export const metadata: Metadata = {
  metadataBase: new URL("https://thetfordultimatewrestling.com"),
  title: {
    default: "Thetford Ultimate Wrestling",
    template: "%s | TUW",
  },
  description:
    "Joignez-vous à la TUW pour des spectacles de lutte professionnelle, des portraits de lutteurs, du divertissement et des événements à Thetford Mines. Billets disponibles au https://lepointdevente.com/tuw",
  keywords: [
    "Lutte",
    "TUW",
    "Thetford Mines",
    "Spectacles de lutte",
    "Événements",
    "Lutte Professionnelle",
    "Lutte Québec",
    "Lutte indépendante",
  ],
  alternates: {
    canonical: "https://thetfordultimatewrestling.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Thetford Ultimate Wrestling – Spectacles de lutte à Thetford Mines",
    description:
      "Joignez-vous à la TUW pour des spectacles de lutte professionnelle, des portraits de lutteurs, du divertissement et des événements à Thetford Mines. Billets : https://lepointdevente.com/tuw",
    url: "https://thetfordultimatewrestling.com",
    siteName: "Thetford Ultimate Wrestling",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TUW Spectacles de lutte",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Google site verification */}
        <meta
          name="google-site-verification"
          content="VwHdnzbH5X5WEIwLgq0ZaN1I5rn6Rvx-Em0ZYfWo23Y"
        />

        {/* Structured JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsOrganization",
              name: "Thetford Ultimate Wrestling",
              url: "https://thetfordultimatewrestling.com",
              logo: "https://thetfordultimatewrestling.com/logo.png",
              sameAs: [
                "https://www.facebook.com/thetfordultimatewrestling",
                "https://www.instagram.com/thetfordultimatewrestling",
              ],
              event: {
                "@type": "SportsEvent",
                name: "Spectacles de lutte professionnelle TUW",
                eventAttendanceMode:
                  "https://schema.org/OfflineEventAttendanceMode",
                eventStatus: "https://schema.org/EventScheduled",
                location: {
                  "@type": "Place",
                  name: "Différents lieux",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Thetford Mines",
                    addressRegion: "QC",
                    addressCountry: "Canada",
                  },
                },
                offers: {
                  "@type": "Offer",
                  url: "https://lepointdevente.com/tuw",
                  availability: "https://schema.org/InStock",
                  price: "Varies",
                  priceCurrency: "CAD",
                },
                startDate: "2026-01-01",
                endDate: "2026-12-31",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}