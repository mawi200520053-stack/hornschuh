import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Leistungen | Hornschuh Metallbau GmbH",
  description:
    "Hornschuh Metallbau GmbH – Planung, Fertigung und Montage von Stahlkonstruktionen in Thüringen. Industriehallen, Fassaden, Treppen, Sonderlösungen aus einer Hand.",
  alternates: { canonical: "https://hornschuh.eu/leistungen" },
};

const leistungen = [
  {
    title: "Planung & Beratung",
    description:
      "Wir begleiten Ihr Projekt von der ersten Idee bis zur baureifen Planung. Unser erfahrenes Team entwickelt individuelle Konzepte, führt statische Berechnungen durch und koordiniert alle Bauphasen.",
    items: [
      "Konzeptentwicklung für individuelle Stahlbauprojekte",
      "Statische Berechnungen und Nachweise",
      "Bauantragsunterlagen und Genehmigungsplanung",
      "CAD-Werkszeichnungen und Detailpläne",
      "Bauleitung & Projektkoordinierung",
      "Beratung zu Materialwahl und Konstruktionsweise",
    ],
  },
  {
    title: "Fertigung",
    description:
      "In unserer modernen Produktionsstätte mit über 5.000 m² Fläche fertigen wir präzise nach Plan — von der Einzelanfertigung bis zur Kleinserie. Modernste Maschinen und erfahrene Fachkräfte garantieren höchste Qualität.",
    items: [
      "Plasma-Brennschneideanlage für präzise Zuschnitte",
      "Säge-Bohranlage für effiziente Bearbeitung",
      "Sandstrahlanlage für optimale Oberflächenvorbereitung",
      "Farbgebung und Konservierungsbeschichtung",
      "Abkantanlage für exakte Biegungen",
      "Moderne Schweißanlagen (MIG/MAG, WIG)",
      "Krananlagen bis 15 Tonnen Tragkraft",
      "Flurförderfahrzeuge für innerbetriebliche Logistik",
    ],
    process: [
      { step: "01", label: "Sandstrahlen" },
      { step: "02", label: "Zuschneiden" },
      { step: "03", label: "Heften" },
      { step: "04", label: "Schweißen" },
      { step: "05", label: "Konservierung" },
      { step: "06", label: "Farbgebung" },
    ],
  },
  {
    title: "Montage",
    description:
      "Unsere erfahrenen Montageteams bringen Ihre Konstruktion präzise und termingerecht auf die Baustelle. Von der Anlieferung bis zur Abnahme stehen wir für Qualität, Sicherheit und Zuverlässigkeit.",
    items: [
      "Präzise Kennzeichnung und termingerechte Lieferung",
      "Koordination durch erfahrene Bauleiter vor Ort",
      "Einhaltung aller Arbeitssicherheitsvorschriften",
      "Hohe Qualitätsstandards bei der Montage",
      "Enge Abstimmung mit Bauleitern und Planern",
      "Dokumentation und Abnahmeunterstützung",
    ],
  },
];

const spektrum = [
  "Industriebauten und Produktionshallen",
  "Lager- und Logistikhallen",
  "Autohäuser und Ausstellungsgebäude",
  "Sporthallen und Mehrzweckgebäude",
  "Treppen und Geländer",
  "Fassaden- und Dacharbeiten",
  "Fenster und Pfosten-Riegel-Konstruktionen",
  "Raffstoreanlagen",
  "Türen und Tore",
  "Sonderanfertigungen und architektonische Sonderlösungen",
  "Generalunternehmerleistungen (schlüsselfertig)",
];

export default function LeistungenPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        className="pt-32 pb-20"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#255aa0" }}
          >
            Was wir tun
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6 max-w-3xl"
          >
            Kompetenz auf allen Ebenen des Stahlbaus
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#888888" }}>
            Von der ersten Skizze bis zur schlüsselfertigen Übergabe — Hornschuh
            begleitet Sie durch alle Phasen Ihres Bauprojekts. Als Generalunternehmer
            übernehmen wir die vollständige Verantwortung.
          </p>
        </div>
      </section>

      {/* LEISTUNGSSPEKTRUM ÜBERSICHT */}
      <section className="py-20" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Leistungsspektrum"
              title="Was wir für Sie realisieren"
            />
          </AnimatedSection>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {spektrum.map((item, i) => (
              <AnimatedSection key={item} delay={i * 0.04}>
                <div
                  className="flex items-start gap-3 p-4 rounded-lg"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e5e5",
                  }}
                >
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: "#255aa0", color: "#ffffff" }}
                  >
                    ✓
                  </span>
                  <span className="text-sm font-medium" style={{ color: "#1a1a1a" }}>
                    {item}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DREI LEISTUNGSSÄULEN */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Drei Säulen"
              title="Unsere Kernkompetenzen"
              centered
            />
          </AnimatedSection>

          <div className="mt-16 space-y-16">
            {leistungen.map((leistung, i) => (
              <AnimatedSection key={leistung.title}>
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    border: "1px solid #e5e5e5",
                    backgroundColor: "#fafafa",
                  }}
                >
                  {/* Header */}
                  <div
                    className="p-8 lg:p-10"
                    style={{ backgroundColor: "#1a1a1a" }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-widest mb-1"
                          style={{ color: "#255aa0" }}
                        >
                          Säule {i + 1}
                        </p>
                        <h2
                          className="text-2xl sm:text-3xl font-black text-white"
                        >
                          {leistung.title}
                        </h2>
                      </div>
                    </div>
                    <p
                      className="text-base leading-relaxed max-w-3xl"
                      style={{ color: "#888888" }}
                    >
                      {leistung.description}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {leistung.items.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span
                            className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs"
                            style={{ backgroundColor: "rgba(37,90,160,0.1)", color: "#255aa0" }}
                          >
                            ✓
                          </span>
                          <span className="text-sm" style={{ color: "#444444" }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Fertigungsprozess */}
                    {leistung.process && (
                      <div className="mt-8">
                        <p
                          className="text-xs font-semibold uppercase tracking-widest mb-4"
                          style={{ color: "#888888" }}
                        >
                          Fertigungsprozess
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {leistung.process.map((p, idx) => (
                            <div key={p.step} className="flex items-center gap-2">
                              <div
                                className="flex items-center gap-2 px-4 py-2 rounded-full"
                                style={{
                                  backgroundColor: "#1a1a1a",
                                  color: "#ffffff",
                                }}
                              >
                                <span
                                  className="text-xs font-bold"
                                  style={{ color: "#255aa0" }}
                                >
                                  {p.step}
                                </span>
                                <span className="text-sm font-medium">{p.label}</span>
                              </div>
                              {idx < (leistung.process?.length ?? 0) - 1 && (
                                <span style={{ color: "#cccccc" }}>→</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Fertigung Image */}
                    {leistung.title === "Fertigung" && (
                      <div
                        className="mt-8 relative rounded-lg overflow-hidden"
                        style={{ aspectRatio: "21/9" }}
                      >
                        <Image
                          src="/hornschuh-werkstatt.jpg"
                          alt="Hornschuh Fertigung"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
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
              Ihr Projekt — unsere Kompetenz
            </h2>
            <p className="text-lg mb-8" style={{ color: "#888888" }}>
              Kontaktieren Sie uns für eine kostenfreie Erstberatung.
            </p>
            <Link
              href="/kontakt"
              className="inline-block px-10 py-4 text-base font-semibold text-white rounded"
              style={{ backgroundColor: "#255aa0" }}
            >
              Jetzt anfragen
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
