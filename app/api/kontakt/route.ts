import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";
import { transporter } from "@/lib/mailer";

const SUBJECT_LABELS: Record<string, string> = {
  planung: "Planung & Beratung",
  fertigung: "Fertigung & Produktion",
  montage: "Montageservice",
  angebot: "Angebotsanfrage",
  sonstiges: "Sonstiges",
};

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Zu viele Anfragen" }, { status: 429 });
  }

  const { name, company, email, phone, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"Hornschuh Website" <${process.env.SMTP_USER}>`,
      to: "info@hornschuh.eu",
      replyTo: email,
      subject: `Neue Anfrage: ${SUBJECT_LABELS[subject] ?? subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;color:#1a1a1a">
          <div style="background:#255aa0;padding:24px 32px;border-radius:8px 8px 0 0">
            <h1 style="color:#fff;margin:0;font-size:20px">Neue Kontaktanfrage</h1>
          </div>
          <div style="padding:32px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#666;width:140px">Name</td><td style="padding:8px 0;font-weight:bold">${name}</td></tr>
              ${company ? `<tr><td style="padding:8px 0;color:#666">Unternehmen</td><td style="padding:8px 0">${company}</td></tr>` : ""}
              <tr><td style="padding:8px 0;color:#666">E-Mail</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#255aa0">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding:8px 0;color:#666">Telefon</td><td style="padding:8px 0">${phone}</td></tr>` : ""}
              <tr><td style="padding:8px 0;color:#666">Betreff</td><td style="padding:8px 0">${SUBJECT_LABELS[subject] ?? subject}</td></tr>
            </table>
            <div style="margin-top:24px;padding:20px;background:#f9f9f9;border-radius:6px;border-left:4px solid #255aa0">
              <p style="margin:0;white-space:pre-wrap;color:#333">${message}</p>
            </div>
            <p style="margin-top:24px;font-size:12px;color:#aaa">Gesendet über das Kontaktformular auf hornschuh.eu</p>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("SMTP error (kontakt):", err);
    return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
