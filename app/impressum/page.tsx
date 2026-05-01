import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Hornschuh Metallbau GmbH",
  description: "Impressum der Hornschuh Metallbau GmbH gemäß § 5 TMG.",
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
        <div className="space-y-8 text-sm leading-relaxed" style={{ color: "#444444" }}>

          {/* 1 */}
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Hornschuh Metalltechnik GmbH
              <br />
              Gewerbestraße 3<br />
              99869 Drei Gleichen OT Günthersleben-Wechmar
            </p>
            <p className="mt-3">
              <strong>Telefon:</strong> +49 36256 86 00 90
              <br />
              <strong>E-Mail:</strong>{" "}
              <a href="mailto:info@hornschuh.eu" style={{ color: "#255aa0" }}>
                info@hornschuh.eu
              </a>
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
              Weitere Gesellschaft
            </h2>
            <p>
              Hornschuh GmbH &amp; Co. KG
              <br />
              Seebergstraße 20
              <br />
              99869 Drei Gleichen OT Günthersleben-Wechmar
            </p>
            <p className="mt-3">
              <strong>Telefon:</strong> +49 36256 86 38 28
              <br />
              <strong>E-Mail:</strong>{" "}
              <a href="mailto:info@hornschuh.eu" style={{ color: "#255aa0" }}>
                info@hornschuh.eu
              </a>
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
              Handelsregister
            </h2>
            <p>
              Registergericht: Amtsgericht Jena
              <br />
              Handelsregisternummer: HRB 1013450
              <br />
              USt-Identifikationsnummer: DE 239056707
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
              Geschäftsführer
            </h2>
            <p>
              Joachim Hornschuh
              <br />
              André Hornschuh
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              André Hornschuh
              <br />
              Gewerbestraße 3<br />
              99869 Drei Gleichen OT Günthersleben-Wechmar
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
              Haftungsausschluss
            </h2>

            <h3 className="text-base font-semibold mt-4 mb-2" style={{ color: "#1a1a1a" }}>
              Haftung für Inhalte
            </h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
              sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
              oder gespeicherte fremde Informationen zu überwachen.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "#1a1a1a" }}>
              Haftung für Links
            </h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
              der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
              der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
              Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "#1a1a1a" }}>
              Urheberrecht
            </h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
