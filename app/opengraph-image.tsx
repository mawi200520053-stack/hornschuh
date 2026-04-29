import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const alt = "Hornschuh Metallbau GmbH – Stahl. Bau. Kompetenz.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logoData = await readFile(
    path.join(process.cwd(), "public/hornschuh-logo-160.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          backgroundColor: "#1a1a1a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
        }}
      >
        {/* Logo */}
        <img
          src={logoSrc}
          width={240}
          height={256}
          style={{ objectFit: "contain" }}
        />

        {/* Divider */}
        <div style={{ width: 60, height: 3, backgroundColor: "#255aa0" }} />

        {/* Tagline */}
        <p
          style={{
            color: "#888888",
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Stahl. Bau. Kompetenz.
        </p>
      </div>
    ),
    { ...size }
  );
}
