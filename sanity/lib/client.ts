import { createClient } from "next-sanity";
import { projectId, dataset } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-04-29",
  useCdn: true,
});
