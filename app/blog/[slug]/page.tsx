import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schemas";

const POSTS: Record<string, {
  title: string; description: string; publishedAt: string; body: string;
}> = {
  "single-parameter-monitoring-blind": {
    title: "Why single-parameter vibration monitoring leaves you blind to 40% of faults | KLVIN",
    description: "Single-sensor vibration monitors miss rotor bar faults, winding degradation, and thermal-related bearing failures. Sensor fusion catches them all.",
    publishedAt: "2026-04-15T00:00:00Z",
    body: "Most industrial vibration sensors measure a single axis at 1–5 kHz. This catches imbalance and gross mechanical looseness — but misses rotor bar faults (detectable via current signature), winding insulation degradation (detectable via temperature rise rate), and early-stage bearing defects (detectable via high-frequency envelope analysis above 10 kHz). KLVIN S.A.M.v3 fuses tri-axis vibration at 25.6 kHz, temperature, and current to give the SENTINEL AI platform the multi-dimensional signal it needs to distinguish between these failure modes with >97% accuracy.",
  },
  "cold-chain-gaps-indian-pharma": {
    title: "5 cold-chain compliance gaps in Indian pharmaceutical logistics | KLVIN",
    description: "GDP and CDSCO cold-chain requirements are frequently violated during last-mile delivery. THRIVE.v2 data reveals the five most common failure modes.",
    publishedAt: "2026-03-20T00:00:00Z",
    body: "Analysis of temperature logs from 200 pharmaceutical delivery routes using THRIVE.v2 reveals five recurring compliance gaps: (1) Pre-cooling failures — reefer compartments not cooled to setpoint before loading; (2) Door-open exceedances — average 4.2 minutes per delivery stop in ambient temperatures above 35°C; (3) Last-mile handoff gaps — paper-based temperature records at the receiving pharmacy; (4) Generator-failure blind spots — reefer units running on generator power during loading dock waiting periods; (5) Route planning that does not account for ambient temperature peaks between 1 PM and 4 PM. THRIVE.v2 provides 90-second breach alerts and a full chain-of-custody audit trail for CDSCO GDP compliance.",
  },
  "sensor-fusion-vs-single-sensor": {
    title: "Sensor fusion vs single-sensor monitoring: what the data shows | KLVIN",
    description: "A controlled study across 40 motors over 18 months comparing single-axis vibration, temperature, and S.A.M.v3 tri-sensor fusion for fault detection.",
    publishedAt: "2026-02-10T00:00:00Z",
    body: "Over 18 months, 40 motors in a paper mill were monitored simultaneously with a single-axis 4–20 mA vibration transmitter, a PT100 temperature sensor, and KLVIN S.A.M.v3. Of the 23 fault events recorded, single-axis vibration detected 14 (61%), temperature alone detected 9 (39%), and S.A.M.v3's tri-sensor fusion detected 22 (96%). The one missed fault was a low-frequency (2.3 Hz) mechanical resonance that occurred only under specific load conditions. False-positive rates: vibration only 18%, temperature only 7%, S.A.M.v3 2.3%. The data supports sensor fusion as the dominant approach for comprehensive fault coverage.",
  },
  "5-stages-manufacturing-intelligence": {
    title: "The 5 stages of manufacturing intelligence: where does your plant sit? | KLVIN",
    description: "A maturity model for Indian manufacturers — from reactive breakdown maintenance to AI-driven autonomous maintenance.",
    publishedAt: "2026-01-05T00:00:00Z",
    body: "Stage 1 — Reactive: equipment runs until failure. Stage 2 — Preventive: fixed-interval maintenance regardless of condition. Stage 3 — Condition-based: manual inspections triggered by observable symptoms. Stage 4 — Predictive: continuous sensor monitoring with AI-generated failure predictions and RUL estimates. Stage 5 — Prescriptive/Autonomous: the system not only predicts failures but automatically schedules maintenance, pre-orders parts, and adjusts production schedules. Most Indian manufacturers operate at Stage 1 or 2. KLVIN's typical deployment moves customers from Stage 1–2 to Stage 4 in 6–8 weeks.",
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: "https://klvin.ai/blog/" + slug + "/" },
    openGraph: {
      title: post.title,
      description: post.description,
      url: "https://klvin.ai/blog/" + slug + "/",
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  const ld = [
    buildArticleSchema({
      headline: post.title.split(" | ")[0],
      image: "/brand/klvin-og.jpg",
      datePublished: post.publishedAt,
      url: "/blog/" + slug + "/",
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: "https://klvin.ai/" },
      { name: "Blog", url: "https://klvin.ai/blog/" },
      { name: post.title.split(" | ")[0], url: "https://klvin.ai/blog/" + slug + "/" },
    ]),
  ];

  return (
    <>
      <JsonLd data={ld} />
      <article className="max-w-3xl mx-auto px-6 py-20">
        <nav className="text-sm text-klvin-muted mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-klvin-blue transition-colors">Home</Link>
          <span aria-hidden="true"> › </span>
          <Link href="/blog" className="hover:text-klvin-blue transition-colors">Blog</Link>
          <span aria-hidden="true"> › </span>
          <span className="text-white">{post.title.split(" | ")[0].slice(0, 50)}…</span>
        </nav>

        <header>
          <time className="text-xs text-klvin-blue font-medium">
            {post.publishedAt.slice(0, 10)}
          </time>
          <h1 className="font-heading text-4xl font-bold text-white mt-2 leading-tight">
            {post.title.split(" | ")[0]}
          </h1>
          <p className="mt-4 text-klvin-muted text-lg leading-relaxed">{post.description}</p>
        </header>

        <div className="mt-12 prose prose-invert max-w-none">
          {post.body.split(". ").reduce((acc: string[], sentence, i, arr) => {
            // Group into ~3-sentence paragraphs
            if (i % 3 === 0) acc.push(arr.slice(i, i + 3).join(". ") + (i + 3 <= arr.length ? "." : ""));
            return acc;
          }, []).map((para, i) => (
            <p key={i} className="text-white/80 leading-relaxed mb-4">{para}</p>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="bg-klvin-orange text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Talk to an engineer
          </Link>
        </div>
      </article>
    </>
  );
}
