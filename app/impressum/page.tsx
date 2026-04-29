import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Hornschuh Metallbau GmbH",
};

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl sm:text-4xl font-black mb-10 tracking-tight"
          style={{ color: "#1a1a1a" }}
        >
          Impressum
        </h1>
        <div className="prose prose-sm max-w-none" style={{ color: "#444444" }}>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#1a1a1a" }}>
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mb-6">
            Hornschuh Metalltechnik GmbH
            <br />
            Gewerbestraße 3<br />
            99869 Günthersleben-Wechmar
          </p>
          <p className="mb-6">
            <strong>Telefon:</strong> +49 36256 86 00 90
            <br />
            <strong>E-Mail:</strong>{" "}
            <a
              href="mailto:info@hornschuh.eu"
              style={{ color: "#255aa0" }}
            >
              info@hornschuh.eu
            </a>
          </p>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#1a1a1a" }}>
            Handelsregister
          </h2>
          <p className="mb-6">
            Eingetragen im Handelsregister.
            <br />
            Registergericht: Amtsgericht Erfurt
          </p>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#1a1a1a" }}>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="mb-6">
            Hornschuh Metalltechnik GmbH
            <br />
            Gewerbestraße 3<br />
            99869 Günthersleben-Wechmar
          </p>
        </div>
      </div>
    </section>
  );
}
