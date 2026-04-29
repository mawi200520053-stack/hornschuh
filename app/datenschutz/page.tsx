import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Hornschuh Metallbau GmbH",
  description:
    "Informationen zum Datenschutz gemäß DSGVO auf der Website der Hornschuh Metallbau GmbH.",
  alternates: { canonical: "https://hornschuh.eu/datenschutz" },
};

const h2 = "text-lg font-bold mb-3";
const h3 = "text-base font-semibold mt-6 mb-2";

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
            <h2 className={h2} style={{ color: "#1a1a1a" }}>
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
              soweit Sie diese freiwillig über das Kontaktformular oder die
              Bewerbungsformulare mitteilen oder technisch notwendige Daten beim
              Aufruf der Website automatisch erfasst werden. Es findet kein
              Tracking, kein Profiling und keine Auswertung zu Werbezwecken
              statt.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className={h2} style={{ color: "#1a1a1a" }}>
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
            <h2 className={h2} style={{ color: "#1a1a1a" }}>
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className={h3} style={{ color: "#1a1a1a" }}>
              3.1 Hosting (Vercel)
            </h3>
            <p>
              Diese Website wird gehostet von der{" "}
              <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina,
              CA 91723, USA. Beim Aufruf der Website werden automatisch
              Server-Log-Dateien erfasst, die Ihr Browser übermittelt:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>IP-Adresse des anfragenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Browsertyp und -version sowie Betriebssystem</li>
              <li>Referrer-URL (zuvor besuchte Seite)</li>
            </ul>
            <p className="mt-3">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an Sicherheit und Betrieb der Website). Die
              Datenübertragung in die USA erfolgt auf Basis der
              Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2
              lit. c DSGVO). Vercel verarbeitet diese Daten als
              Auftragsverarbeiter gemäß Art. 28 DSGVO. Weitere Informationen:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#255aa0" }}
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>

            <h3 className={h3} style={{ color: "#1a1a1a" }}>
              3.2 Kontaktformular
            </h3>
            <p>
              Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden
              folgende Daten erhoben: Name, Unternehmen (optional), E-Mail,
              Telefon (optional), Betreff und Nachricht. Diese Angaben werden
              ausschließlich zur Bearbeitung Ihrer Anfrage und für etwaige
              Rückfragen verwendet.
            </p>
            <p className="mt-3">
              Zum Versand der Formulardaten nutzen wir den Dienst{" "}
              <strong>Resend</strong> (Resend Inc., 2261 Market Street #5039,
              San Francisco, CA 94114, USA) als technischen E-Mail-Dienstleister.
              Ihre Daten werden dabei über die Server von Resend an uns
              übermittelt und anschließend nicht weiter gespeichert. Resend
              verarbeitet diese Daten als Auftragsverarbeiter gemäß Art. 28 DSGVO.
              Die Datenübertragung in die USA erfolgt auf Basis der
              Standardvertragsklauseln der EU-Kommission.
            </p>
            <p className="mt-3">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Maßnahmen) bzw. lit. f DSGVO (berechtigtes Interesse). Ihre Daten
              werden nach abschließender Bearbeitung gelöscht.
            </p>

            <h3 className={h3} style={{ color: "#1a1a1a" }}>
              3.3 Bewerbungsformulare (Karriere)
            </h3>
            <p>
              Wenn Sie sich über unsere Karriereseite auf eine Stelle bewerben
              oder eine Initiativbewerbung einreichen, erheben wir folgende Daten:
              Vor- und Nachname, Geburtsdatum, Adresse, E-Mail-Adresse, Telefon
              (optional), Nachricht sowie optional hochgeladene Unterlagen
              (Lebenslauf, Zeugnisse; PDF, DOC/DOCX oder JPG, max. 5 MB).
            </p>
            <p className="mt-3">
              Die Übermittlung erfolgt ebenfalls über den Dienst{" "}
              <strong>Resend</strong> (siehe 3.2). Dateianhänge werden direkt
              als E-Mail-Anhang an uns weitergeleitet und nicht auf
              Drittservern gespeichert.
            </p>
            <p className="mt-3">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung
              vorvertraglicher Maßnahmen im Rahmen des Bewerbungsverhältnisses)
              in Verbindung mit § 26 BDSG. Bewerbungsunterlagen werden bei
              Ablehnung nach spätestens 6 Monaten gelöscht, sofern keine
              ausdrückliche Einwilligung zur längeren Speicherung vorliegt.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className={h2} style={{ color: "#1a1a1a" }}>
              4. Cookies
            </h2>

            <h3 className={h3} style={{ color: "#1a1a1a" }}>
              4.1 Technisch notwendige Cookies
            </h3>
            <p>
              Diese Website setzt ausschließlich technisch notwendige Cookies
              ein, die für den ordnungsgemäßen Betrieb der Website erforderlich
              sind. Diese Cookies erfordern gemäß § 25 Abs. 2 TTDSG keine
              gesonderte Einwilligung und werden nach Ende Ihrer Browser-Sitzung
              automatisch gelöscht.
            </p>

            <h3 className={h3} style={{ color: "#1a1a1a" }}>
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
              . Diese Speicherung ist technisch notwendig und erfordert daher
              keine separate Einwilligung (§ 25 Abs. 2 TTDSG).
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className={h2} style={{ color: "#1a1a1a" }}>
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
              auf diese Datenübertragung. Die Nutzung erfolgt im Interesse einer
              ansprechenden Darstellung unserer Unternehmensstandorte
              (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="mt-3">
              Weitere Informationen:{" "}
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
            <h2 className={h2} style={{ color: "#1a1a1a" }}>
              6. Auftragsverarbeiter
            </h2>
            <p>
              Wir setzen folgende Auftragsverarbeiter gemäß Art. 28 DSGVO ein,
              mit denen Auftragsverarbeitungsverträge (AVV) geschlossen wurden:
            </p>
            <div className="mt-4 space-y-4">
              <div
                className="p-4 rounded-lg"
                style={{ border: "1px solid #e5e5e5", backgroundColor: "#fafafa" }}
              >
                <p className="font-semibold" style={{ color: "#1a1a1a" }}>
                  Vercel Inc.
                </p>
                <p className="mt-1">
                  440 N Barranca Ave #4133, Covina, CA 91723, USA
                  <br />
                  Zweck: Website-Hosting und Bereitstellung der Infrastruktur
                  <br />
                  Datenschutz:{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#255aa0" }}
                  >
                    vercel.com/legal/privacy-policy
                  </a>
                </p>
              </div>
              <div
                className="p-4 rounded-lg"
                style={{ border: "1px solid #e5e5e5", backgroundColor: "#fafafa" }}
              >
                <p className="font-semibold" style={{ color: "#1a1a1a" }}>
                  Resend Inc.
                </p>
                <p className="mt-1">
                  2261 Market Street #5039, San Francisco, CA 94114, USA
                  <br />
                  Zweck: Transaktionaler E-Mail-Versand (Kontakt- und
                  Bewerbungsformulare)
                  <br />
                  Datenschutz:{" "}
                  <a
                    href="https://resend.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#255aa0" }}
                  >
                    resend.com/legal/privacy-policy
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 7 */}
          <div>
            <h2 className={h2} style={{ color: "#1a1a1a" }}>
              7. Ihre Rechte nach DSGVO
            </h2>
            <p>
              Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer
              personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong>Auskunftsrecht</strong> (Art. 15 DSGVO)
              </li>
              <li>
                <strong>Berichtigungsrecht</strong> (Art. 16 DSGVO)
              </li>
              <li>
                <strong>Löschungsrecht</strong> (Art. 17 DSGVO)
              </li>
              <li>
                <strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)
              </li>
              <li>
                <strong>Datenportabilität</strong> (Art. 20 DSGVO)
              </li>
              <li>
                <strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)
              </li>
              <li>
                <strong>Beschwerderecht</strong> (Art. 77 DSGVO) beim{" "}
                <strong>
                  Thüringer Landesbeauftragten für den Datenschutz und die
                  Informationsfreiheit (TLfDI)
                </strong>
                , Häßlerstraße 8, 99096 Erfurt,{" "}
                <a
                  href="mailto:poststelle@datenschutz.thueringen.de"
                  style={{ color: "#255aa0" }}
                >
                  poststelle@datenschutz.thueringen.de
                </a>
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
