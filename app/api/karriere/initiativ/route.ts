import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";
import { transporter } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Zu viele Anfragen" }, { status: 429 });
  }

  const formData = await req.formData();

  const vorname = formData.get("vorname") as string;
  const nachname = formData.get("nachname") as string;
  const geburtsdatum = formData.get("geburtsdatum") as string;
  const telefon = formData.get("telefon") as string;
  const adresse = formData.get("adresse") as string;
  const plz = formData.get("plz") as string;
  const ort = formData.get("ort") as string;
  const email = formData.get("email") as string;
  const bereich = formData.get("bereich") as string;
  const nachricht = formData.get("nachricht") as string;
  const datei = formData.get("datei") as File | null;

  if (!vorname || !nachname || !email || !nachricht) {
    return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
  }

  const attachments: { filename: string; content: Buffer }[] = [];
  if (datei && datei.size > 0) {
    const buffer = Buffer.from(await datei.arrayBuffer());
    attachments.push({ filename: datei.name, content: buffer });
  }

  try {
    await transporter.sendMail({
      from: `"Hornschuh Karriere" <${process.env.SMTP_USER}>`,
      to: "info@hornschuh.eu",
      replyTo: email,
      subject: `Initiativbewerbung: ${vorname} ${nachname}${bereich ? ` – ${bereich}` : ""}`,
      attachments,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;color:#1a1a1a">
          <div style="background:#1a1a1a;padding:24px 32px;border-radius:8px 8px 0 0">
            <h1 style="color:#fff;margin:0;font-size:20px">Neue Initiativbewerbung</h1>
            ${bereich ? `<p style="color:rgba(255,255,255,0.6);margin:6px 0 0;font-size:14px">Gewünschter Bereich: ${bereich}</p>` : ""}
          </div>
          <div style="padding:32px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#666;width:140px">Name</td><td style="padding:8px 0;font-weight:bold">${vorname} ${nachname}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Geburtsdatum</td><td style="padding:8px 0">${geburtsdatum}</td></tr>
              <tr><td style="padding:8px 0;color:#666">E-Mail</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#255aa0">${email}</a></td></tr>
              ${telefon ? `<tr><td style="padding:8px 0;color:#666">Telefon</td><td style="padding:8px 0">${telefon}</td></tr>` : ""}
              <tr><td style="padding:8px 0;color:#666">Adresse</td><td style="padding:8px 0">${adresse}, ${plz} ${ort}</td></tr>
              ${bereich ? `<tr><td style="padding:8px 0;color:#666">Bereich</td><td style="padding:8px 0">${bereich}</td></tr>` : ""}
              <tr><td style="padding:8px 0;color:#666">Anhang</td><td style="padding:8px 0">${datei && datei.size > 0 ? datei.name : "Kein Anhang"}</td></tr>
            </table>
            <div style="margin-top:24px;padding:20px;background:#f9f9f9;border-radius:6px;border-left:4px solid #255aa0">
              <p style="margin:0 0 8px;font-weight:bold;color:#444">Nachricht</p>
              <p style="margin:0;white-space:pre-wrap;color:#333">${nachricht}</p>
            </div>
            <p style="margin-top:24px;font-size:12px;color:#aaa">Gesendet über das Initiativbewerbungsformular auf hornschuh.eu</p>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("SMTP error (initiativ):", err);
    return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
