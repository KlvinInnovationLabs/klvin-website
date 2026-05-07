import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Contact KLVIN — Book a Free Pilot | KLVIN",
  description:
    "Book a free pilot deployment on your equipment. Contact KLVIN at DLabs, I-Venture @ISB, Hyderabad or call +91 99858 14545.",
  alternates: { canonical: "https://klvin.ai/contact/" },
  openGraph: {
    title: "Contact KLVIN — Book a Free Pilot",
    description: "Book a free IoT pilot deployment. DLabs, Hyderabad · +91 99858 14545.",
    url: "https://klvin.ai/contact/",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="font-heading text-4xl font-bold text-white">
          Book a free pilot
        </h1>
        <p className="mt-4 text-klvin-muted text-lg leading-relaxed max-w-xl">
          Every KLVIN engagement starts with a no-cost pilot on your own equipment —
          no commitment, no upfront payment. Tell us about your plant and we&apos;ll design the pilot.
        </p>

        {/* Contact details */}
        <address className="mt-10 not-italic space-y-3 text-white/80">
          <p>
            <span className="text-klvin-blue font-medium">Address: </span>
            DLabs, I-Venture @ISB, Road No. 6, Gachibowli, Hyderabad – 500111
          </p>
          <p>
            <span className="text-klvin-blue font-medium">Phone: </span>
            <a href="tel:+919985814545" className="hover:text-klvin-blue transition-colors">
              +91 99858 14545
            </a>
          </p>
          <p>
            <span className="text-klvin-blue font-medium">Email: </span>
            <a href="mailto:connect@klvin.ai" className="hover:text-klvin-blue transition-colors">
              connect@klvin.ai
            </a>
          </p>
        </address>

        {/* Formspree form — replace YOUR_FORM_ID with Vinay's Formspree ID */}
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="mt-12 space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Your name
            </label>
            <input
              id="name" name="name" type="text" required
              className="w-full bg-klvin-charcoal border border-klvin-border rounded-lg px-4 py-3 text-white placeholder:text-klvin-muted focus:outline-none focus:border-klvin-blue transition-colors"
              placeholder="Rajesh Kumar"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Work email
            </label>
            <input
              id="email" name="email" type="email" required
              className="w-full bg-klvin-charcoal border border-klvin-border rounded-lg px-4 py-3 text-white placeholder:text-klvin-muted focus:outline-none focus:border-klvin-blue transition-colors"
              placeholder="rajesh@yourcompany.com"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-white mb-1">
              Company & plant location
            </label>
            <input
              id="company" name="company" type="text"
              className="w-full bg-klvin-charcoal border border-klvin-border rounded-lg px-4 py-3 text-white placeholder:text-klvin-muted focus:outline-none focus:border-klvin-blue transition-colors"
              placeholder="Tata Motors, Pune"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
              What do you want to monitor?
            </label>
            <textarea
              id="message" name="message" rows={4} required
              className="w-full bg-klvin-charcoal border border-klvin-border rounded-lg px-4 py-3 text-white placeholder:text-klvin-muted focus:outline-none focus:border-klvin-blue transition-colors resize-none"
              placeholder="We have 20 motors on our press line that keep failing..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-klvin-orange text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Request a free pilot
          </button>
        </form>
      </section>
    </>
  );
}
