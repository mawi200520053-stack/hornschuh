import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { projekte } from "@/lib/referenzen";

export const metadata: Metadata = {
  title: "Referenzen | Hornschuh Metallbau GmbH",
  description:
    "Ausgewählte Referenzprojekte der Hornschuh Metallbau GmbH — Industriehallen, Produktionsgebäude, Sonderkonstruktionen und mehr.",
};

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projekte.map((projekt, i) => (
              <AnimatedSection key={projekt.id} delay={i * 0.07}>
                <Link
                  href={`/referenzen/${projekt.id}`}
                  className="group relative overflow-hidden rounded-xl block"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={projekt.images[0]}
                    alt={projekt.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Permanent gradient + content */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-5"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)",
                    }}
                  >
                    <span
                      className="inline-block self-start text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2"
                      style={{ backgroundColor: "rgba(37,90,160,0.85)", color: "#ffffff" }}
                    >
                      {projekt.kategorie}
                    </span>
                    <p className="text-white font-bold text-sm leading-snug mb-2">
                      {projekt.title}
                    </p>
                    <p
                      className="text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-250"
                      style={{ color: "#aaaaaa" }}
                    >
                      Projekt ansehen
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </p>
                  </div>
                  {/* Image count — top right */}
                  {projekt.images.length > 1 && (
                    <div
                      className="absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "rgba(0,0,0,0.55)", color: "#ffffff" }}
                    >
                      {projekt.images.length} Fotos
                    </div>
                  )}
                </Link>
              </AnimatedSection>
            ))}
          </div>
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
