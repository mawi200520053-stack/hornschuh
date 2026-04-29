"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [consent, setConsent] = useState<"accepted" | "minimal" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("hornschuh-cookie-consent");
    if (stored === "accepted" || stored === "minimal") {
      setConsent(stored as "accepted" | "minimal");
    }
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function accept() {
    localStorage.setItem("hornschuh-cookie-consent", "accepted");
    setConsent("accepted");
  }

  function minimal() {
    localStorage.setItem("hornschuh-cookie-consent", "minimal");
    setConsent("minimal");
  }

  return (
    <AnimatePresence>
      {consent === null && (
        <motion.div
          key="cookie-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50"
          style={{ backgroundColor: "#1a1a1a", borderTop: "1px solid #2a2a2a" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm" style={{ color: "#888888" }}>
                Diese Website verwendet technisch notwendige Cookies sowie localStorage zur Speicherung Ihrer Cookie-Einwilligung.
                Weitere Informationen finden Sie in unserer{" "}
                <Link
                  href="/datenschutz"
                  className="underline underline-offset-2 transition-colors duration-200"
                  style={{ color: "#255aa0" }}
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={minimal}
                  className="px-4 py-2 text-sm font-medium rounded transition-colors duration-200 cursor-pointer"
                  style={{ border: "1px solid #3a3a3a", color: "#888888", backgroundColor: "transparent" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  Nur notwendige
                </button>
                <button
                  onClick={accept}
                  className="px-5 py-2 text-sm font-semibold rounded transition-colors duration-200 cursor-pointer"
                  style={{ backgroundColor: "#255aa0", color: "#ffffff" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1e4a85";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#255aa0";
                  }}
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
