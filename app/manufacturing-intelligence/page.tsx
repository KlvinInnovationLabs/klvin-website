import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { hubs } from "@/data/hubs";

export const metadata: Metadata = {
  title: "Industrial AI for Indian Manufacturing Hubs | KLVIN",
  description:
    "KLVIN deploys predictive maintenance and IIoT monitoring across India's key industrial clusters — Pune auto, Coimbatore pumps, and Ludhiana steel.",
  alternates: { canonical: "https://klvin.ai/manufacturing-intelligence/" },
  openGraph: {
    title: "Industrial AI for Indian Manufacturing Hubs | KLVIN",
    description:
      "Predictive maintenance across Pune, Coimbatore, and Ludhiana industrial clusters.",
    url: "https://klvin.ai/manufacturing-intelligence/",
    type: "website",
  },
};

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: hubs.map((h, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: "https://klvin.ai/manufacturing-intelligence/" + h.slug + "/",
    name: h.name,
  })),
};

export default function ManufacturingIntelligencePage() {
  return (
    <>
      <JsonLd data={itemList} />
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-heading text-4xl font-bold text-white">
          Industrial AI across India's manufacturing clusters
        </h1>
        <p className="mt-4 text-klvin-muted text-lg leading-relaxed max-w-2xl">
          KLVIN deploys in the industrial clusters where Indian manufacturing is concentrated.
          Each hub page covers the machinery, failure modes, and products relevant to that cluster.
        </p>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {hubs.map((h) => (
            <li
              key={h.slug}
              className="border border-klvin-border bg-klvin-charcoal rounded-xl p-6"
            >
              <span className="text-xs text-klvin-blue font-medium uppercase tracking-wide">
                {h.region}
              </span>
              <h2 className="font-heading text-xl font-semibold text-white mt-2">{h.name}</h2>
              <p className="text-klvin-muted text-sm mt-2 leading-relaxed">{h.description}</p>
              <Link
                href={"/manufacturing-intelligence/" + h.slug}
                className="mt-4 inline-block text-klvin-blue text-sm font-medium hover:underline"
              >
                Read more →
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
