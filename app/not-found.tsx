import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | Hornschuh Metallbau GmbH",
};

const links = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div className="text-center max-w-xl">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ color: "#255aa0" }}
        >
          Fehler 404
        </p>

        <h1
          className="text-8xl sm:text-9xl font-black leading-none mb-6"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px #2a2a2a",
          }}
        >
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
          Diese Seite existiert nicht.
        </h2>

        <p className="text-base mb-10" style={{ color: "#888888" }}>
          Die gesuchte Seite wurde möglicherweise verschoben, umbenannt oder
          existiert nicht mehr.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link
            href="/"
            className="inline-block px-6 py-3 text-sm font-semibold text-white rounded transition-colors duration-200"
            style={{ backgroundColor: "#255aa0" }}
          >
            Zur Startseite
          </Link>
          <Link
            href="/kontakt"
            className="inline-block px-6 py-3 text-sm font-semibold rounded transition-colors duration-200"
            style={{
              color: "#888888",
              border: "1px solid #2a2a2a",
              backgroundColor: "transparent",
            }}
          >
            Kontakt aufnehmen
          </Link>
        </div>

        <div
          className="pt-8"
          style={{ borderTop: "1px solid #2a2a2a" }}
        >
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "#555555" }}
          >
            Weitere Seiten
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200 hover:text-white"
                style={{ color: "#666666" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
