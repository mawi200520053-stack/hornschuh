"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
  titel: string;
}

export default function GalleryLightbox({ images, titel }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isOpen = lightboxIndex !== null;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => i !== null ? (i + 1) % images.length : null);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => i !== null ? (i - 1 + images.length) % images.length : null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, images.length]);

  function prev() {
    setLightboxIndex((i) => i !== null ? (i - 1 + images.length) % images.length : null);
  }
  function next() {
    setLightboxIndex((i) => i !== null ? (i + 1) % images.length : null);
  }

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setLightboxIndex(i)}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            style={{ aspectRatio: "4/3" }}
            aria-label={`${titel} — Bild ${i + 1} vergrößern`}
          >
            <Image
              src={src}
              alt={`${titel} — Bild ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              quality={80}
            />
            {/* Hover dim */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
              style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && lightboxIndex !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              key="lb-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 cursor-pointer"
              style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
              onClick={() => setLightboxIndex(null)}
            />

            {/* Image + controls */}
            <motion.div
              key="lb-content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            >
              {/* Image container */}
              <div
                className="relative pointer-events-auto"
                style={{ maxWidth: "90vw", maxHeight: "90vh" }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[lightboxIndex]}
                  alt={`${titel} — Bild ${lightboxIndex + 1}`}
                  width={1400}
                  height={900}
                  className="rounded-lg object-contain"
                  style={{ maxWidth: "90vw", maxHeight: "90vh", width: "auto", height: "auto" }}
                  priority
                />
              </div>

              {/* Close */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="fixed top-5 right-5 z-10 flex items-center justify-center w-10 h-10 rounded-full pointer-events-auto cursor-pointer transition-colors duration-200"
                style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)"; }}
                aria-label="Schließen"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Counter */}
              <div
                className="fixed top-5 left-5 z-10 text-sm font-semibold px-3 py-1.5 rounded-full pointer-events-none"
                style={{ backgroundColor: "rgba(0,0,0,0.55)", color: "#ffffff" }}
              >
                {lightboxIndex + 1} / {images.length}
              </div>

              {/* Prev */}
              {images.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="fixed left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full pointer-events-auto cursor-pointer transition-colors duration-200"
                  style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.8)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.55)"; }}
                  aria-label="Vorheriges Bild"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
              )}

              {/* Next */}
              {images.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="fixed right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full pointer-events-auto cursor-pointer transition-colors duration-200"
                  style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.8)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.55)"; }}
                  aria-label="Nächstes Bild"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
