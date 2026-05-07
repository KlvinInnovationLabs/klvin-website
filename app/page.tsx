import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, localBusinessSchema } from "@/lib/schemas";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Industrial AI + IoT Intelligence Platform | KLVIN",
  description: "KLVIN deploys purpose-built IoT sensors for motors, cold chains, fleets, and emissions — fed into AI that predicts failures before they happen. Book a demo.",
  alternates: { canonical: "https://klvin.ai/" },
  openGraph: { url: "https://klvin.ai/", type: "website" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KLVIN",
  url: "https://klvin.ai",
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema, localBusinessSchema, websiteSchema]} />

      {/* Hero */}
      <section className="px-6 py-24 bg-klvin-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl font-bold text-white leading-tight">
            Industrial AI that reads your factory floor
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Six purpose-built sensors. One AI platform. Predict failures before they happen —
            across motors, cold chains, fleets, emissions, dairy, and cinema environments.
          </p>
          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-klvin-orange text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Book a demo
            </Link>
            <Link
              href="/case-studies"
              className="border border-klvin-border text-white px-8 py-3 rounded-lg hover:border-klvin-blue transition-colors"
            >
              See results
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-klvin-border py-6 px-6 bg-klvin-charcoal">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-center text-sm text-klvin-muted font-medium">
          <span>748% ROI — Sukraft Paper Mill</span>
          <span>−62% unplanned downtime — MPL Steel</span>
          <span>79 assets monitored simultaneously</span>
          <span>5.4-month payback period</span>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-20 px-6 bg-klvin-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-heading text-3xl font-semibold text-white">
            One platform. Six purpose-built sensors.
          </h2>
          <p className="text-center text-klvin-muted mt-3">
            SENTINEL is the AI brain. These are the edges that feed it.
          </p>
          <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <li
                key={p.slug}
                className="border border-klvin-border bg-klvin-charcoal rounded-xl p-6 hover:border-klvin-blue transition-colors"
              >
                <Link href={"/products/" + p.slug}>
                  <h3 className="font-heading font-semibold text-white">{p.device}</h3>
                  <p className="text-klvin-muted mt-2 text-sm leading-relaxed">{p.sub}</p>
                  <span className="mt-4 inline-block text-klvin-blue text-sm font-medium">
                    Learn more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
