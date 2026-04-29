import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | Hornschuh Metallbau GmbH",
  description:
    "Kontakt zur Hornschuh Metallbau GmbH – Gewerbestraße 3, 99869 Günthersleben-Wechmar. Tel: +49 36256 86 00 90. Kostenlose Beratung für Ihr Stahlbauprojekt.",
  alternates: { canonical: "https://hornschuh.eu/kontakt" },
};

const standorte = [
  {
    name: "Hornschuh Metalltechnik GmbH",
    fokus: "Konstruktion & Fertigung",
    adresse: "Gewerbestraße 3",
    ort: "99869 Günthersleben-Wechmar",
    tel: "+49 36256 86 00 90",
    telHref: "+4936256860090",
    email: "info@hornschuh.eu",
  },
  {
    name: "Hornschuh GmbH & Co. KG",
    fokus: "Vertrieb & Montage",
    adresse: "Seebergstraße 20",
    ort: "99869 Günthersleben-Wechmar",
    tel: "+49 36256 86 38 28",
    telHref: "+4936256863828",
    email: "info@hornschuh.eu",
  },
];

export default function KontaktPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="pt-32 pb-20" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#255aa0" }}
          >
            Kontakt
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6 max-w-3xl">
            Sprechen Sie mit uns
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "#888888" }}
          >
            Ob Neubauvorhaben, Sonderkonstruktion oder allgemeine Anfrage —
            wir antworten schnell und beraten Sie kostenlos.
          </p>
        </div>
      </section>

      {/* KONTAKT CONTENT */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Kontaktformular */}
            <AnimatedSection>
              <SectionHeading
                eyebrow="Anfrage stellen"
                title="Schreiben Sie uns"
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </AnimatedSection>

            {/* Standorte */}
            <AnimatedSection delay={0.15}>
              <SectionHeading
                eyebrow="Standorte"
                title="Wo Sie uns finden"
              />
              <div className="mt-8 space-y-6">
                {standorte.map((s) => (
                  <div
                    key={s.name}
                    className="p-6 rounded-xl"
                    style={{
                      border: "1px solid #e5e5e5",
                      backgroundColor: "#fafafa",
                    }}
                  >
                    <span
                      className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                      style={{
                        backgroundColor: "rgba(37,90,160,0.1)",
                        color: "#255aa0",
                      }}
                    >
                      {s.fokus}
                    </span>
                    <h3
                      className="text-base font-black mb-3"
                      style={{ color: "#1a1a1a" }}
                    >
                      {s.name}
                    </h3>
                    <div className="space-y-2 text-sm" style={{ color: "#666666" }}>
                      <p>{s.adresse}</p>
                      <p>{s.ort}</p>
                      <a
                        href={`tel:${s.telHref}`}
                        className="block font-medium transition-colors"
                        style={{ color: "#255aa0" }}
                      >
                        {s.tel}
                      </a>
                      <a
                        href={`mailto:${s.email}`}
                        className="block font-medium transition-colors"
                        style={{ color: "#255aa0" }}
                      >
                        {s.email}
                      </a>
                    </div>
                  </div>
                ))}

                {/* Öffnungszeiten */}
                <div
                  className="p-6 rounded-xl"
                  style={{
                    border: "1px solid #e5e5e5",
                    backgroundColor: "#fafafa",
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: "#888888" }}
                  >
                    Erreichbarkeit
                  </p>
                  <div className="space-y-2 text-sm" style={{ color: "#666666" }}>
                    <div className="flex justify-between">
                      <span>Montag – Freitag</span>
                      <span className="font-medium" style={{ color: "#1a1a1a" }}>
                        07:00 – 17:00 Uhr
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samstag</span>
                      <span className="font-medium" style={{ color: "#1a1a1a" }}>
                        Nach Vereinbarung
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid #e5e5e5" }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Gewerbestra%C3%9Fe+3,+99869+G%C3%BCnthersleben-Wechmar&output=embed&z=15"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hornschuh Metalltechnik GmbH - Standort"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
