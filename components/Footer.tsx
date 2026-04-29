import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Karriere", href: "/karriere" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111111", borderTop: "1px solid #222222" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Logo + Tagline */}
          <div>
            <Image
              src="/hornschuh-logo-80.png"
              alt="Hornschuh Metallbau GmbH"
              width={150}
              height={38}
              className="h-9 w-auto object-contain mb-4"
            />
            <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
              Stahl. Bau. Kompetenz.
              <br />
              Ihr Partner für Stahlbau in Thüringen seit 1991.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#555555" }}
            >
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "#888888" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Kontakt */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#555555" }}
            >
              Kontakt
            </h3>
            <div className="space-y-3 text-sm" style={{ color: "#888888" }}>
              <div>
                <p className="font-medium" style={{ color: "#cccccc" }}>
                  Hornschuh Metalltechnik GmbH
                </p>
                <p>Gewerbestraße 3</p>
                <p>99869 Günthersleben-Wechmar</p>
              </div>
              <div>
                <a
                  href="tel:+4936256860090"
                  className="hover:text-white transition-colors"
                >
                  +49 36256 86 00 90
                </a>
              </div>
              <div>
                <a
                  href="mailto:info@hornschuh.eu"
                  className="hover:text-white transition-colors"
                  style={{ color: "#255aa0" }}
                >
                  info@hornschuh.eu
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid #222222", color: "#555555" }}
        >
          <p>
            © {new Date().getFullYear()} Hornschuh Metalltechnik GmbH | Hornschuh GmbH &amp; Co. KG
          </p>
          <div className="flex gap-4">
            <Link
              href="/impressum"
              className="hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-white transition-colors"
            >
              Datenschutzerklärung
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
