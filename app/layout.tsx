import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Hornschuh Metallbau GmbH – Stahl. Bau. Kompetenz.",
  description:
    "Seit 1991 Ihr Partner für Stahlbau in Thüringen. Industriehallen, Sonderkonstruktionen, Fassaden, Treppen und Geländer – schlüsselfertig aus einer Hand.",
  keywords: "Stahlbau, Industriehallen, Metallbau, Thüringen, Hornschuh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
