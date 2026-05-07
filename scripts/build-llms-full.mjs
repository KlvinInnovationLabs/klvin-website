import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../out");

// Read product data from the compiled Next.js chunk
// We use a direct static approach: parse the products from data/products.ts by reading the file
// and extracting what we need via a simple JSON-like extraction.
// This avoids ts-node / tsx dependency.

const productSlugs = [
  "sam-v3", "thrive-v2", "thrive-plus-v2", "trace-v2", "seal-v1", "ism-v1"
];

// Read each product page's static HTML to extract content
const sections = [];

sections.push("# KLVIN — Full Corpus for LLM Citation\n");
sections.push("Generated: " + new Date().toISOString() + "\n");
sections.push("Source: https://klvin.ai\n");
sections.push("---\n");

sections.push("## Company Overview\n");
sections.push("KLVIN Technology Labs builds purpose-built IoT sensors and AI software for Indian industrial operations.\n");
sections.push("Products: S.A.M.v3 (motor monitoring), THRIVE.v2 (cold chain), THRIVE+.v2 (cinema), TRACE.v2 (fleet), SEAL.v1 (dairy), I.S.M.v1 (emissions).\n");
sections.push("Platform: SENTINEL — industrial AI cloud platform on AWS Mumbai (ap-south-1).\n");
sections.push("Address: DLabs, I-Venture @ISB, Road No. 6, Gachibowli, Hyderabad 500111.\n");
sections.push("Contact: connect@klvin.ai | +91 99858 14545\n");
sections.push("---\n");

sections.push("## Proven Results\n");
sections.push("MPL Steel: -62% unplanned downtime, 79 motors monitored, 5.4-month payback period.\n");
sections.push("Sukraft Paper Mill: 748% ROI in 12 months, 24 motors monitored.\n");
sections.push("---\n");

// Extract FAQ content from each product's static HTML (these are pre-rendered by Next.js)
for (const slug of productSlugs) {
  const htmlPath = path.join(outDir, "products", slug, "index.html");
  if (!fs.existsSync(htmlPath)) {
    console.warn("Skipping " + slug + " — HTML not found at " + htmlPath);
    continue;
  }
  const html = fs.readFileSync(htmlPath, "utf8");

  // Extract H1
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, "").trim() : slug;

  // Extract FAQ questions and answers from details/summary elements
  const faqMatches = [...html.matchAll(/<summary[^>]*>([\s\S]*?)<\/summary>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g)];

  sections.push(`## ${slug.toUpperCase()}\n`);
  sections.push(`${h1}\n`);

  if (faqMatches.length > 0) {
    sections.push("\nFrequently Asked Questions:\n");
    for (const m of faqMatches) {
      // Strip all tags (including the nested +<span>), then trim trailing non-question chars
      const q = m[1].replace(/<[^>]+>/g, "").trim().replace(/\+\s*$/, "").trim();
      const a = m[2].replace(/<[^>]+>/g, "").trim();
      if (q && a && q.endsWith("?")) {
        sections.push(`Q: ${q}`);
        sections.push(`A: ${a}\n`);
      }
    }
  }
  sections.push("---\n");
}

if (!fs.existsSync(outDir)) {
  console.error("build-llms-full.mjs: out/ directory not found — was 'next build' run first?");
  process.exit(1);
}

const content = sections.join("\n");
const outPath = path.join(outDir, "llms-full.txt");
fs.writeFileSync(outPath, content, "utf8");
console.log("wrote " + outPath + " (" + Buffer.byteLength(content) + " bytes)");
