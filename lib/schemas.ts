import type { Product } from "@/data/products";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KLVIN Technology Labs",
  legalName: "KLVIN Technology Labs Pvt. Ltd.",
  url: "https://klvin.ai",
  logo: "https://klvin.ai/brand/klvin-logo.png",
  foundingDate: "2023",
  founders: [{ "@type": "Person", name: "Vinay Kumar Kolusu" }],
  sameAs: [
    "https://www.linkedin.com/company/klvin-ai",
    "https://twitter.com/klvinai",
    "https://www.crunchbase.com/organization/klvin",
  ],
  contactPoint: [{
    "@type": "ContactPoint",
    contactType: "sales",
    email: "connect@klvin.ai",
    telephone: "+919985814545",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Telugu"],
  }],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "KLVIN Technology Labs",
  image: "https://klvin.ai/brand/klvin-office.jpg",
  "@id": "https://klvin.ai/#hyderabad",
  url: "https://klvin.ai",
  telephone: "+919985814545",
  email: "connect@klvin.ai",
  address: {
    "@type": "PostalAddress",
    streetAddress: "DLabs, I-Venture @ISB, Road No. 6",
    addressLocality: "Gachibowli",
    addressRegion: "Telangana",
    postalCode: "500111",
    addressCountry: "IN",
  },
  areaServed: ["Hyderabad","Pune","Coimbatore","Ludhiana","Chennai","Bhilai"],
};

export function buildProductSchema(p: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.device,
    image: "https://klvin.ai" + p.image,
    description: p.positioning,
    brand: { "@type": "Brand", name: "KLVIN" },
    manufacturer: { "@type": "Organization", name: "KLVIN Technology Labs" },
    offers: {
      "@type": "Offer",
      url: "https://klvin.ai/products/" + p.slug + "/",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };
}

export function buildFaqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticleSchema(opts: {
  headline: string;
  image: string;
  datePublished: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    image: "https://klvin.ai" + opts.image,
    datePublished: opts.datePublished,
    author: { "@type": "Organization", name: "KLVIN Technology Labs" },
    publisher: {
      "@type": "Organization",
      name: "KLVIN",
      logo: { "@type": "ImageObject", url: "https://klvin.ai/brand/klvin-logo.png" },
    },
    mainEntityOfPage: "https://klvin.ai" + opts.url,
  };
}
