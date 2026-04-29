import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Hornschuh Metallbau GmbH",
};

export default function DatenschutzPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl sm:text-4xl font-black mb-10 tracking-tight"
          style={{ color: "#1a1a1a" }}
        >
          Datenschutzerklärung
        </h1>
        <div className="space-y-8 text-sm leading-relaxed" style={{ color: "#444444" }}>
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
              2. Verantwortliche Stelle
            </h2>
            <p>
              Hornschuh Metalltechnik GmbH
              <br />
              Gewerbestraße 3<br />
              99869 Günthersleben-Wechmar
              <br />
              E-Mail: info@hornschuh.eu
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
              3. Datenerfassung auf dieser Website
            </h2>
            <p>
              Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
              4. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn
              Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können
              Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
