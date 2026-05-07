import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Industrial AI Case Studies — ROI Proof | KLVIN",
  description:
    "See how KLVIN cut unplanned downtime by 62% at MPL Steel and delivered 748% ROI at Sukraft Paper Mill. Real results from Indian manufacturers.",
  alternates: { canonical: "https://klvin.ai/case-studies/" },
  openGraph: {
    title: "Industrial AI Case Studies — ROI Proof | KLVIN",
    description:
      "See how KLVIN cut unplanned downtime by 62% at MPL Steel and delivered 748% ROI at Sukraft Paper Mill.",
    url: "https://klvin.ai/case-studies/",
    type: "website",
  },
};

// Placeholder case studies — replace with Sanity data after studio is live
const placeholderCases = [
  {
    slug: "mpl-steel",
    customer: "MPL Steel",
    title: "−62% unplanned downtime across 79 motors in 5.4 months",
    sector: "Steel manufacturing",
    hub: "pune",
    product: "sam-v3",
  },
  {
    slug: "sukraft",
    customer: "Sukraft Paper Mill",
    title: "748% ROI in 12 months with predictive motor maintenance",
    sector: "Paper manufacturing",
    hub: "pune",
    product: "sam-v3",
  },
];

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: placeholderCases.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: "https://klvin.ai/case-studies/" + c.slug + "/",
    name: c.title,
  })),
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={itemList} />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="font-heading text-4xl font-bold text-white">
          Real results from Indian manufacturers
        </h1>
        <p className="mt-4 text-klvin-muted max-w-2xl">
          Every KLVIN deployment includes a free pilot. These are the numbers from the ones that went live.
        </p>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {placeholderCases.map((c) => (
            <li
              key={c.slug}
              className="border border-klvin-border bg-klvin-charcoal rounded-xl p-6"
            >
              <span className="text-xs text-klvin-blue font-medium uppercase tracking-wide">
                {c.sector}
              </span>
              <h2 className="font-heading text-xl font-semibold text-white mt-2">{c.title}</h2>
              <p className="text-klvin-muted text-sm mt-1">{c.customer}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
