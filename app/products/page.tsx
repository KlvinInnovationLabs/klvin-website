import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Industrial IoT Sensors & Edge Devices | KLVIN Products",
  description:
    "Six purpose-built edge devices: motor monitoring, cold chain, cinema HVAC, fleet telematics, dairy tamper detection, and stack emissions — all on SENTINEL.",
  alternates: { canonical: "https://klvin.ai/products/" },
  openGraph: {
    title: "Industrial IoT Sensors & Edge Devices | KLVIN Products",
    description:
      "Six purpose-built edge devices: motor monitoring, cold chain, cinema HVAC, fleet telematics, dairy tamper detection, and stack emissions — all on SENTINEL.",
    url: "https://klvin.ai/products/",
    type: "website",
  },
};

export default function ProductsPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: "https://klvin.ai/products/" + p.slug + "/",
      name: p.device,
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="font-heading text-4xl font-bold text-white">
          One platform. Six purpose-built sensors.
        </h1>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <li
              key={p.slug}
              className="border border-klvin-border bg-klvin-charcoal rounded-xl p-6 hover:border-klvin-blue transition-colors"
            >
              <Link href={"/products/" + p.slug}>
                <h2 className="font-heading text-xl font-semibold text-white">{p.device}</h2>
                <p className="text-klvin-muted mt-2 text-sm leading-relaxed">{p.sub}</p>
                <span className="mt-4 inline-block text-klvin-blue text-sm font-medium">
                  {p.cta.label} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
