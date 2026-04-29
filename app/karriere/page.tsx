import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import KarriereStellenListe from "@/components/KarriereStellenListe";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import InitiativForm from "@/components/InitiativForm";
import type { Stelle } from "@/components/JobModal";
import { client } from "@/sanity/lib/client";
import { STELLEN_QUERY } from "@/sanity/lib/queries";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Karriere | Hornschuh Metallbau GmbH",
  description:
    "Jobs bei Hornschuh Metallbau GmbH in Thüringen – Stahlbauer, Monteure, Schweißer, kaufmännische Stellen. Jetzt bewerben oder Initiativbewerbung einreichen.",
  alternates: { canonical: "https://hornschuh.eu/karriere" },
};


const vorteile = [
  "Spannende Großprojekte",
  "Familiäres Team",
  "Entwicklungsmöglichkeiten",
  "Unbefristete Stellen",
  "Home-Office möglich",
  "Attraktive Vergütung",
];

export default async function KarrierePage() {
  const stellen: Stelle[] = await client.fetch(STELLEN_QUERY).catch(() => []);

  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Karriere", href: "/karriere" }]} />
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image
          src="/hornschuh-werk.webp"
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#255aa0" }}
          >
            Werde Teil des Teams
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Karriere bei Hornschuh
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl"
            style={{ color: "#cccccc" }}
          >
            Unsere Mitarbeiter sind der Schlüssel zum Erfolg –<br className="hidden sm:block" />
            werden Sie Teil unseres Teams!
          </p>
        </div>
      </section>

      {/* VORTEILE */}
      <section style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {vorteile.map((v, i) => (
              <AnimatedSection key={v} delay={i * 0.07}>
                <div
                  className="text-center py-3 px-2 rounded-lg"
                  style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p className="text-sm font-semibold" style={{ color: "#cccccc" }}>
                    {v}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* STELLENAUSSCHREIBUNGEN */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow={`${stellen.length} offene Stelle${stellen.length !== 1 ? "n" : ""}`}
              title="Aktuelle Stellenangebote"
              subtitle="Klicken Sie auf eine Stelle, um alle Details und das Bewerbungsformular zu sehen."
            />
          </AnimatedSection>
          <div className="mt-10">
            <AnimatedSection delay={0.1}>
              <KarriereStellenListe stellen={stellen} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* INITIATIVBEWERBUNG */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Initiativbewerbung"
              title="Keine passende Stelle dabei?"
              subtitle="Wir sind immer auf der Suche nach Talenten und motivierten Kolleginnen und Kollegen! Auszubildende, Monteure, Schweißer, Konstruktionsmechaniker, Büro- und Verwaltungsfachkräfte, kaufmännische Mitarbeiter – wir freuen uns auf Ihre Initiativbewerbung."
              light
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-10">
            <InitiativForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
