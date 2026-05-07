import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Industrial AI & IIoT Insights | KLVIN Blog",
  description:
    "Practical guides on predictive maintenance, condition monitoring, cold-chain compliance, fleet telematics, and industrial AI — from KLVIN's engineering team.",
  alternates: { canonical: "https://klvin.ai/blog/" },
  openGraph: {
    title: "Industrial AI & IIoT Insights | KLVIN Blog",
    description:
      "Practical guides on predictive maintenance, condition monitoring, cold-chain compliance, and fleet telematics.",
    url: "https://klvin.ai/blog/",
    type: "website",
  },
};

const PLACEHOLDER_POSTS = [
  {
    slug: "single-parameter-monitoring-blind",
    title: "Why single-parameter vibration monitoring leaves you blind to 40% of faults",
    description: "Single-sensor vibration monitors miss rotor bar faults, winding degradation, and thermal-related bearing failures. Here's what sensor fusion catches.",
    publishedAt: "2026-04-15",
  },
  {
    slug: "cold-chain-gaps-indian-pharma",
    title: "5 cold-chain compliance gaps in Indian pharmaceutical logistics",
    description: "GDP and CDSCO cold-chain requirements are frequently violated during last-mile delivery. THRIVE.v2 data from 200 routes reveals the five most common failure modes.",
    publishedAt: "2026-03-20",
  },
  {
    slug: "sensor-fusion-vs-single-sensor",
    title: "Sensor fusion vs single-sensor monitoring: what the data shows",
    description: "A controlled study across 40 motors over 18 months comparing single-axis vibration, single-parameter temperature, and S.A.M.v3 tri-sensor fusion for fault detection.",
    publishedAt: "2026-02-10",
  },
  {
    slug: "5-stages-manufacturing-intelligence",
    title: "The 5 stages of manufacturing intelligence: where does your plant sit?",
    description: "From reactive breakdown to AI-driven autonomous maintenance — a maturity model for Indian manufacturers looking to move up the curve.",
    publishedAt: "2026-01-05",
  },
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "KLVIN Industrial AI Insights",
  url: "https://klvin.ai/blog/",
  description: "Industrial AI and IIoT insights from KLVIN's engineering team.",
};

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: PLACEHOLDER_POSTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: "https://klvin.ai/blog/" + p.slug + "/",
    name: p.title,
  })),
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={[blogSchema, itemList]} />
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="font-heading text-4xl font-bold text-white">
          Industrial AI & IIoT Insights
        </h1>
        <p className="mt-4 text-klvin-muted max-w-xl">
          Practical guides from KLVIN&apos;s engineering team — on predictive maintenance, cold chains, fleet telematics, and more.
        </p>
        <ul className="mt-12 space-y-8">
          {PLACEHOLDER_POSTS.map((post) => (
            <li key={post.slug} className="border-b border-klvin-border pb-8">
              <time className="text-xs text-klvin-blue font-medium">{post.publishedAt}</time>
              <h2 className="font-heading text-xl font-semibold text-white mt-2 leading-snug">
                {post.title}
              </h2>
              <p className="text-klvin-muted text-sm mt-2 leading-relaxed">{post.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
