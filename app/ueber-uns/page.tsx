import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Über uns | Hornschuh Metallbau GmbH",
  description:
    "Hornschuh Metallbau GmbH – seit 1991 in Günthersleben-Wechmar, Thüringen. Erfahren Sie mehr über unsere Geschichte, Unternehmensstruktur und Werte.",
  alternates: { canonical: "https://hornschuh.eu/ueber-uns" },
};

const stats = [
  { value: "1991", label: "Gründungsjahr" },
  { value: "35+", label: "Fachkräfte" },
  { value: "5.000 m²", label: "Produktionsfläche" },
  { value: "3", label: "Unternehmenseinheiten" },
];

const tochter = [
  {
    name: "Hornschuh Metalltechnik GmbH",
    fokus: "Konstruktion, Entwicklung & Fertigung",
    beschreibung:
      "Das Herzstück des Unternehmens: Auf über 5.000 m² Produktionsfläche entstehen Stahlkonstruktionen höchster Präzision. Mit modernsten Maschinen und erfahrenem Fachpersonal fertigen wir von der Einzelanfertigung bis zur Kleinserie.",
    adresse: "Gewerbestraße 3, 99869 Günthersleben-Wechmar",
    tel: "+49 36256 86 00 90",
    email: "info@hornschuh.eu",
  },
  {
    name: "Hornschuh GmbH & Co. KG",
    fokus: "Vertrieb & Montageservice",
    beschreibung:
      "Unser Vertrieb- und Montagearm steht für professionelle Ausführung auf der Baustelle. Erfahrene Bauleiter koordinieren jeden Schritt — von der präzisen Anlieferung bis zur reibungslosen Montage.",
    adresse: "Seebergstraße 20, 99869 Drei Gleichen OT Günthersleben-Wechmar",
    tel: "+49 36256 86 38 28",
    email: "info@hornschuh.eu",
  },
  {
    name: "Hornschuh Bauelemente GmbH",
    fokus: "Handel",
    beschreibung:
      "Spezialisiert auf den Handel mit hochwertigen Bauelementen: Fenster, Türen, Tore, Fassadensysteme und Pfosten-Riegel-Konstruktionen — als perfekte Ergänzung zu unseren Stahlbauleistungen.",
    adresse: "Günthersleben-Wechmar",
    tel: "+49 36256 86 00 90",
    email: "info@hornschuh.eu",
  },
];

const meilensteine = [
  { year: "1991", event: "Gründung als Montagebetrieb kurz nach der Wende" },
  { year: "1995", event: "Aufbau der ersten eigenen Produktionsstätte" },
  { year: "2000", event: "Erweiterung auf über 3.000 m² Produktionsfläche" },
  { year: "2010", event: "Gründung der Hornschuh Bauelemente GmbH" },
  { year: "2015", event: "Modernisierung der Maschinenanlage" },
  { year: "2020", event: "Erweiterung auf über 5.000 m² Produktionsfläche" },
  { year: "2026", event: "Über 35 Fachkräfte, drei Unternehmenseinheiten" },
];

export default function UeberUnsPage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Über uns", href: "/ueber-uns" }]} />
      {/* PAGE HERO */}
      <section className="pt-32 pb-20" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#255aa0" }}
              >
                Unser Unternehmen
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                Seit 1991.
                <br />
                Stahl mit Tradition.
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#888888" }}
              >
                Was als kleiner Montagebetrieb kurz nach der Wende begann, ist
                heute ein leistungsstarkes mittelständisches Unternehmen mit
                drei spezialisierten Einheiten, über 35 Fachkräften und einer
                eigenen Produktionsstätte von mehr als 5.000 m².
              </p>
            </div>
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/hornschuh-werk.webp"
                alt="Hornschuh Werksgebäude"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: "#255aa0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-black text-white mb-1">
                    {stat.value}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GESCHICHTE / TIMELINE */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection>
              <SectionHeading
                eyebrow="Geschichte"
                title="Gewachsen aus Leidenschaft"
                subtitle="Die Hornschuh-Geschichte ist eine Geschichte von Beharrlichkeit, Qualität und kontinuierlichem Wachstum — gegründet in einer Zeit des Aufbruchs, geprägt von handwerklicher Exzellenz."
              />
              <div className="mt-10 relative">
                <div
                  className="absolute left-5 top-0 bottom-0 w-px"
                  style={{ backgroundColor: "#e5e5e5" }}
                />
                <div className="space-y-8">
                  {meilensteine.map((m) => (
                    <div key={m.year} className="flex gap-6 relative">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold z-10"
                        style={{
                          backgroundColor: "#255aa0",
                          color: "#ffffff",
                          border: "3px solid #f5f5f5",
                        }}
                      >
                        ✓
                      </div>
                      <div className="pb-2">
                        <p
                          className="text-sm font-black uppercase tracking-wide mb-1"
                          style={{ color: "#255aa0" }}
                        >
                          {m.year}
                        </p>
                        <p className="text-sm" style={{ color: "#444444" }}>
                          {m.event}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div
                className="relative rounded-lg overflow-hidden mb-6"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src="/hornschuh-werkstatt.jpg"
                  alt="Fertigung bei Hornschuh"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                }}
              >
                <p
                  className="text-sm font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "#255aa0" }}
                >
                  Unsere Werte
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#cccccc" }}>
                  „Qualität ist kein Zufall — sie ist das Ergebnis von Sorgfalt,
                  Erfahrung und dem Willen, es richtig zu machen. Das ist der
                  Anspruch, den wir an uns selbst stellen."
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* UNTERNEHMENSEINHEITEN */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Unternehmensstruktur"
              title="Drei Einheiten. Eine starke Gruppe."
              centered
            />
          </AnimatedSection>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {tochter.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.12}>
                <div
                  className="p-8 rounded-xl h-full flex flex-col"
                  style={{
                    border: "1px solid #e5e5e5",
                    backgroundColor: "#fafafa",
                  }}
                >
                  <div
                    className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 self-start"
                    style={{
                      backgroundColor: "rgba(37,90,160,0.1)",
                      color: "#255aa0",
                    }}
                  >
                    {t.fokus}
                  </div>
                  <h3
                    className="text-lg font-black mb-3 leading-snug"
                    style={{ color: "#1a1a1a" }}
                  >
                    {t.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1 mb-6"
                    style={{ color: "#666666" }}
                  >
                    {t.beschreibung}
                  </p>
                  <div
                    className="text-xs space-y-1 pt-4"
                    style={{
                      borderTop: "1px solid #e5e5e5",
                      color: "#888888",
                    }}
                  >
                    <p>{t.adresse}</p>
                    <a
                      href={`tel:${t.tel.replace(/\s/g, "")}`}
                      className="block hover:text-blue-600 transition-colors"
                      style={{ color: "#255aa0" }}
                    >
                      {t.tel}
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Lernen Sie uns persönlich kennen
            </h2>
            <p className="text-lg mb-8" style={{ color: "#888888" }}>
              Wir freuen uns auf Ihre Anfrage und beraten Sie gerne.
            </p>
            <Link
              href="/kontakt"
              className="inline-block px-10 py-4 text-base font-semibold text-white rounded"
              style={{ backgroundColor: "#255aa0" }}
            >
              Kontakt aufnehmen
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
