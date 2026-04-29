"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface Stelle {
  id: string;
  titel: string;
  datum: string;
  kurztext: string;
  einleitung: string;
  aufgaben: string[];
  profil: string[];
  bieten: string[];
}

interface JobModalProps {
  job: Stelle | null;
  onClose: () => void;
}

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
];
const MAX_SIZE_MB = 5;

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: "6px",
  border: "1px solid #e5e5e5",
  backgroundColor: "#fafafa",
  color: "#1a1a1a",
  fontSize: "14px",
  outline: "none",
};

function focusBorderOn(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  (e.target as HTMLElement).style.borderColor = "#255aa0";
}
function focusBorderOff(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  (e.target as HTMLElement).style.borderColor = "#e5e5e5";
}

export default function JobModal({ job, onClose }: JobModalProps) {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");
  const [fileError, setFileError] = useState<string | null>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);
  const lastFocusRef = useRef<HTMLButtonElement>(null);

  // Reset form state when job changes
  useEffect(() => {
    setFormStatus("idle");
    setFileError(null);
  }, [job?.id]);

  // Lock body scroll, ESC key, focus first element
  useEffect(() => {
    if (!job) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFocusRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const focusable = backdropRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [job, onClose]);

  if (!job) return null;

  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === backdropRef.current) onClose();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) { setFileError(null); return; }
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setFileError("Nur PDF, DOC, DOCX oder JPG erlaubt.");
      e.target.value = "";
      return;
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setFileError(`Datei zu groß (max. ${MAX_SIZE_MB} MB).`);
      e.target.value = "";
      return;
    }
    setFileError(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setFormStatus("success");
  }

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
      role="dialog"
      aria-modal="true"
      aria-label={job.titel}
    >
      <div
        className="relative bg-white rounded-xl w-full overflow-y-auto"
        style={{ maxWidth: "700px", maxHeight: "90vh" }}
      >
        {/* Modal Header */}
        <div
          className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 py-4"
          style={{ borderBottom: "1px solid #e5e5e5" }}
        >
          <Image
            src="https://hornschuh.eu/wp-content/uploads/2022/05/Hornschuh-Logo-Retina-160.png"
            alt="Hornschuh Logo"
            width={120}
            height={30}
            className="h-7 w-auto object-contain"
          />
          <button
            ref={firstFocusRef}
            onClick={onClose}
            aria-label="Modal schließen"
            className="p-2 rounded-lg transition-colors duration-200"
            style={{ color: "#888888" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#f5f5f5")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-8">
          {/* Job Title */}
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#255aa0" }}>
            Stellenanzeige · {job.datum}
          </p>
          <h2 className="text-2xl sm:text-3xl font-black mb-6" style={{ color: "#1a1a1a" }}>
            {job.titel}
          </h2>

          {/* Einleitung */}
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#444444" }}>
            {job.einleitung}
          </p>

          {/* Aufgaben */}
          <section className="mb-6">
            <h3 className="text-base font-black mb-3" style={{ color: "#1a1a1a" }}>
              Ihre Aufgaben
            </h3>
            <ul className="space-y-2">
              {job.aufgaben.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#444444" }}>
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: "rgba(37,90,160,0.1)", color: "#255aa0" }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Profil */}
          <section className="mb-6">
            <h3 className="text-base font-black mb-3" style={{ color: "#1a1a1a" }}>
              Ihr Profil
            </h3>
            <ul className="space-y-2">
              {job.profil.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#444444" }}>
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: "rgba(37,90,160,0.1)", color: "#255aa0" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Wir bieten */}
          <section className="mb-8">
            <h3 className="text-base font-black mb-3" style={{ color: "#1a1a1a" }}>
              Wir bieten
            </h3>
            <ul className="space-y-2">
              {job.bieten.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#444444" }}>
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                    style={{ backgroundColor: "#255aa0", color: "#ffffff" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Divider */}
          <div className="my-8" style={{ borderTop: "2px solid #f0f0f0" }} />

          {/* Bewerbungsformular */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#255aa0" }}>
              Jetzt bewerben
            </p>
            <h3 className="text-xl font-black mb-6" style={{ color: "#1a1a1a" }}>
              Bewerbungsformular
            </h3>

            {formStatus === "success" ? (
              <div className="rounded-xl p-8 text-center" style={{ border: "1px solid rgba(37,90,160,0.2)", backgroundColor: "rgba(37,90,160,0.04)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                  style={{ backgroundColor: "#255aa0", color: "#ffffff" }}>✓</div>
                <h4 className="text-lg font-black mb-2" style={{ color: "#1a1a1a" }}>Bewerbung eingegangen!</h4>
                <p className="text-sm" style={{ color: "#666666" }}>
                  Vielen Dank! Ihre Bewerbung wurde erfolgreich übermittelt. Wir melden uns in Kürze.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Hidden job title */}
                <input type="hidden" name="stelle" value={job.titel} />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#444444" }}>Vorname *</label>
                    <input type="text" name="vorname" required placeholder="Max" style={inputStyle}
                      onFocus={focusBorderOn} onBlur={focusBorderOff} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#444444" }}>Nachname *</label>
                    <input type="text" name="nachname" required placeholder="Mustermann" style={inputStyle}
                      onFocus={focusBorderOn} onBlur={focusBorderOff} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#444444" }}>Geburtsdatum *</label>
                    <input type="date" name="geburtsdatum" required style={inputStyle}
                      onFocus={focusBorderOn} onBlur={focusBorderOff} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#444444" }}>Telefonnummer</label>
                    <input type="tel" name="telefon" placeholder="+49 123 456789" style={inputStyle}
                      onFocus={focusBorderOn} onBlur={focusBorderOff} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#444444" }}>Adresse *</label>
                  <input type="text" name="adresse" required placeholder="Musterstraße 1" style={inputStyle}
                    onFocus={focusBorderOn} onBlur={focusBorderOff} />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#444444" }}>PLZ *</label>
                    <input type="text" name="plz" required placeholder="12345" style={inputStyle}
                      onFocus={focusBorderOn} onBlur={focusBorderOff} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#444444" }}>Ort *</label>
                    <input type="text" name="ort" required placeholder="Musterstadt" style={inputStyle}
                      onFocus={focusBorderOn} onBlur={focusBorderOff} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#444444" }}>E-Mail *</label>
                  <input type="email" name="email" required placeholder="max@beispiel.de" style={inputStyle}
                    onFocus={focusBorderOn} onBlur={focusBorderOff} />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#444444" }}>Nachricht *</label>
                  <textarea name="nachricht" required rows={4} placeholder="Kurze Vorstellung und Motivation …"
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={focusBorderOn} onBlur={focusBorderOff} />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#444444" }}>
                    Unterlagen (Lebenslauf, Zeugnisse)
                  </label>
                  <input type="file" name="datei" accept=".pdf,.doc,.docx,.jpg,.jpeg"
                    onChange={handleFileChange}
                    className="w-full text-sm"
                    style={{ color: "#444444" }} />
                  {fileError && (
                    <p className="mt-1 text-xs" style={{ color: "#cc0000" }}>{fileError}</p>
                  )}
                  <p className="mt-1 text-xs" style={{ color: "#aaaaaa" }}>
                    PDF, DOC, DOCX oder JPG · max. 5 MB
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id={`datenschutz-${job.id}`} name="datenschutz" required
                    className="mt-0.5 flex-shrink-0" style={{ accentColor: "#255aa0" }} />
                  <label htmlFor={`datenschutz-${job.id}`} className="text-xs leading-relaxed" style={{ color: "#666666" }}>
                    Ich habe die{" "}
                    <a href="/datenschutz" target="_blank" style={{ color: "#255aa0" }}>
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>

                <button
                  ref={lastFocusRef}
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full py-3.5 text-sm font-semibold text-white rounded-lg transition-colors duration-200"
                  style={{
                    backgroundColor: formStatus === "loading" ? "#888888" : "#255aa0",
                    cursor: formStatus === "loading" ? "not-allowed" : "pointer",
                  }}
                >
                  {formStatus === "loading" ? "Wird gesendet …" : "Bewerbung einreichen"}
                </button>

                <p className="text-xs" style={{ color: "#aaaaaa" }}>* Pflichtfelder</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
