"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Projekt } from "@/lib/referenzen";

const KATEGORIEN = ["Alle", "Neubau", "Industriebau", "Sanierung", "Verkehrsbau"];

interface Props {
  items: Projekt[];
}

export default function ReferenzenGrid({ items }: Props) {
  const [aktiv, setAktiv] = useState("Alle");

  const gefiltert =
    aktiv === "Alle"
      ? items
      : items.filter((p) => p.kategorien.includes(aktiv));

  return (
    <>
      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {KATEGORIEN.map((kat) => {
          const isActive = aktiv === kat;
          return (
            <button
              key={kat}
              onClick={() => setAktiv(kat)}
              className="px-4 py-2 text-sm font-semibold rounded-full cursor-pointer transition-colors duration-200"
              style={{
                backgroundColor: isActive ? "#255aa0" : "transparent",
                color: isActive ? "#ffffff" : "#555555",
                border: isActive ? "1px solid #255aa0" : "1px solid #e5e5e5",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = "#cccccc";
                  e.currentTarget.style.color = "#1a1a1a";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = "#e5e5e5";
                  e.currentTarget.style.color = "#555555";
                }
              }}
            >
              {kat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {gefiltert.map((projekt, i) => (
            <motion.div
              key={projekt.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, delay: i * 0.04, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Link
                href={`/referenzen/${projekt.id}`}
                className="group relative overflow-hidden rounded-xl block"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={projekt.titelBild}
                  alt={projekt.titel}
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
                    {projekt.kategorien.join(" · ")}
                  </span>
                </div>
                {/* Image count */}
                {projekt.galerie.length > 1 && (
                  <div className="absolute top-4 right-4">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.6)",
                        color: "#ffffff",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                      </svg>
                      {projekt.galerie.length}
                    </span>
                  </div>
                )}
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-end p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                  }}
                >
                  <div>
                    <p className="text-white font-bold text-base leading-snug mb-1">
                      {projekt.titel}
                    </p>
                    <p className="text-xs font-medium flex items-center gap-1" style={{ color: "#aaaaaa" }}>
                      Projekt ansehen
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {gefiltert.length === 0 && (
        <p className="text-center py-16 text-sm" style={{ color: "#888888" }}>
          Keine Projekte in dieser Kategorie.
        </p>
      )}
    </>
  );
}
