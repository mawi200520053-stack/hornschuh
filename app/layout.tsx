import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const BASE_URL = "https://hornschuh.eu";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Hornschuh – Stahl. Bau. Kompetenz.",
    template: "%s | Hornschuh",
  },
  description:
    "Seit 1991 Ihr Partner für Stahlbau in Thüringen. Industriehallen, Sonderkonstruktionen, Fassaden, Treppen und Geländer – schlüsselfertig aus einer Hand.",
  keywords: [
    "Hornschuh Metallbau",
    "Hornschuh Metalltechnik",
    "Stahlbau Thüringen",
    "Industriehallen",
    "Metallbau Günthersleben",
    "Stahlbau Erfurt",
    "Sonderkonstruktionen Stahl",
    "Hallenbau Thüringen",
  ],
  authors: [{ name: "Hornschuh Metalltechnik GmbH" }],
  creator: "Hornschuh Metalltechnik GmbH",
  publisher: "Hornschuh Metalltechnik GmbH",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: "Hornschuh",
    title: "Hornschuh – Stahl. Bau. Kompetenz.",
    description:
      "Seit 1991 Ihr Partner für Stahlbau in Thüringen. Industriehallen, Sonderkonstruktionen, Fassaden, Treppen und Geländer – schlüsselfertig aus einer Hand.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Hornschuh – Stahl. Bau. Kompetenz.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hornschuh – Stahl. Bau. Kompetenz.",
    description:
      "Seit 1991 Ihr Partner für Stahlbau in Thüringen. Industriehallen, Sonderkonstruktionen, Fassaden, Treppen und Geländer – schlüsselfertig aus einer Hand.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Hornschuh Metalltechnik GmbH",
      alternateName: ["Hornschuh GmbH & Co. KG", "Hornschuh Bauelemente GmbH"],
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/hornschuh-logo.png`,
      },
      foundingDate: "1991",
      email: "info@hornschuh.eu",
      telephone: "+4936256860090",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gewerbestraße 3, OT Günthersleben-Wechmar",
        addressLocality: "Drei Gleichen",
        postalCode: "99869",
        addressCountry: "DE",
        addressRegion: "Thüringen",
      },
      areaServed: {
        "@type": "State",
        name: "Thüringen",
      },
      description:
        "Seit 1991 Ihr Partner für Stahlbau in Thüringen. Industriehallen, Sonderkonstruktionen, Fassaden, Treppen und Geländer – schlüsselfertig aus einer Hand.",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      name: "Hornschuh Metalltechnik GmbH",
      url: BASE_URL,
      telephone: "+4936256860090",
      email: "info@hornschuh.eu",
      image: `${BASE_URL}/hornschuh-logo.png`,
      priceRange: "€€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gewerbestraße 3, OT Günthersleben-Wechmar",
        addressLocality: "Drei Gleichen",
        postalCode: "99869",
        addressCountry: "DE",
        addressRegion: "Thüringen",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.8981,
        longitude: 10.7647,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "17:00",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`h-full ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
