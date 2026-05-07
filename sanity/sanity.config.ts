import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import post from "./schemaTypes/post";
import caseStudy from "./schemaTypes/caseStudy";

export default defineConfig({
  name: "default",
  title: "KLVIN Website",
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [post, caseStudy],
  },
});
