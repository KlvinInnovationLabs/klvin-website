import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Team — Founders & Leadership | KLVIN",
  description:
    "KLVIN was founded by Vinay Kumar Kolusu. Learn about the team building India's industrial AI platform.",
  alternates: { canonical: "https://klvin.ai/team/" },
  openGraph: {
    title: "Team — Founders & Leadership | KLVIN",
    description: "Meet the team building India's industrial AI platform.",
    url: "https://klvin.ai/team/",
    type: "website",
  },
};

const team = [
  {
    name: "Vinay Kumar Kolusu",
    role: "Founder & CEO",
    bio: "Vinay founded KLVIN to bring industrial AI to Indian manufacturers. He leads product strategy, customer deployments, and growth.",
    linkedin: "https://www.linkedin.com/in/vinaykolusu",
  },
];

const personSchemas = team.map((member) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: member.name,
  jobTitle: member.role,
  worksFor: { "@type": "Organization", name: "KLVIN Technology Labs" },
  sameAs: [member.linkedin],
}));

export default function TeamPage() {
  return (
    <>
      <JsonLd data={personSchemas} />
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-heading text-4xl font-bold text-white">Our team</h1>
        <p className="mt-4 text-klvin-muted max-w-xl">
          A focused team building industrial AI that actually works on Indian factory floors.
        </p>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member) => (
            <li
              key={member.name}
              className="border border-klvin-border bg-klvin-charcoal rounded-xl p-6"
            >
              <h2 className="font-heading text-xl font-semibold text-white">{member.name}</h2>
              <p className="text-klvin-blue text-sm font-medium mt-1">{member.role}</p>
              <p className="text-klvin-muted text-sm mt-3 leading-relaxed">{member.bio}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-klvin-blue text-sm font-medium hover:underline"
              >
                LinkedIn →
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
