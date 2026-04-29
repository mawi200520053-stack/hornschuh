import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { PROJEKTE_IDS_QUERY } from "@/sanity/lib/queries";

const BASE_URL = "https://hornschuh.eu";

const STATIC_ROUTES: MetadataRoute.Sitemap = [
  { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
  { url: `${BASE_URL}/leistungen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE_URL}/referenzen`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  { url: `${BASE_URL}/ueber-uns`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/karriere`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  { url: `${BASE_URL}/kontakt`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  { url: `${BASE_URL}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  { url: `${BASE_URL}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projekte: { id: string }[] = await client
    .fetch(PROJEKTE_IDS_QUERY)
    .catch(() => []);

  const projektRoutes: MetadataRoute.Sitemap = projekte.map(({ id }) => ({
    url: `${BASE_URL}/referenzen/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...STATIC_ROUTES, ...projektRoutes];
}
