"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        className="rounded-xl p-8 text-center"
        style={{ border: "1px solid rgba(37,90,160,0.3)", backgroundColor: "rgba(37,90,160,0.05)" }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl"
          style={{ backgroundColor: "#255aa0", color: "#ffffff" }}
        >
          ✓
        </div>
        <h3 className="text-lg font-bold mb-2" style={{ color: "#1a1a1a" }}>
          Nachricht gesendet!
        </h3>
        <p className="text-sm" style={{ color: "#666666" }}>
          Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen.
        </p>
      </div>
    );
  }

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #e5e5e5",
    backgroundColor: "#fafafa",
    color: "#1a1a1a",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2"
            style={{ color: "#444444" }}
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Max Mustermann"
            style={inputStyle}
            onFocus={(e) =>
              ((e.target as HTMLInputElement).style.borderColor = "#255aa0")
            }
            onBlur={(e) =>
              ((e.target as HTMLInputElement).style.borderColor = "#e5e5e5")
            }
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium mb-2"
            style={{ color: "#444444" }}
          >
            Unternehmen
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Musterfirma GmbH"
            style={inputStyle}
            onFocus={(e) =>
              ((e.target as HTMLInputElement).style.borderColor = "#255aa0")
            }
            onBlur={(e) =>
              ((e.target as HTMLInputElement).style.borderColor = "#e5e5e5")
            }
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2"
          style={{ color: "#444444" }}
        >
          E-Mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="max@musterfirma.de"
          style={inputStyle}
          onFocus={(e) =>
            ((e.target as HTMLInputElement).style.borderColor = "#255aa0")
          }
          onBlur={(e) =>
            ((e.target as HTMLInputElement).style.borderColor = "#e5e5e5")
          }
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium mb-2"
          style={{ color: "#444444" }}
        >
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+49 123 456789"
          style={inputStyle}
          onFocus={(e) =>
            ((e.target as HTMLInputElement).style.borderColor = "#255aa0")
          }
          onBlur={(e) =>
            ((e.target as HTMLInputElement).style.borderColor = "#e5e5e5")
          }
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium mb-2"
          style={{ color: "#444444" }}
        >
          Betreff *
        </label>
        <select
          id="subject"
          name="subject"
          required
          style={{ ...inputStyle, cursor: "pointer" }}
          onFocus={(e) =>
            ((e.target as HTMLSelectElement).style.borderColor = "#255aa0")
          }
          onBlur={(e) =>
            ((e.target as HTMLSelectElement).style.borderColor = "#e5e5e5")
          }
        >
          <option value="">Bitte wählen …</option>
          <option value="planung">Planung & Beratung</option>
          <option value="fertigung">Fertigung & Produktion</option>
          <option value="montage">Montageservice</option>
          <option value="angebot">Angebotsanfrage</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2"
          style={{ color: "#444444" }}
        >
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Beschreiben Sie kurz Ihr Vorhaben …"
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={(e) =>
            ((e.target as HTMLTextAreaElement).style.borderColor = "#255aa0")
          }
          onBlur={(e) =>
            ((e.target as HTMLTextAreaElement).style.borderColor = "#e5e5e5")
          }
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 text-sm font-semibold text-white rounded transition-all duration-200"
        style={{
          backgroundColor: loading ? "#888888" : "#255aa0",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Wird gesendet …" : "Nachricht senden"}
      </button>

      <p className="text-xs" style={{ color: "#aaaaaa" }}>
        * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an
        Dritte weitergegeben.
      </p>
    </form>
  );
}
