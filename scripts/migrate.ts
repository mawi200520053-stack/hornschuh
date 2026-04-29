/**
 * Migrationsskript: Überträgt hardcodierte Daten nach Sanity.
 *
 * Voraussetzungen:
 *   - NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local
 *   - NEXT_PUBLIC_SANITY_DATASET in .env.local
 *   - SANITY_API_WRITE_TOKEN in .env.local (manage.sanity.io → API → Tokens → Editor)
 *
 * Ausführen:
 *   npx tsx scripts/migrate.ts
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2025-04-29",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

// ─── Stellenanzeigen ─────────────────────────────────────────────────────────

const stellen = [
  {
    id: "kalkulator",
    titel: "Kalkulator (m/w/d)",
    datum: "6. Oktober 2025",
    kurztext:
      "Für unsere anspruchsvollen Stahlbauprojekte suchen wir zum nächstmöglichen Zeitpunkt einen motivierten Kalkulator.",
    einleitung:
      "Für unsere anspruchsvollen und abwechslungsreichen Stahlbauprojekte suchen wir zum nächstmöglichen Zeitpunkt einen motivierten Kalkulator (m/w/d).",
    aufgaben: [
      "Erstellung von Kalkulationen für Stahlbauprojekte",
      "Ausarbeitung von Angeboten",
      "Abstimmung der Angebotskalkulation mit internen Fachbereichen und externen Partnern nach Auftragseingang",
      "Begleitung von Bietergesprächen sowie Unterstützung bei Auftragsverhandlungen",
    ],
    profil: [
      "Abgeschlossenes Studium als Bauingenieur (m/w/d) oder Ausbildung als Bautechniker (m/w/d) – gerne auch motivierte Berufseinsteiger",
      "Alternativ: technische Ausbildung mit entsprechender Praxiserfahrung im Stahlbau",
      "Eigeninitiative, Verantwortungsbewusstsein sowie Team- und Kommunikationsfähigkeit",
    ],
    bieten: [
      "Umfassende und strukturierte Einarbeitung",
      "Eine unbefristete Festanstellung",
      "Anspruchsvolle und abwechslungsreiche Projekte im Stahlbau",
      "Flexible Arbeitszeiten mit Option auf Home-Office",
      "Eine attraktive Vergütung",
    ],
  },
  {
    id: "monteur",
    titel: "Stahlbaumonteur (m/w/d)",
    datum: "23. August 2025",
    kurztext:
      "Zur Verstärkung unseres Teams suchen wir ab sofort engagierte Stahlbaumonteure für spannende und abwechslungsreiche Projekte.",
    einleitung:
      "Zur Verstärkung unseres Teams suchen wir ab sofort engagierte Stahlbaumonteure (m/w/d) für spannende und abwechslungsreiche Projekte.",
    aufgaben: [
      "Montage von Stahlhallen inklusive Dach- und Wandkonstruktionen",
      "Aufbau und Montage von Stahlkonstruktionen",
    ],
    profil: [
      "Abgeschlossene Berufsausbildung im handwerklichen Bereich, idealerweise als Metallbauer, Konstruktionsmechaniker oder Dachdecker",
      "Höhentauglichkeit",
      "Zuverlässigkeit, Teamfähigkeit und Einsatzbereitschaft",
    ],
    bieten: [
      "Eine strukturierte und praxisnahe Einarbeitung",
      "Anspruchsvolle und abwechslungsreiche Stahlbauprojekte",
      "Ein gutes, familiäres Betriebsklima mit kurzen Entscheidungswegen",
      "Eine sichere Festanstellung",
      "Eine attraktive Vergütung",
    ],
  },
];

// ─── Projekte ─────────────────────────────────────────────────────────────────

const projekte = [
  {
    id: "neubau-lagerhalle-mit-verbinder-und-carport",
    titel: "Neubau Lagerhalle mit Verbinder und Carport",
    kategorien: ["Neubau"],
    jahr: "2025",
    auftraggeber: "Straub GbR",
    leistungsumfang: "Stahlhallenbau, Dach, Fassade, Türe, Tore, Fenster",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2026/04/Straub-FAV.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2026/04/Straub-FAV.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/Straub-3.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/Straub-4.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/Straub-1-scaled.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/Straub-6.jpg",
    ],
  },
  {
    id: "neubau-produktionshalle-in-ohrdruf",
    titel: "Neubau Produktionshalle in Ohrdruf",
    kategorien: ["Neubau", "Industriebau"],
    jahr: "2024",
    auftraggeber: "IZOBLOK GmbH",
    leistungsumfang: "Stahlbau, Dach, Fassade, Metallbau, Betonfertigteile, PV-Anlage",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2026/04/Izoblok-FAV.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2026/04/Izoblok-FAV.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/Izoblok-3.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/Izoblok-2.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/Izoblok-1.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/Stahlbau.jpg",
    ],
  },
  {
    id: "neubau-logistik-halle-erfurt",
    titel: "Neubau Logistik-Halle mit Vordach und Carport zur Nutzung durch die Deutsche Post in Erfurt",
    kategorien: ["Neubau", "Industriebau"],
    jahr: "2024",
    auftraggeber: "ERFIT 1 GmbH",
    leistungsumfang: "Stahlhallenbau, Türe, Tore, Fenster, Innenausbau, PV-Anlage",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2026/04/Erfit-FAV.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2026/04/Erfit-FAV.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/Erfit-1.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/Erfit-2-scaled.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/Erfit-3-scaled.jpg",
    ],
  },
  {
    id: "neubau-carl-zeiss-jena",
    titel: "Neubau Carl Zeiss Jena",
    kategorien: ["Neubau", "Industriebau"],
    jahr: "2024/2025",
    auftraggeber: "Carl Zeiss Grundstücks GmbH & Co. KG",
    leistungsumfang: "Stahlbau Gebäude 40 und Gebäude 2 (mit Brandschutzbeschichtung)",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2026/04/Carl-Zeiss-Jena-FAV.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2026/04/Carl-Zeiss-Jena-FAV.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/Carl-Zeiss-Jena1.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/Carl-Zeiss-Jena4.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/Carl-Zeiss-Jena8.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/Carl-Zeiss-Jena9.jpg",
    ],
  },
  {
    id: "errichtung-aussichtsturm-stoentzsch",
    titel: "Errichtung Aussichtsturm Stöntzsch",
    kategorien: ["Neubau"],
    jahr: "2024",
    auftraggeber: "LMBV Leipzig",
    leistungsumfang: "Stahl- und Metallbau, Gründung und Fundamente",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2026/04/Aussichtsturm_FAV.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2026/04/Aussichtsturm_FAV.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/Fertigung.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/04/IMG_4848.jpg",
    ],
    video: "http://hornschuh.eu/wp-content/uploads/2026/04/Hornschuh_lmbv_stoentzsch-540p.mp4",
  },
  {
    id: "neubau-produktions-lagerhallen-airleben-gotha",
    titel: "Neubau Produktions- und Lagerhallen Fa. Airleben in Gotha",
    kategorien: ["Neubau", "Industriebau"],
    jahr: "2022/2023",
    auftraggeber: "Bernd Neupert e.K.",
    leistungsumfang: "Stahlhallenbau, Stahlbetonfertigteile, Türe, Tore, Verglasung, Schlosserarbeiten",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2026/01/Airleben-fav.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2026/01/Airleben-fav.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/01/20220901_101702-scaled.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/01/20231011_082441-scaled.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/01/20220901_101305-scaled.jpg",
      "https://hornschuh.eu/wp-content/uploads/2026/01/20220901_103056-scaled.jpg",
    ],
  },
  {
    id: "neubau-produktionsgebaeude-spielart-mechterstaedt",
    titel: "Neubau Produktionsgebäude Fa. Spielart in Mechterstädt",
    kategorien: ["Neubau", "Industriebau"],
    jahr: "2020",
    auftraggeber: "Werner & Schwabe spielart GbR",
    leistungsumfang: "Komplettleistung (Tiefbau, Massivbau, Stahlhalle, Innenausbau, Kran, Haustechnik, Elektroleistungen, Blitzschutz, Außenanlagen)",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2022/03/Neubau-Produktionsgebaeude-Fa.-Spielart-in-Mechterstaedt-1.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2022/03/Neubau-Produktionsgebaeude-Fa.-Spielart-in-Mechterstaedt-1.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/Screenshot_20211202-102526_WhatsApp.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/IMG-20211202-WA0001-Kopie.jpg",
    ],
  },
  {
    id: "neubau-busbahnhof-parkdeck-oberhof",
    titel: "Neubau Busbahnhof mit Parkdeck in Oberhof",
    kategorien: ["Neubau", "Verkehrsbau"],
    jahr: "2020",
    auftraggeber: "Stadt Oberhof",
    leistungsumfang: "Stahlbau, Rohbau (Betonfertigteile)",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2022/03/Neubau-Busbahnhof-mit-Parkdeck-in-Oberhof-1.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2022/03/Neubau-Busbahnhof-mit-Parkdeck-in-Oberhof-1.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/IMG-20211202-WA0006.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/20210722_111637.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/20210722_111719.jpg",
    ],
  },
  {
    id: "erweiterung-lagerhalle-moenchengladbach",
    titel: "Erweiterung Lagerhalle in Mönchengladbach",
    kategorien: ["Industriebau"],
    jahr: "2020",
    auftraggeber: "OETTINGER Brauerei GmbH",
    leistungsumfang: "Stahlbau mit Planung als Komplettleistung",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2022/03/Erweiterung-Lagerhalle-in-Moenchengladbach.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2022/03/Erweiterung-Lagerhalle-in-Moenchengladbach.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/IMG-20211202-WA0017.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/IMG-20211202-WA0018-002.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/IMG-20211202-WA0010.jpg",
    ],
  },
  {
    id: "neubau-palettenlager-oettingen",
    titel: "Neubau Palettenlager in Oettingen",
    kategorien: ["Neubau", "Industriebau"],
    jahr: "2020",
    auftraggeber: "OETTINGER Brauerei GmbH",
    leistungsumfang: "Stahlbau mit Planung als Komplettleistung",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2022/03/Neubau-Palettenlager-in-Oettingen-1.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2022/03/Neubau-Palettenlager-in-Oettingen-1.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/IMG-20211202-WA0008_12.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/IMG-20211202-WA0007.jpg",
    ],
  },
  {
    id: "neubau-lagerhalle-geschwenda",
    titel: "Neubau Lagerhalle in Geschwenda",
    kategorien: ["Neubau", "Industriebau"],
    jahr: "2020",
    auftraggeber: "Brückner Kartonagen GmbH",
    leistungsumfang: "Neubau Stahlhalle inkl. Fertigteile und Verbinder in Massivbauweise",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2022/03/Neubau-Lagerhalle-in-Geschwenda-1.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2022/03/Neubau-Lagerhalle-in-Geschwenda-1.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/brueckner-gschweda-1.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/brueckner-gschweda-2.jpg",
    ],
  },
  {
    id: "neubau-logistik-halle-deutsche-post-ilmenau",
    titel: "Neubau Logistik-Halle zur Nutzung durch die Deutsche Post in Ilmenau",
    kategorien: ["Neubau", "Industriebau"],
    jahr: "2020",
    auftraggeber: "Altberg GmbH",
    leistungsumfang: "Stahl-Leichtbauhalle mit Gründung und Innenausbau",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2022/03/Neubau-Logistik-Halle-zur-Nutzung-durch-die-Deutsche-Post-in-Ilmenau-1.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2022/03/Neubau-Logistik-Halle-zur-Nutzung-durch-die-Deutsche-Post-in-Ilmenau-1.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/DSC_7679-scaled.jpg",
    ],
  },
  {
    id: "neubau-produktionshalle-verwaltung-tambach-dietharz",
    titel: "Neubau Produktionshalle mit Verwaltungsgebäude in Tambach-Dietharz",
    kategorien: ["Neubau", "Industriebau"],
    jahr: "2019",
    auftraggeber: "Jahn GmbH",
    leistungsumfang: "Komplettleistung mit Innenausbau (ohne Tiefbau, Entwässerung, HLS)",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2022/03/Neubau-Produktionshalle-mit-Verwaltungsgebaeude-in-Tambach-Dietharz.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2022/03/Neubau-Produktionshalle-mit-Verwaltungsgebaeude-in-Tambach-Dietharz.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/IMG-20211202-WA0014.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/IMG-20211202-WA0015.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/IMG-20211202-WA0013.jpg",
    ],
  },
  {
    id: "neubau-ahag-autohaus-schleusingen",
    titel: "Neubau AHAG Autohaus Schleusingen",
    kategorien: ["Neubau"],
    jahr: "2019",
    auftraggeber: "Autohaus AHAG",
    leistungsumfang: "Kompletter Stahlhallenanbau mit Ausstellung und Werkstatt",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2022/03/Neubau-AHAG-Autohaus-Schleusingen-1.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2022/03/Neubau-AHAG-Autohaus-Schleusingen-1.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/DSC_7690-scaled.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/DSC_7693-scaled.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/DSC_7692-scaled.jpg",
    ],
  },
  {
    id: "neubau-zob-eisenach",
    titel: "Neubau ZOB Eisenach",
    kategorien: ["Neubau", "Verkehrsbau"],
    jahr: "2017",
    auftraggeber: "Stadtverwaltung Eisenach",
    leistungsumfang: "Komplette Hochbaumaßnahme, Überdachungen",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2022/03/start_ZOB-ESA-scaled.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2022/03/start_ZOB-ESA-scaled.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/ZOB-Eisenach_3.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/ZOB-Eisenach_2.jpg",
    ],
  },
  {
    id: "generalsanierung-schulsporthalle-stadtilm",
    titel: "Generalsanierung Schulsporthalle Stadtilm",
    kategorien: ["Sanierung"],
    jahr: "2016",
    auftraggeber: "Landratsamt Ilm-Kreis",
    leistungsumfang: "Stahl- und Metallbauarbeiten, Fenster, Pfosten-Riegel-Systeme",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2022/03/SporthalleDSC_7676-scaled.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2022/03/SporthalleDSC_7676-scaled.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/SporthalleDSC_7674-scaled.jpg",
      "https://hornschuh.eu/wp-content/uploads/2022/03/SporthalleDSC_7673-scaled.jpg",
    ],
  },
  {
    id: "neubau-rohstofflager-mit-werkstatt",
    titel: "Neubau Rohstofflager mit Werkstatt",
    kategorien: ["Neubau", "Industriebau"],
    jahr: "2016",
    auftraggeber: "Brandt Zwieback GmbH",
    leistungsumfang: "Hallenbau schlüsselfertig (ohne Gründung, Tiefbau, TGA)",
    titelBild: "https://hornschuh.eu/wp-content/uploads/2015/02/DSC_7696-scaled.jpg",
    galerie: [
      "https://hornschuh.eu/wp-content/uploads/2015/02/DSC_7696-scaled.jpg",
      "https://hornschuh.eu/wp-content/uploads/2015/02/DSC_7695-scaled.jpg",
    ],
  },
];

// ─── Hilfsfunktionen ──────────────────────────────────────────────────────────

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomKey(): string {
  return Math.random().toString(36).slice(2, 10);
}

async function retry<T>(fn: () => Promise<T>, retries = 4, delayMs = 2000): Promise<T> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt === retries) throw err;
      console.log(`    Netzwerkfehler, Versuch ${attempt}/${retries} – warte ${delayMs / 1000}s...`);
      await sleep(delayMs * attempt);
    }
  }
  throw new Error("Unreachable");
}

async function uploadImageFromUrl(imageUrl: string): Promise<{ _key: string; _type: string; asset: { _type: string; _ref: string } }> {
  return retry(async () => {
    const res = await fetch(imageUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status} für ${imageUrl}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const filename = imageUrl.split("/").pop() ?? "bild.jpg";
    const asset = await client.assets.upload("image", buffer, { filename });
    return { _key: randomKey(), _type: "image", asset: { _type: "reference", _ref: asset._id } };
  });
}

async function uploadVideoFromUrl(videoUrl: string): Promise<{ _type: string; asset: { _type: string; _ref: string } }> {
  return retry(async () => {
    const res = await fetch(videoUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status} für ${videoUrl}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const filename = videoUrl.split("/").pop() ?? "video.mp4";
    const asset = await client.assets.upload("file", buffer, { filename });
    return { _type: "file", asset: { _type: "reference", _ref: asset._id } };
  });
}

async function isAlreadyMigrated(projektId: string): Promise<boolean> {
  const doc = await client.fetch(`*[_id == $id][0]{ titelBild }`, { id: `projekt-${projektId}` });
  return doc?.titelBild?.asset?._ref != null;
}

// ─── Migration ────────────────────────────────────────────────────────────────

async function migrateStellen() {
  console.log("\n── Stellenanzeigen migrieren ──────────────────────────────");
  for (const stelle of stellen) {
    console.log(`  → ${stelle.titel}`);
    await client.createOrReplace({
      _type: "stelle",
      _id: `stelle-${stelle.id}`,
      id: { _type: "slug", current: stelle.id },
      titel: stelle.titel,
      datum: stelle.datum,
      kurztext: stelle.kurztext,
      einleitung: stelle.einleitung,
      aufgaben: stelle.aufgaben,
      profil: stelle.profil,
      bieten: stelle.bieten,
    });
  }
  console.log(`  ✓ ${stellen.length} Stellenanzeigen migriert`);
}

async function migrateProjekte() {
  console.log("\n── Referenzprojekte migrieren ─────────────────────────────");
  for (let i = 0; i < projekte.length; i++) {
    const p = projekte[i];
    console.log(`  [${i + 1}/${projekte.length}] ${p.titel}`);

    if (await isAlreadyMigrated(p.id)) {
      console.log(`    ↷ Bereits migriert, übersprungen`);
      continue;
    }

    console.log(`    Titelbild hochladen...`);
    const titelBild = await uploadImageFromUrl(p.titelBild);

    console.log(`    Galerie (${p.galerie.length} Bilder) hochladen...`);
    const galerie: ReturnType<typeof uploadImageFromUrl> extends Promise<infer T> ? T[] : never[] = [];
    for (const url of p.galerie) {
      galerie.push(await uploadImageFromUrl(url));
      await sleep(300);
    }

    let video: Awaited<ReturnType<typeof uploadVideoFromUrl>> | undefined;
    if ("video" in p && p.video) {
      console.log(`    Video hochladen...`);
      video = await uploadVideoFromUrl(p.video);
    }

    await client.createOrReplace({
      _type: "projekt",
      _id: `projekt-${p.id}`,
      id: { _type: "slug", current: p.id },
      titel: p.titel,
      kategorien: p.kategorien,
      jahr: p.jahr,
      auftraggeber: p.auftraggeber,
      leistungsumfang: p.leistungsumfang,
      reihenfolge: i,
      titelBild,
      galerie,
      ...(video ? { video } : {}),
    });

    console.log(`    ✓ Fertig`);
    await sleep(500);
  }
  console.log(`  ✓ ${projekte.length} Projekte migriert`);
}

async function main() {
  console.log("Sanity Migration — Hornschuh Metallbau");
  console.log("Project ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  console.log("Dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production");

  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("\n✗ SANITY_API_WRITE_TOKEN fehlt in .env.local");
    console.error("  Token erstellen: manage.sanity.io → API → Tokens → Editor");
    process.exit(1);
  }

  await migrateStellen();
  await migrateProjekte();

  console.log("\n✓ Migration abgeschlossen!\n");
}

main().catch((err) => {
  console.error("\n✗ Migration fehlgeschlagen:", err.message);
  process.exit(1);
});
