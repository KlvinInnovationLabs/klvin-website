import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { glossary } from "@/data/glossary";

export const metadata: Metadata = {
  title: "Industrial IoT & Predictive Maintenance Glossary | KLVIN",
  description:
    "20 key IIoT and predictive maintenance terms explained — vibration analysis, RUL, ISO 10816, MCSA, OEE, digital twin, FFT, and more.",
  alternates: { canonical: "https://klvin.ai/glossary/" },
  openGraph: {
    title: "Industrial IoT & Predictive Maintenance Glossary | KLVIN",
    description: "20 key IIoT and predictive maintenance terms explained.",
    url: "https://klvin.ai/glossary/",
    type: "website",
  },
};

const definedTermSet = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "KLVIN Industrial IoT Glossary",
  url: "https://klvin.ai/glossary/",
  hasDefinedTerm: glossary.map((entry) => ({
    "@type": "DefinedTerm",
    "@id": "https://klvin.ai/glossary/#" + entry.id,
    name: entry.term,
    description: entry.definition,
    inDefinedTermSet: "https://klvin.ai/glossary/",
  })),
};

export default function GlossaryPage() {
  return (
    <>
      <JsonLd data={definedTermSet} />
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="font-heading text-4xl font-bold text-white">
          Industrial IoT & Predictive Maintenance Glossary
        </h1>
        <p className="mt-4 text-klvin-muted">
          20 key terms every plant engineer and maintenance manager should know.
        </p>
        <dl className="mt-12 space-y-8">
          {glossary.map((entry) => (
            <div key={entry.id} id={entry.id}>
              <dt className="font-heading text-lg font-semibold text-white">{entry.term}</dt>
              <dd className="mt-2 text-white/80 leading-relaxed">{entry.definition}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
