import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schemas";
import { hubs } from "@/data/hubs";

export function generateStaticParams() {
  return hubs.map((h) => ({ hub: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hub: string }>;
}): Promise<Metadata> {
  const { hub } = await params;
  const h = hubs.find((x) => x.slug === hub);
  if (!h) return {};
  return {
    title: h.h1 + " | KLVIN",
    description: h.description,
    alternates: { canonical: "https://klvin.ai/manufacturing-intelligence/" + hub + "/" },
    openGraph: {
      title: h.h1 + " | KLVIN",
      description: h.description,
      url: "https://klvin.ai/manufacturing-intelligence/" + hub + "/",
      type: "website",
    },
  };
}

export default async function HubPage({
  params,
}: {
  params: Promise<{ hub: string }>;
}) {
  const { hub } = await params;
  const h = hubs.find((x) => x.slug === hub);
  if (!h) notFound();

  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Industrial AI Monitoring — " + h.name,
      provider: { "@type": "Organization", name: "KLVIN Technology Labs" },
      areaServed: { "@type": "Place", name: h.name + ", " + h.region },
      description: h.description,
    },
    buildBreadcrumbSchema([
      { name: "Home", url: "https://klvin.ai/" },
      { name: "Manufacturing Intelligence", url: "https://klvin.ai/manufacturing-intelligence/" },
      { name: h.name, url: "https://klvin.ai/manufacturing-intelligence/" + hub + "/" },
    ]),
  ];

  return (
    <>
      <JsonLd data={ld} />
      <article className="max-w-3xl mx-auto px-6 py-20">
        <nav className="text-sm text-klvin-muted mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-klvin-blue transition-colors">Home</Link>
          <span aria-hidden="true"> › </span>
          <span className="text-white">Manufacturing Intelligence</span>
          <span aria-hidden="true"> › </span>
          <span className="text-white">{h.name}</span>
        </nav>

        <header>
          <span className="text-xs text-klvin-blue font-medium uppercase tracking-wide">{h.region}</span>
          <h1 className="font-heading text-4xl font-bold text-white mt-2 leading-tight">{h.h1}</h1>
          <p className="mt-4 text-klvin-muted text-lg leading-relaxed">{h.description}</p>
        </header>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-semibold text-white">Key industries</h2>
          <ul className="mt-4 space-y-2">
            {h.industries.map((ind) => (
              <li key={ind} className="flex items-center gap-2 text-white/80">
                <span className="w-2 h-2 bg-klvin-blue rounded-full flex-shrink-0" aria-hidden="true" />
                {ind}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-2xl font-semibold text-white">Machinery monitored</h2>
          <ul className="mt-4 space-y-2">
            {h.keyMachinery.map((m) => (
              <li key={m} className="flex items-center gap-2 text-white/80">
                <span className="w-2 h-2 bg-klvin-orange rounded-full flex-shrink-0" aria-hidden="true" />
                {m}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-2xl font-semibold text-white">About this hub</h2>
          <p className="mt-3 text-white/80 leading-relaxed">{h.body}</p>
        </section>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="bg-klvin-orange text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Book a pilot in {h.name.split(" ")[0]}
          </Link>
        </div>
      </article>
    </>
  );
}
