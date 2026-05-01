import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";
import { transporter } from "@/lib/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const MAX_FILE_SIZE_MB = 5;
const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Zu viele Anfragen" }, { status: 429 });
  }

  const formData = await req.formData();

  if (formData.get("fax")) return NextResponse.json({ ok: true });

  const stelle = formData.get("stelle") as string;
  const vorname = formData.get("vorname") as string;
  const nachname = formData.get("nachname") as string;
  const geburtsdatum = formData.get("geburtsdatum") as string;
  const telefon = formData.get("telefon") as string;
  const adresse = formData.get("adresse") as string;
  const plz = formData.get("plz") as string;
  const ort = formData.get("ort") as string;
  const email = formData.get("email") as string;
  const nachricht = formData.get("nachricht") as string;
  const datei = formData.get("datei");

  if (!vorname || !nachname || !email || !nachricht || !stelle) {
    return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Ungültige E-Mail-Adresse" }, { status: 400 });
  }

  const attachments: { filename: string; content: Buffer }[] = [];
  if (datei !== null && datei instanceof File && datei.size > 0) {
    if (datei.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      return NextResponse.json(
        { error: "Datei zu groß. Maximal 5 MB erlaubt." },
        { status: 413 }
      );
    }
    if (!ALLOWED_MIME_TYPES.includes(datei.type)) {
      return NextResponse.json(
        { error: "Dateityp nicht erlaubt. Bitte PDF oder Word-Dokument hochladen." },
        { status: 400 }
      );
    }
    const ext = datei.name.slice(datei.name.lastIndexOf(".")).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return NextResponse.json(
        { error: "Dateityp nicht erlaubt. Bitte PDF oder Word-Dokument hochladen." },
        { status: 400 }
      );
    }
    const buffer = Buffer.from(await datei.arrayBuffer());
    attachments.push({ filename: datei.name, content: buffer });
  }

  try {
    await transporter.sendMail({
      from: `"Hornschuh Karriere" <${process.env.SMTP_USER}>`,
      to: "info@hornschuh.eu",
      replyTo: email,
      subject: `Bewerbung: ${stelle} – ${vorname} ${nachname}`,
      attachments,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;color:#1a1a1a">
          <div style="background:#255aa0;padding:24px 32px;border-radius:8px 8px 0 0">
            <h1 style="color:#fff;margin:0;font-size:20px">Neue Stellenbewerbung</h1>
            <p style="color:rgba(255,255,255,0.8);margin:6px 0 0;font-size:14px">${stelle}</p>
          </div>
          <div style="padding:32px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#666;width:140px">Name</td><td style="padding:8px 0;font-weight:bold">${vorname} ${nachname}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Geburtsdatum</td><td style="padding:8px 0">${geburtsdatum}</td></tr>
              <tr><td style="padding:8px 0;color:#666">E-Mail</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#255aa0">${email}</a></td></tr>
              ${telefon ? `<tr><td style="padding:8px 0;color:#666">Telefon</td><td style="padding:8px 0">${telefon}</td></tr>` : ""}
              <tr><td style="padding:8px 0;color:#666">Adresse</td><td style="padding:8px 0">${adresse}, ${plz} ${ort}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Stelle</td><td style="padding:8px 0">${stelle}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Anhang</td><td style="padding:8px 0">${attachments[0]?.filename ?? "Kein Anhang"}</td></tr>
            </table>
            <div style="margin-top:24px;padding:20px;background:#f9f9f9;border-radius:6px;border-left:4px solid #255aa0">
              <p style="margin:0 0 8px;font-weight:bold;color:#444">Nachricht</p>
              <p style="margin:0;white-space:pre-wrap;color:#333">${nachricht}</p>
            </div>
            <p style="margin-top:24px;font-size:12px;color:#aaa">Gesendet über das Bewerbungsformular auf hornschuh.eu</p>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("Stellenbewerbung: E-Mail-Versand fehlgeschlagen", err instanceof Error ? err.message : "Unbekannter Fehler");
    return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
