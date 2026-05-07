import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import post from "./schemaTypes/post";
import caseStudy from "./schemaTypes/caseStudy";

export default defineConfig({
  name: "default",
  title: "KLVIN Website",
  // Project ID is a public value (appears in every API URL) — safe to commit.
  // Replace "REPLACE_WITH_PROJECT_ID" after running: pnpx sanity@latest init
  projectId: "REPLACE_WITH_PROJECT_ID",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [post, caseStudy],
  },
});
