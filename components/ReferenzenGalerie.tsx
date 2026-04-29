"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface ReferenzItem {
  id: string;
  title: string;
  description: string;
  kategorie: string;
  image: string;
}

interface Props {
  items: ReferenzItem[];
}

export default function ReferenzenGalerie({ items }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = items.find((item) => item.id === selectedId) ?? null;

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedId]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedId(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={() => setSelectedId(item.id)}
            className="group relative overflow-hidden rounded-xl text-left cursor-pointer w-full"
            style={{ aspectRatio: "4/3" }}
            aria-label={`${item.title} öffnen`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "rgba(37,90,160,0.9)",
                  color: "#ffffff",
                  backdropFilter: "blur(4px)",
                }}
              >
                {item.kategorie}
              </span>
            </div>
            {/* Hover overlay */}
            <div
              className="absolute inset-0 flex items-end p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
              }}
            >
              <div>
                <p className="text-white font-bold text-base leading-snug mb-1">
                  {item.title}
                </p>
                <p
                  className="text-xs font-medium flex items-center gap-1"
                  style={{ color: "#888888" }}
                >
                  Details ansehen
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 cursor-pointer"
              style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
              onClick={() => setSelectedId(null)}
              aria-hidden
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none"
            >
              <div
                className="relative w-full max-w-5xl rounded-2xl overflow-hidden pointer-events-auto flex flex-col lg:flex-row"
                style={{ backgroundColor: "#1a1a1a", maxHeight: "90vh" }}
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200 cursor-pointer"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                  }}
                  aria-label="Schließen"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>

                {/* Image */}
                <div className="relative w-full lg:w-3/5 flex-shrink-0" style={{ minHeight: "260px", maxHeight: "480px" }}>
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to right, transparent 60%, #1a1a1a 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center px-8 py-10 lg:py-12 flex-1 overflow-y-auto">
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 self-start"
                    style={{ backgroundColor: "rgba(37,90,160,0.25)", color: "#255aa0" }}
                  >
                    {selected.kategorie}
                  </span>
                  <h2
                    className="text-xl sm:text-2xl font-black leading-snug tracking-tight mb-5"
                    style={{ color: "#ffffff" }}
                  >
                    {selected.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
                    {selected.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
