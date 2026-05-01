"use client";

import { useState } from "react";

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_SIZE_MB = 5;

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid #3a3a3a",
  backgroundColor: "#222222",
  color: "#ffffff",
  fontSize: "14px",
  outline: "none",
};

function focusBorderOn(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  (e.target as HTMLElement).style.borderColor = "#255aa0";
}
function focusBorderOff(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  (e.target as HTMLElement).style.borderColor = "#3a3a3a";
}

export default function InitiativForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fileError, setFileError] = useState<string | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) { setFileError(null); return; }
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setFileError("Nur PDF, DOC oder DOCX erlaubt.");
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

    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/karriere/initiativ", {
      method: "POST",
      body: formData,
    });

    setFormStatus(res.ok ? "success" : "error");
  }

  if (formStatus === "error") {
    return (
      <div className="rounded-xl p-10 text-center" style={{ border: "1px solid rgba(200,0,0,0.2)", backgroundColor: "rgba(200,0,0,0.04)" }}>
        <h4 className="text-xl font-black mb-2" style={{ color: "#cc0000" }}>Fehler beim Senden</h4>
        <p className="text-sm mb-4" style={{ color: "#888888" }}>
          Leider ist etwas schiefgelaufen. Bitte schreiben Sie uns direkt an{" "}
          <a href="mailto:info@hornschuh.eu" style={{ color: "#255aa0" }}>info@hornschuh.eu</a>.
        </p>
        <button onClick={() => setFormStatus("idle")} className="text-sm font-semibold underline" style={{ color: "#255aa0" }}>
          Erneut versuchen
        </button>
      </div>
    );
  }

  if (formStatus === "success") {
    return (
      <div className="rounded-xl p-10 text-center" style={{ border: "1px solid rgba(37,90,160,0.3)", backgroundColor: "rgba(37,90,160,0.08)" }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
          style={{ backgroundColor: "#255aa0", color: "#ffffff" }}>✓</div>
        <h4 className="text-xl font-black mb-2 text-white">Bewerbung eingegangen!</h4>
        <p className="text-sm" style={{ color: "#888888" }}>
          Vielen Dank! Ihre Initiativbewerbung wurde erfolgreich übermittelt. Wir melden uns in Kürze.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#cccccc" }}>Vorname *</label>
          <input type="text" name="vorname" required placeholder="Max" style={inputStyle}
            onFocus={focusBorderOn} onBlur={focusBorderOff} />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#cccccc" }}>Nachname *</label>
          <input type="text" name="nachname" required placeholder="Mustermann" style={inputStyle}
            onFocus={focusBorderOn} onBlur={focusBorderOff} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#cccccc" }}>Geburtsdatum *</label>
          <input type="date" name="geburtsdatum" required style={inputStyle}
            onFocus={focusBorderOn} onBlur={focusBorderOff} />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#cccccc" }}>Telefonnummer</label>
          <input type="tel" name="telefon" placeholder="+49 123 456789" style={inputStyle}
            onFocus={focusBorderOn} onBlur={focusBorderOff} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#cccccc" }}>Adresse *</label>
        <input type="text" name="adresse" required placeholder="Musterstraße 1" style={inputStyle}
          onFocus={focusBorderOn} onBlur={focusBorderOff} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#cccccc" }}>PLZ *</label>
          <input type="text" name="plz" required placeholder="12345" style={inputStyle}
            onFocus={focusBorderOn} onBlur={focusBorderOff} />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#cccccc" }}>Ort *</label>
          <input type="text" name="ort" required placeholder="Musterstadt" style={inputStyle}
            onFocus={focusBorderOn} onBlur={focusBorderOff} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#cccccc" }}>E-Mail *</label>
        <input type="email" name="email" required placeholder="max@beispiel.de" style={inputStyle}
          onFocus={focusBorderOn} onBlur={focusBorderOff} />
      </div>

      <div>
        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#cccccc" }}>Gewünschte Stelle / Bereich</label>
        <input type="text" name="bereich" placeholder="z.B. Schweißer, Auszubildende/r, kaufmännisch …" style={inputStyle}
          onFocus={focusBorderOn} onBlur={focusBorderOff} />
      </div>

      <div>
        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#cccccc" }}>Nachricht *</label>
        <textarea name="nachricht" required rows={4} placeholder="Kurze Vorstellung und Ihre Motivation …"
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={focusBorderOn} onBlur={focusBorderOff} />
      </div>

      <div>
        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#cccccc" }}>
          Unterlagen (Lebenslauf, Zeugnisse)
        </label>
        <input type="file" name="datei" accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="w-full text-sm"
          style={{ color: "#cccccc" }} />
        {fileError && (
          <p className="mt-1 text-xs" style={{ color: "#ff6b6b" }}>{fileError}</p>
        )}
        <p className="mt-1 text-xs" style={{ color: "#666666" }}>
          PDF, DOC oder DOCX · max. 5 MB
        </p>
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" id="datenschutz-initiativ" name="datenschutz" required
          className="mt-0.5 flex-shrink-0" style={{ accentColor: "#255aa0" }} />
        <label htmlFor="datenschutz-initiativ" className="text-xs leading-relaxed" style={{ color: "#888888" }}>
          Ich habe die{" "}
          <a href="/datenschutz" target="_blank" style={{ color: "#255aa0" }}>
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zu. *
        </label>
      </div>

      <button
        type="submit"
        disabled={formStatus === "loading"}
        className="w-full py-4 text-sm font-semibold text-white rounded-lg transition-colors duration-200"
        style={{
          backgroundColor: formStatus === "loading" ? "#555555" : "#255aa0",
          cursor: formStatus === "loading" ? "not-allowed" : "pointer",
        }}
      >
        {formStatus === "loading" ? "Wird gesendet …" : "Initiativbewerbung einreichen"}
      </button>

      <p className="text-xs" style={{ color: "#555555" }}>* Pflichtfelder</p>
    </form>
  );
}
