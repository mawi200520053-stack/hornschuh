"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "hornschuh-cookie-info-dismissed";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY) === "1";
}

// On the server (and during hydration) treat as dismissed to avoid a flash
function getServerSnapshot() {
  return true;
}

export default function CookieBanner() {
  const dismissed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    // Notify useSyncExternalStore listeners in the same tab
    window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
  }

  return (
    <AnimatePresence>
      {!dismissed && (
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
                Diese Website verwendet ausschließlich technisch notwendige Cookies.
                Es findet kein Tracking statt. Mehr Infos in der{" "}
                <Link
                  href="/datenschutz"
                  className="underline underline-offset-2 transition-colors duration-200"
                  style={{ color: "#255aa0" }}
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
              <div className="flex-shrink-0">
                <button
                  onClick={dismiss}
                  className="px-5 py-2 text-sm font-semibold rounded transition-colors duration-200 cursor-pointer"
                  style={{ backgroundColor: "#255aa0", color: "#ffffff" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1e4a85";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#255aa0";
                  }}
                >
                  Verstanden
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
