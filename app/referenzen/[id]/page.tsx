import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { PROJEKTE_IDS_QUERY, PROJEKT_BY_ID_QUERY } from "@/sanity/lib/queries";
import type { ProjektDetail } from "@/lib/referenzen";
import GalleryLightbox from "@/components/GalleryLightbox";
import AnimatedSection from "@/components/AnimatedSection";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const ids: { id: string }[] = await client.fetch(PROJEKTE_IDS_QUERY);
    return ids.map(({ id }) => ({ id }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const projekt: ProjektDetail | null = await client.fetch(PROJEKT_BY_ID_QUERY, { id }).catch(() => null);
  return {
    title: `${projekt?.titel ?? "Referenz"} | Hornschuh`,
    description: projekt
      ? `${projekt.titel} – realisiert von Hornschuh Metalltechnik GmbH. Leistungsumfang: ${projekt.leistungsumfang}.`
      : "Referenzprojekt der Hornschuh Metalltechnik GmbH – Stahlbau in Thüringen.",
    alternates: { canonical: `https://hornschuh.eu/referenzen/${id}` },
  };
}

export default async function ReferenzDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projekt: ProjektDetail | null = await client.fetch(PROJEKT_BY_ID_QUERY, { id }).catch(() => null);
  if (!projekt) notFound();

  const prev = projekt.prevId ? { id: projekt.prevId } : null;
  const next = projekt.nextId ? { id: projekt.nextId } : null;

  return (
    <>
      <BreadcrumbJsonLd crumbs={[
        { name: "Referenzen", href: "/referenzen" },
        { name: projekt.titel, href: `/referenzen/${id}` },
      ]} />
      {/* HERO — full-bleed titelBild */}
      <section className="relative" style={{ height: "80vh", minHeight: "520px" }}>
        <Image
          src={projekt.titelBild}
          alt={projekt.titel}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />

        {/* Back link */}
        <div className="absolute top-0 left-0 right-0 z-20 pt-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/referenzen"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-200 hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Alle Referenzen
            </Link>
          </div>
        </div>

        {/* Gradient */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 45%, transparent 70%)",
          }}
        />

        {/* Badge + title */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(37,90,160,0.85)", color: "#ffffff" }}
            >
              {projekt.kategorien.join(" · ")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-3xl">
              {projekt.titel}
            </h1>
          </div>
        </div>
      </section>

      {/* PROJEKTINFOS */}
      <section className="py-12 bg-white border-b" style={{ borderColor: "#f0f0f0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#888888" }}>
                Jahr
              </p>
              <p className="text-base font-semibold" style={{ color: "#1a1a1a" }}>
                {projekt.jahr}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#888888" }}>
                Auftraggeber
              </p>
              <p className="text-base font-semibold" style={{ color: "#1a1a1a" }}>
                {projekt.auftraggeber}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#888888" }}>
                Leistungsumfang
              </p>
              <p className="text-base leading-snug" style={{ color: "#1a1a1a" }}>
                {projekt.leistungsumfang}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-xl font-bold mb-8 tracking-tight" style={{ color: "#1a1a1a" }}>
              Bildergalerie
            </h2>
            <GalleryLightbox images={projekt.galerie} titel={projekt.titel} />
          </AnimatedSection>
        </div>
      </section>

      {/* VIDEO */}
      {projekt.video && (
        <section className="py-16 lg:py-20 bg-white border-t" style={{ borderColor: "#f0f0f0" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-xl font-bold mb-8 tracking-tight" style={{ color: "#1a1a1a" }}>
                Projektvideo
              </h2>
              <video
                src={projekt.video}
                controls
                poster={projekt.titelBild}
                className="w-full rounded-xl"
                style={{ maxHeight: "480px", backgroundColor: "#000" }}
              >
                Ihr Browser unterstützt keine Videowiedergabe.
              </video>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* PREV / NEXT */}
      {(prev || next) && (
        <section className="py-12 border-t" style={{ borderColor: "#e5e5e5" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between gap-4">
              {prev ? (
                <Link
                  href={`/referenzen/${prev.id}`}
                  className="flex items-center gap-3 text-sm font-medium transition-colors duration-200 max-w-xs"
                  style={{ color: "#555555" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  <span className="leading-snug">Vorheriges Projekt</span>
                </Link>
              ) : <div />}
              {next ? (
                <Link
                  href={`/referenzen/${next.id}`}
                  className="flex items-center gap-3 text-sm font-medium transition-colors duration-200 max-w-xs text-right"
                  style={{ color: "#555555" }}
                >
                  <span className="leading-snug">Nächstes Projekt</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              ) : <div />}
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
