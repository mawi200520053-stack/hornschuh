import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Hornschuh Metallbau GmbH",
  description:
    "Informationen zum Datenschutz gemäß DSGVO auf der Website der Hornschuh Metallbau GmbH.",
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

          {/* 1 */}
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
            <p className="mt-3">
              Auf dieser Website werden personenbezogene Daten nur erhoben,
              soweit Sie diese freiwillig über das Kontaktformular mitteilen
              oder technisch notwendige Daten beim Aufruf der Website automatisch
              erfasst werden. Es findet kein Tracking, kein Profiling und keine
              Auswertung zu Werbezwecken statt.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
              2. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-3">
              Hornschuh GmbH &amp; Co. KG
              <br />
              Seebergstraße 20
              <br />
              99869 Günthersleben-Wechmar
              <br />
              Telefon: +49 36256 86 38 28
              <br />
              E-Mail:{" "}
              <a href="mailto:info@hornschuh.eu" style={{ color: "#255aa0" }}>
                info@hornschuh.eu
              </a>
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-base font-semibold mt-4 mb-2" style={{ color: "#1a1a1a" }}>
              3.1 Server-Log-Dateien
            </h3>
            <p>
              Beim Aufruf dieser Website erfasst unser Hostinganbieter{" "}
              <strong>Host Europe GmbH</strong> automatisch Informationen, die
              Ihr Browser übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>IP-Adresse des anfragenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Browsertyp und -version sowie Betriebssystem</li>
              <li>Referrer-URL (zuvor besuchte Seite)</li>
            </ul>
            <p className="mt-3">
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an der Sicherheit und dem störungsfreien Betrieb der
              Website). Die Daten werden in der Regel nach ca. 7 Tagen gelöscht.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "#1a1a1a" }}>
              3.2 Kontaktformular
            </h3>
            <p>
              Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden
              Ihre Angaben (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung der
              Anfrage und für eventuelle Rückfragen bei uns gespeichert.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Maßnahmen) bzw. lit. f DSGVO (berechtigtes Interesse an der
              Beantwortung von Kundenanfragen). Ihre Daten werden nicht ohne
              Ihre Einwilligung an Dritte weitergegeben und nach abschließender
              Bearbeitung gelöscht.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
              4. Cookies
            </h2>

            <h3 className="text-base font-semibold mt-4 mb-2" style={{ color: "#1a1a1a" }}>
              4.1 Technisch notwendige Cookies
            </h3>
            <p>
              Diese Website setzt ausschließlich technisch notwendige Cookies
              ein, die für den ordnungsgemäßen Betrieb der Website erforderlich
              sind (z. B. Session-Cookies für Formulare). Diese Cookies erfordern
              gemäß § 25 Abs. 2 TTDSG keine gesonderte Einwilligung. Sie werden
              nach Ende Ihrer Browser-Sitzung automatisch gelöscht.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "#1a1a1a" }}>
              4.2 Speicherung der Cookie-Einwilligung
            </h3>
            <p>
              Um Ihre Entscheidung im Cookie-Banner zu speichern, nutzen wir den
              lokalen Speicher (localStorage) Ihres Browsers unter dem Schlüssel{" "}
              <code
                className="px-1 py-0.5 rounded text-xs"
                style={{ backgroundColor: "#f5f5f5", color: "#333333" }}
              >
                hornschuh-cookie-consent
              </code>
              . Diese Speicherung ist technisch notwendig, um Sie beim erneuten
              Besuch nicht erneut mit dem Banner zu konfrontieren, und erfordert
              daher keine separate Einwilligung (§ 25 Abs. 2 TTDSG).
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
              5. Google Maps
            </h2>
            <p>
              Auf der Kontaktseite dieser Website ist Google Maps eingebunden.
              Anbieter ist die Google LLC, 1600 Amphitheatre Parkway, Mountain
              View, CA 94043, USA.
            </p>
            <p className="mt-3">
              Bei der Nutzung von Google Maps kann Ihre IP-Adresse an Server
              von Google in den USA übermittelt werden. Wir haben keinen Einfluss
              auf diese Datenübertragung. Die Nutzung von Google Maps erfolgt im
              Interesse einer ansprechenden Darstellung unserer Unternehmensstandorte
              (Art. 6 Abs. 1 lit. f DSGVO, berechtigtes Interesse).
            </p>
            <p className="mt-3">
              Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der
              Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#255aa0" }}
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
              6. Ihre Rechte nach DSGVO
            </h2>
            <p>
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
              betreffenden personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong>Auskunftsrecht</strong> (Art. 15 DSGVO): Sie können
                Auskunft über die von uns verarbeiteten Daten verlangen.
              </li>
              <li>
                <strong>Berichtigungsrecht</strong> (Art. 16 DSGVO): Sie können
                die Berichtigung unrichtiger Daten verlangen.
              </li>
              <li>
                <strong>Löschungsrecht</strong> (Art. 17 DSGVO): Sie können die
                Löschung Ihrer Daten verlangen, soweit keine Aufbewahrungspflichten
                entgegenstehen.
              </li>
              <li>
                <strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO):
                Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.
              </li>
              <li>
                <strong>Datenportabilität</strong> (Art. 20 DSGVO): Sie haben das
                Recht, Ihre Daten in einem strukturierten, gängigen Format zu
                erhalten.
              </li>
              <li>
                <strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie können
                der Verarbeitung Ihrer Daten auf Basis von berechtigten Interessen
                widersprechen.
              </li>
              <li>
                <strong>Beschwerderecht</strong> (Art. 77 DSGVO): Sie haben das
                Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
                Zuständig ist der{" "}
                <strong>
                  Thüringer Landesbeauftragte für den Datenschutz und die
                  Informationsfreiheit (TLfDI)
                </strong>
                , Häßlerstraße 8, 99096 Erfurt,{" "}
                <a
                  href="mailto:poststelle@datenschutz.thueringen.de"
                  style={{ color: "#255aa0" }}
                >
                  poststelle@datenschutz.thueringen.de
                </a>
                .
              </li>
            </ul>
            <p className="mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href="mailto:info@hornschuh.eu" style={{ color: "#255aa0" }}>
                info@hornschuh.eu
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
