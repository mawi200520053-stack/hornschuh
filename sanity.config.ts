import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { projectId, dataset } from "./sanity/env";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion: "2025-04-29",
  title: "Hornschuh Metallbau",
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Inhalt")
          .items([
            S.listItem()
              .title("Stellenanzeigen")
              .schemaType("stelle")
              .child(S.documentTypeList("stelle").title("Stellenanzeigen")),
            S.listItem()
              .title("Referenzprojekte")
              .schemaType("projekt")
              .child(S.documentTypeList("projekt").title("Referenzprojekte")),
          ]),
    }),
    visionTool(),
  ],
});
