import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import {
  buildProductSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from "@/lib/schemas";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    keywords: p.keywords.join(", "),
    alternates: { canonical: "https://klvin.ai/products/" + p.slug + "/" },
    openGraph: {
      title: p.title,
      description: p.description,
      images: [{ url: "https://klvin.ai" + p.image, width: 1200, height: 630 }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();

  const ld = [
    buildProductSchema(p),
    ...(p.faqs.length > 0 ? [buildFaqSchema(p.faqs)] : []),
    buildBreadcrumbSchema([
      { name: "Home", url: "https://klvin.ai/" },
      { name: "Products", url: "https://klvin.ai/products/" },
      { name: p.device, url: "https://klvin.ai/products/" + p.slug + "/" },
    ]),
  ];

  return (
    <>
      <JsonLd data={ld} />
      <article className="max-w-4xl mx-auto px-6 py-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-klvin-muted mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-klvin-blue transition-colors">Home</Link>
          <span aria-hidden="true"> › </span>
          <Link href="/products" className="hover:text-klvin-blue transition-colors">Products</Link>
          <span aria-hidden="true"> › </span>
          <span className="text-white">{p.device}</span>
        </nav>

        <header>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
            {p.h1}
          </h1>
          <p className="mt-4 text-lg text-klvin-muted leading-relaxed">{p.sub}</p>
          <Link
            href={p.cta.href}
            className="mt-6 inline-block bg-klvin-orange text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            {p.cta.label}
          </Link>
        </header>

        {/* What it does */}
        <section className="mt-16">
          <h2 className="font-heading text-2xl font-semibold text-white">What it does</h2>
          <p className="mt-3 text-white/80 leading-relaxed">{p.positioning}</p>
        </section>

        {/* Specs */}
        <section className="mt-12">
          <h2 className="font-heading text-2xl font-semibold text-white">Specifications</h2>
          <dl className="mt-4 divide-y divide-klvin-border">
            {p.specs.map((s) => (
              <div key={s.label} className="py-3 grid grid-cols-2 gap-4">
                <dt className="font-medium text-klvin-blue">{s.label}</dt>
                <dd className="text-white/80">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Applications */}
        <section className="mt-12">
          <h2 className="font-heading text-2xl font-semibold text-white">Where it is deployed</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {p.applications.map((a) => (
              <li key={a} className="flex items-center gap-2 text-sm text-white/80">
                <span
                  className="w-2 h-2 bg-klvin-blue rounded-full flex-shrink-0"
                  aria-hidden="true"
                />
                {a}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQs */}
        <section className="mt-12">
          <h2 className="font-heading text-2xl font-semibold text-white">Frequently asked</h2>
          <div className="mt-4 space-y-3">
            {p.faqs.map((f) => (
              <details
                key={f.q}
                className="border border-klvin-border bg-klvin-charcoal rounded-lg p-4 group"
              >
                <summary className="font-medium cursor-pointer list-none flex justify-between items-center text-white">
                  {f.q}
                  <span className="text-klvin-blue ml-4 flex-shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-klvin-muted text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA block */}
        <div className="mt-16 bg-klvin-charcoal border border-klvin-border rounded-2xl p-8 text-center">
          <h2 className="font-heading text-2xl font-semibold text-white">
            Ready to try {p.device}?
          </h2>
          <p className="mt-2 text-klvin-muted">Free pilot. On your equipment. No commitment.</p>
          <Link
            href={p.cta.href}
            className="mt-6 inline-block bg-klvin-orange text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            {p.cta.label}
          </Link>
        </div>
      </article>
    </>
  );
}
