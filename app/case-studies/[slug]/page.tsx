import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schemas";

// Static slugs until Sanity is seeded
const SLUGS = ["mpl-steel", "sukraft"];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

const CASES: Record<string, {
  title: string; description: string; customer: string; sector: string;
  h1: string; sub: string; challenge: string; approach: string;
  results: Array<{ metric: string; value: string; unit?: string }>;
  quote: { text: string; author: string; role: string };
  publishedAt: string;
}> = {
  "mpl-steel": {
    title: "MPL Steel: −62% Unplanned Downtime | KLVIN Case Study",
    description:
      "How KLVIN reduced unplanned motor downtime by 62% across 79 assets at MPL Steel in 5.4 months, with a 5.4-month payback period.",
    customer: "MPL Steel",
    sector: "Steel manufacturing",
    h1: "−62% unplanned downtime. 79 motors. 5.4 months.",
    sub: "How KLVIN's S.A.M.v3 transformed predictive maintenance at MPL Steel's rolling mill.",
    challenge:
      "MPL Steel was experiencing 3–4 unplanned motor failures per month on its rolling-mill drive line, each causing 4–8 hours of production loss and emergency repair costs. Single-parameter vibration sensors were generating high false-positive rates and missing early-stage bearing faults.",
    approach:
      "KLVIN deployed 79 S.A.M.v3 units across motors ranging from 15 kW spindle drives to 250 kW main drive motors. On-device envelope analysis and FFT ran continuously at 25.6 kHz. SENTINEL's AI model was trained on each motor's run-in baseline before live monitoring began.",
    results: [
      { metric: "Reduction in unplanned downtime", value: "62%", unit: "vs baseline" },
      { metric: "Payback period", value: "5.4", unit: "months" },
      { metric: "Assets monitored", value: "79", unit: "motors" },
      { metric: "False-positive rate", value: "2.3%", unit: "over 6 months" },
    ],
    quote: {
      text: "We used to treat motor failures as acts of God. Now we know about them four weeks in advance.",
      author: "Maintenance Manager",
      role: "MPL Steel",
    },
    publishedAt: "2025-11-15T00:00:00Z",
  },
  "sukraft": {
    title: "Sukraft Paper Mill: 748% ROI in 12 Months | KLVIN",
    description:
      "Sukraft Paper Mill achieved 748% ROI in 12 months after deploying KLVIN S.A.M.v3 on 24 refiner and dryer motors.",
    customer: "Sukraft Paper Mill",
    sector: "Paper manufacturing",
    h1: "748% ROI in 12 months — from 24 motors.",
    sub: "Sukraft Paper Mill's journey from reactive firefighting to AI-powered predictive maintenance.",
    challenge:
      "Sukraft's paper refiner and dryer-section motors were being replaced reactively after failure, with each motor replacement taking the line down for 12–18 hours. The mill had no visibility into motor health between quarterly inspections.",
    approach:
      "24 S.A.M.v3 units were installed across refiner drives, dryer-section motors, and vacuum pump motors. SENTINEL's cloud models generated RUL predictions, allowing maintenance to be scheduled during planned weekend shutdowns.",
    results: [
      { metric: "Return on investment", value: "748%", unit: "12-month period" },
      { metric: "Unplanned shutdowns avoided", value: "11", unit: "in 12 months" },
      { metric: "Assets monitored", value: "24", unit: "motors" },
      { metric: "Average advance warning", value: "3.5", unit: "weeks" },
    ],
    quote: {
      text: "The system paid for itself in the first two months. Everything after that is pure savings.",
      author: "Plant Director",
      role: "Sukraft Paper Mill",
    },
    publishedAt: "2025-12-01T00:00:00Z",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) return {};
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: "https://klvin.ai/case-studies/" + slug + "/" },
    openGraph: {
      title: c.title,
      description: c.description,
      url: "https://klvin.ai/case-studies/" + slug + "/",
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) notFound();

  const ld = [
    buildArticleSchema({
      headline: c.h1,
      image: "/brand/klvin-og.jpg",
      datePublished: c.publishedAt,
      url: "/case-studies/" + slug + "/",
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: "https://klvin.ai/" },
      { name: "Case Studies", url: "https://klvin.ai/case-studies/" },
      { name: c.customer, url: "https://klvin.ai/case-studies/" + slug + "/" },
    ]),
  ];

  return (
    <>
      <JsonLd data={ld} />
      <article className="max-w-3xl mx-auto px-6 py-20">
        <nav className="text-sm text-klvin-muted mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-klvin-blue transition-colors">Home</Link>
          <span aria-hidden="true"> › </span>
          <Link href="/case-studies" className="hover:text-klvin-blue transition-colors">Case Studies</Link>
          <span aria-hidden="true"> › </span>
          <span className="text-white">{c.customer}</span>
        </nav>

        <header>
          <span className="text-xs text-klvin-blue font-medium uppercase tracking-wide">{c.sector}</span>
          <h1 className="font-heading text-4xl font-bold text-white mt-2 leading-tight">{c.h1}</h1>
          <p className="mt-4 text-klvin-muted text-lg leading-relaxed">{c.sub}</p>
        </header>

        {/* Results grid */}
        <section className="mt-12">
          <h2 className="font-heading text-2xl font-semibold text-white">Results</h2>
          <ul className="mt-6 grid grid-cols-2 gap-4">
            {c.results.map((r) => (
              <li key={r.metric} className="bg-klvin-charcoal border border-klvin-border rounded-xl p-5">
                <span className="text-3xl font-bold text-klvin-orange font-heading">{r.value}</span>
                {r.unit && <span className="text-klvin-muted text-sm ml-2">{r.unit}</span>}
                <p className="text-white/80 text-sm mt-1">{r.metric}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-semibold text-white">Challenge</h2>
          <p className="mt-3 text-white/80 leading-relaxed">{c.challenge}</p>
        </section>

        <section className="mt-8">
          <h2 className="font-heading text-2xl font-semibold text-white">Our approach</h2>
          <p className="mt-3 text-white/80 leading-relaxed">{c.approach}</p>
        </section>

        {/* Quote */}
        <blockquote className="mt-12 border-l-4 border-klvin-orange pl-6 py-2">
          <p className="text-white/90 text-lg italic leading-relaxed">&ldquo;{c.quote.text}&rdquo;</p>
          <footer className="mt-3 text-klvin-muted text-sm">
            — {c.quote.author}, {c.quote.role}
          </footer>
        </blockquote>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="bg-klvin-orange text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Get results like this
          </Link>
        </div>
      </article>
    </>
  );
}
