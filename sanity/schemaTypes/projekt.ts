import { defineField, defineType } from "sanity";

export const projekt = defineType({
  name: "projekt",
  title: "Referenzprojekt",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID (Slug)",
      type: "slug",
      description: "Wird automatisch aus dem Titel generiert und als URL verwendet",
      options: { source: "titel", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "titel",
      title: "Projekttitel",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "kategorien",
      title: "Kategorien",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Neubau", value: "Neubau" },
          { title: "Industriebau", value: "Industriebau" },
          { title: "Sanierung", value: "Sanierung" },
          { title: "Verkehrsbau", value: "Verkehrsbau" },
        ],
      },
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: "jahr",
      title: "Baujahr",
      type: "string",
      description: 'z.B. "2024" oder "2024/2025"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: "auftraggeber",
      title: "Auftraggeber",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "leistungsumfang",
      title: "Leistungsumfang",
      type: "text",
      rows: 3,
      validation: (R) => R.required(),
    }),
    defineField({
      name: "titelBild",
      title: "Titelbild",
      type: "image",
      description: "Hauptbild für die Karte und den Detailseiten-Hero",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "galerie",
      title: "Bildergalerie",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: "video",
      title: "Projektvideo (optional)",
      type: "file",
      description: "MP4-Datei hochladen oder leer lassen",
      options: { accept: "video/mp4" },
    }),
    defineField({
      name: "reihenfolge",
      title: "Sortierreihenfolge",
      type: "number",
      description: "Niedrigere Zahlen erscheinen zuerst (Standard: 0)",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Reihenfolge (aufsteigend)",
      name: "reihenfolgeAsc",
      by: [
        { field: "reihenfolge", direction: "asc" },
        { field: "_createdAt", direction: "desc" },
      ],
    },
    {
      title: "Jahr (neueste zuerst)",
      name: "jahrDesc",
      by: [{ field: "jahr", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "titel", subtitle: "auftraggeber", media: "titelBild" },
  },
});
