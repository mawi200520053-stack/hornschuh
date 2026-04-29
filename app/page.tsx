import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { projekte } from "@/lib/referenzen";

const units = [
  {
    name: "Hornschuh Metalltechnik GmbH",
    description:
      "Konstruktion, Entwicklung und Fertigung von Stahlbaukonstruktionen auf über 5.000 m² Produktionsfläche.",
    tag: "Fertigung",
  },
  {
    name: "Hornschuh GmbH & Co. KG",
    description:
      "Vertrieb und Montageservice – von der Lieferung bis zur schlüsselfertigen Errichtung Ihres Projekts.",
    tag: "Montage",
  },
  {
    name: "Hornschuh Bauelemente GmbH",
    description:
      "Handel mit hochwertigen Bauelementen: Fenster, Türen, Tore und Fassadensysteme.",
    tag: "Handel",
  },
];

const referenzen = projekte.slice(0, 6);

const stats = [
  { value: "35+", label: "Fachkräfte" },
  { value: "5.000 m²", label: "Produktionsfläche" },
  { value: "30+", label: "Jahre Erfahrung" },
  { value: "3", label: "Unternehmenseinheiten" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://hornschuh.eu/wp-content/uploads/2022/03/Hornschuh-Werk.webp"
          alt="Hornschuh Werksgebäude"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.52) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#255aa0" }}
          >
            Stahl. Bau. Kompetenz.
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight tracking-tight mb-6">
            Wir bringen
            <br />
            <span style={{ color: "#4a8fd4" }}>Stahl in Form.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Seit 1991 Ihr zuverlässiger Partner für Stahlbau in Thüringen —
            von der Planung bis zur schlüsselfertigen Übergabe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-block px-8 py-4 text-base font-semibold text-white rounded transition-colors duration-200"
              style={{ backgroundColor: "#255aa0" }}
            >
              Jetzt anfragen
            </Link>
            <Link
              href="/referenzen"
              className="inline-block px-8 py-4 text-base font-semibold rounded transition-colors duration-200"
              style={{
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.3)",
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
            >
              Referenzen ansehen
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div
            className="w-px h-12"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
            }}
          />
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p
                    className="text-3xl sm:text-4xl font-black mb-1"
                    style={{ color: "#255aa0" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium" style={{ color: "#888888" }}>
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* UNTERNEHMENSVORSTELLUNG */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <SectionHeading
                eyebrow="Über uns"
                title="Familienunternehmen mit Leidenschaft für Stahl"
                subtitle="Gegründet 1991 kurz nach der Wende als kleiner Montagebetrieb, ist Hornschuh heute ein leistungsstarkes Unternehmen mit über 35 Fachkräften und drei spezialisierten Unternehmenseinheiten."
              />
              <div className="mt-8">
                <Link
                  href="/ueber-uns"
                  className="inline-flex items-center text-sm font-semibold gap-2 transition-colors duration-200"
                  style={{ color: "#255aa0" }}
                >
                  Mehr über uns erfahren
                  <span>→</span>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div
                className="relative rounded-lg overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src="https://hornschuh.eu/wp-content/uploads/2022/03/Hornschuh-Werk.webp"
                  alt="Hornschuh Werk"
                  fill
                  className="object-cover"
                />
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
              eyebrow="Drei Einheiten. Eine Stärke."
              title="Unsere Unternehmensstruktur"
              centered
            />
          </AnimatedSection>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {units.map((unit, i) => (
              <AnimatedSection key={unit.name} delay={i * 0.12}>
                <div
                  className="group p-8 rounded-lg h-full transition-all duration-300"
                  style={{
                    border: "1px solid #e5e5e5",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  }}
                >
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                    style={{
                      backgroundColor: "rgba(37,90,160,0.1)",
                      color: "#255aa0",
                    }}
                  >
                    {unit.tag}
                  </span>
                  <h3
                    className="text-lg font-bold mb-3 leading-snug"
                    style={{ color: "#1a1a1a" }}
                  >
                    {unit.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#666666" }}
                  >
                    {unit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LEISTUNGEN TEASER */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Was wir tun"
              title="Unsere Leistungen"
              subtitle="Von der ersten Idee bis zur schlüsselfertigen Übergabe — wir decken alle Phasen Ihres Stahlbauprojekts ab."
              light
            />
          </AnimatedSection>
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Planung & Beratung",
                desc: "Konzeptentwicklung, Statik, Bauanträge, CAD-Zeichnungen und Bauleitung aus einer Hand.",
                num: "01",
              },
              {
                title: "Fertigung",
                desc: "5.000 m² Produktionsfläche mit modernsten Maschinen für Einzel- und Serienfertigung.",
                num: "02",
              },
              {
                title: "Montage",
                desc: "Termingerechte Lieferung, erfahrene Bauleiter vor Ort und höchste Sicherheitsstandards.",
                num: "03",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div
                  className="p-8 rounded-lg h-full"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                >
                  <span
                    className="text-xs font-black uppercase tracking-widest mb-4 block"
                    style={{ color: "#255aa0" }}
                  >{item.num}</span>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: "#ffffff" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#888888" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-10 text-center">
            <Link
              href="/leistungen"
              className="inline-block px-8 py-4 text-sm font-semibold text-white rounded transition-colors duration-200"
              style={{ backgroundColor: "#255aa0" }}
            >
              Alle Leistungen ansehen
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* REFERENZEN VORSCHAU */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <SectionHeading
                eyebrow="Unsere Projekte"
                title="Ausgewählte Referenzen"
              />
              <Link
                href="/referenzen"
                className="text-sm font-semibold whitespace-nowrap transition-colors duration-200"
                style={{ color: "#255aa0" }}
              >
                Alle Referenzen →
              </Link>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {referenzen.map((ref, i) => (
              <AnimatedSection key={ref.id} delay={i * 0.08}>
                <Link
                  href={`/referenzen/${ref.id}`}
                  className="group relative overflow-hidden rounded-lg block"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={ref.titelBild}
                    alt={ref.titel}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                    }}
                  >
                    <p className="text-white text-sm font-semibold leading-snug">
                      {ref.titel}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="text-lg mb-10" style={{ color: "#888888" }}>
              Sprechen Sie mit uns. Wir beraten Sie kostenfrei und entwickeln
              gemeinsam die beste Lösung für Ihr Vorhaben.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-block px-10 py-4 text-base font-semibold text-white rounded transition-colors duration-200"
                style={{ backgroundColor: "#255aa0" }}
              >
                Kontakt aufnehmen
              </Link>
              <a
                href="tel:+4936256860090"
                className="inline-block px-10 py-4 text-base font-semibold rounded transition-colors duration-200"
                style={{
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                +49 36256 86 00 90
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
