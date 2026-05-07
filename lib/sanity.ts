import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId:  process.env.SANITY_PROJECT_ID!,
  dataset:    process.env.SANITY_DATASET ?? "production",
  apiVersion: "2026-05-07",
  useCdn:     false,   // always fresh at Next.js build time
});

export type SanityPost = {
  title: string; slug: string; description: string;
  publishedAt: string; author: string; heroUrl: string;
  body?: unknown;
  faqs?: Array<{ q: string; a: string }>;
  relatedProduct?: string; keywords?: string[];
};

export type SanityCaseStudy = {
  title: string; slug: string; description: string;
  customer: string; sector: string; hub: string;
  h1: string; sub: string; heroUrl: string;
  challenge?: string; approach?: string;
  results?: Array<{ metric: string; value: string; unit?: string }>;
  quote?: { text: string; author: string; role: string };
  relatedProduct?: string; publishedAt?: string;
};

export async function getAllPosts(): Promise<SanityPost[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
       title, "slug": slug.current, description, publishedAt, author,
       "heroUrl": hero.asset->url, faqs, relatedProduct, keywords
     }`
  );
}

export async function getPost(slug: string): Promise<SanityPost | null> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
       title, "slug": slug.current, description, publishedAt, author,
       "heroUrl": hero.asset->url, body, faqs, relatedProduct, keywords
     }`,
    { slug }
  );
}

export async function getAllCaseStudies(): Promise<SanityCaseStudy[]> {
  return sanityClient.fetch(
    `*[_type == "caseStudy"] | order(publishedAt desc) {
       title, "slug": slug.current, description, customer, sector, hub,
       h1, sub, "heroUrl": hero.asset->url, results, relatedProduct, publishedAt
     }`
  );
}

export async function getCaseStudy(slug: string): Promise<SanityCaseStudy | null> {
  return sanityClient.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0] {
       title, "slug": slug.current, description, customer, sector, hub,
       h1, sub, "heroUrl": hero.asset->url, challenge, approach,
       results, quote, relatedProduct, publishedAt
     }`,
    { slug }
  );
}
