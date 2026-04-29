import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const BASE_URL = "https://hornschuh.eu";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Hornschuh Metallbau GmbH – Stahl. Bau. Kompetenz.",
    template: "%s | Hornschuh Metallbau GmbH",
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
  authors: [{ name: "Hornschuh Metallbau GmbH" }],
  creator: "Hornschuh Metallbau GmbH",
  publisher: "Hornschuh Metallbau GmbH",
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
    siteName: "Hornschuh Metallbau GmbH",
    title: "Hornschuh Metallbau GmbH – Stahl. Bau. Kompetenz.",
    description:
      "Seit 1991 Ihr Partner für Stahlbau in Thüringen. Industriehallen, Sonderkonstruktionen, Fassaden, Treppen und Geländer – schlüsselfertig aus einer Hand.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hornschuh Metallbau GmbH",
      },
    ],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Hornschuh Metallbau GmbH",
      alternateName: ["Hornschuh Metalltechnik GmbH", "Hornschuh GmbH & Co. KG"],
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
        streetAddress: "Gewerbestraße 3",
        addressLocality: "Günthersleben-Wechmar",
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
        streetAddress: "Gewerbestraße 3",
        addressLocality: "Günthersleben-Wechmar",
        postalCode: "99869",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.9283,
        longitude: 10.8712,
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
    <html lang="de" className="h-full">
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
