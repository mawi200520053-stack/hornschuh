import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hornschuh Metallbau GmbH – Stahl. Bau. Kompetenz.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          src="https://hornschuh.eu/wp-content/uploads/2022/05/Hornschuh-Logo-Retina-160.png"
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
