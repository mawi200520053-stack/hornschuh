import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ReferenzenGalerie, { ReferenzItem } from "@/components/ReferenzenGalerie";

export const metadata: Metadata = {
  title: "Referenzen | Hornschuh Metallbau GmbH",
  description:
    "Ausgewählte Referenzprojekte der Hornschuh Metallbau GmbH — Industriehallen, Produktionsgebäude, Sonderkonstruktionen und mehr.",
};

const projekte: ReferenzItem[] = [
  {
    id: "lagerhalle-straub",
    image: "https://hornschuh.eu/wp-content/uploads/2026/04/Straub-FAV.jpg",
    title: "Neubau Lagerhalle mit Verbinder und Carport",
    kategorie: "Lagerhalle",
    description:
      "Projektbeschreibung folgt in Kürze.",
  },
  {
    id: "produktionshalle-ohrdruf",
    image: "https://hornschuh.eu/wp-content/uploads/2026/04/Izoblok-FAV.jpg",
    title: "Neubau Produktionshalle in Ohrdruf",
    kategorie: "Produktionshalle",
    description:
      "Projektbeschreibung folgt in Kürze.",
  },
  {
    id: "logistik-erfurt",
    image: "https://hornschuh.eu/wp-content/uploads/2026/04/Erfit-FAV.jpg",
    title: "Neubau Logistik-Halle Erfurt (Deutsche Post)",
    kategorie: "Logistik",
    description:
      "Projektbeschreibung folgt in Kürze.",
  },
  {
    id: "carl-zeiss-jena",
    image: "https://hornschuh.eu/wp-content/uploads/2026/04/Carl-Zeiss-Jena-FAV.jpg",
    title: "Neubau Carl Zeiss Jena",
    kategorie: "Industriebau",
    description:
      "Projektbeschreibung folgt in Kürze.",
  },
  {
    id: "aussichtsturm-stoentzsch",
    image: "https://hornschuh.eu/wp-content/uploads/2026/04/Aussichtsturm_FAV.jpg",
    title: "Errichtung Aussichtsturm Stöntzsch",
    kategorie: "Sonderkonstruktion",
    description:
      "Projektbeschreibung folgt in Kürze.",
  },
  {
    id: "airleben-gotha",
    image: "https://hornschuh.eu/wp-content/uploads/2026/01/Airleben-fav.jpg",
    title: "Neubau Produktions- und Lagerhallen Airleben, Gotha",
    kategorie: "Produktionshalle",
    description:
      "Projektbeschreibung folgt in Kürze.",
  },
  {
    id: "firmensitz",
    image: "https://hornschuh.eu/wp-content/uploads/2022/03/Hornschuh-Werk.webp",
    title: "Firmensitz Günthersleben-Wechmar",
    kategorie: "Industriebau",
    description:
      "Projektbeschreibung folgt in Kürze.",
  },
  {
    id: "fertigung-werk",
    image: "https://hornschuh.eu/wp-content/uploads/2022/03/IMG-20211202-WA0006.jpg",
    title: "Fertigung im eigenen Werk",
    kategorie: "Fertigung",
    description:
      "Projektbeschreibung folgt in Kürze.",
  },
];

export default function ReferenzenPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="pt-32 pb-20" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#255aa0" }}
          >
            Unsere Projekte
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6 max-w-3xl">
            Referenzen, die für sich sprechen
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "#888888" }}
          >
            Über drei Jahrzehnte Stahlbau-Erfahrung. Jedes Projekt ein Beweis
            unserer Kompetenz — von der Lagerhalle bis zur Sonderkonstruktion.
          </p>
        </div>
      </section>

      {/* GALERIE */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReferenzenGalerie items={projekte} />
        </div>
      </section>

      {/* STATS */}
      <section className="py-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: "30+", label: "Jahre Erfahrung" },
                { value: "500+", label: "Projekte realisiert" },
                { value: "35+", label: "Fachkräfte" },
                { value: "5.000 m²", label: "Produktionsfläche" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-3xl sm:text-4xl font-black mb-1"
                    style={{ color: "#255aa0" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm" style={{ color: "#888888" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Ihr Projekt wird das nächste Referenz-Objekt
            </h2>
            <p className="text-lg mb-8" style={{ color: "#888888" }}>
              Nehmen Sie Kontakt auf — wir freuen uns auf Ihre Anfrage.
            </p>
            <Link
              href="/kontakt"
              className="inline-block px-10 py-4 text-base font-semibold text-white rounded"
              style={{ backgroundColor: "#255aa0" }}
            >
              Projekt anfragen
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
