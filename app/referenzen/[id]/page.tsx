import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projekte } from "@/lib/referenzen";
import ImageSlideshow from "@/components/ImageSlideshow";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamicParams = false;

export function generateStaticParams() {
  return projekte.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const projekt = projekte.find((p) => p.id === id);
  return {
    title: `${projekt?.title ?? "Referenz"} | Hornschuh Metallbau GmbH`,
    description: `Referenzprojekt der Hornschuh Metallbau GmbH: ${projekt?.title ?? ""}`,
  };
}

export default async function ReferenzDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projekt = projekte.find((p) => p.id === id);
  if (!projekt) notFound();

  const currentIndex = projekte.findIndex((p) => p.id === id);
  const prev = projekte[currentIndex - 1] ?? null;
  const next = projekte[currentIndex + 1] ?? null;

  return (
    <>
      {/* Back + Hero */}
      <section className="pt-24 pb-0" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <Link
            href="/referenzen"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 mb-8"
            style={{ color: "#888888" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Alle Referenzen
          </Link>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: "rgba(37,90,160,0.25)", color: "#255aa0" }}
          >
            {projekt.kategorie}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-3xl">
            {projekt.title}
          </h1>
        </div>
      </section>

      {/* Slideshow */}
      <section style={{ backgroundColor: "#111111" }}>
        <div className="max-w-7xl mx-auto">
          <ImageSlideshow images={projekt.images} title={projekt.title} />
        </div>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              className="text-xl font-bold mb-5 tracking-tight"
              style={{ color: "#1a1a1a" }}
            >
              Projektbeschreibung
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#555555" }}>
              {projekt.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <section className="py-12 border-t" style={{ borderColor: "#e5e5e5" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between gap-4">
              {prev ? (
                <Link
                  href={`/referenzen/${prev.id}`}
                  className="group flex items-center gap-3 text-sm font-medium transition-colors duration-200 max-w-xs"
                  style={{ color: "#555555" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  <span className="leading-snug">{prev.title}</span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/referenzen/${next.id}`}
                  className="group flex items-center gap-3 text-sm font-medium transition-colors duration-200 max-w-xs text-right"
                  style={{ color: "#555555" }}
                >
                  <span className="leading-snug">{next.title}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      )}

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
