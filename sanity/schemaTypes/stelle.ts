import { defineField, defineType } from "sanity";

export const stelle = defineType({
  name: "stelle",
  title: "Stellenanzeige",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID (Slug)",
      type: "slug",
      description: "Wird automatisch aus dem Titel generiert",
      options: { source: "titel", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "titel",
      title: "Stellentitel",
      type: "string",
      description: 'z.B. "Kalkulator (m/w/d)"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: "datum",
      title: "Veröffentlichungsdatum",
      type: "string",
      description: 'z.B. "6. Oktober 2025"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: "kurztext",
      title: "Kurztext (Kartenvorschau)",
      type: "text",
      rows: 3,
      validation: (R) => R.required().max(300),
    }),
    defineField({
      name: "einleitung",
      title: "Einleitung",
      type: "text",
      rows: 4,
      validation: (R) => R.required(),
    }),
    defineField({
      name: "aufgaben",
      title: "Ihre Aufgaben",
      type: "array",
      of: [{ type: "string" }],
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: "profil",
      title: "Ihr Profil",
      type: "array",
      of: [{ type: "string" }],
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: "bieten",
      title: "Wir bieten",
      type: "array",
      of: [{ type: "string" }],
      validation: (R) => R.required().min(1),
    }),
  ],
  preview: {
    select: { title: "titel", subtitle: "datum" },
  },
});
