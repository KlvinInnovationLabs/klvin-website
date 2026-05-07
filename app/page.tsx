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

const metrics = [
  { value: "30–40%", label: "Downtime Reduction",    detail: "reduction in unscheduled downtime through early fault detection" },
  { value: "15–20%", label: "Energy Efficiency",     detail: "improvement by identifying and eliminating energy waste" },
  { value: "Up to 40%", label: "Asset Lifespan",     detail: "increase in asset life through optimized maintenance" },
  { value: "748%",   label: "Proven ROI",            detail: "documented at Sukraft Paper Mill — 5.4-month payback period" },
];

const pillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    headline: "Predictive Maintenance with Edge AI",
    text: "Advanced algorithms running at the edge deliver instant anomaly detection and failure predictions so maintenance teams can act before breakdowns occur.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    headline: "Energy Optimization",
    text: "Intelligent monitoring identifies energy inefficiencies and optimization opportunities, shrinking consumption and carbon footprint across critical assets.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    headline: "Uptime Improvement",
    text: "Continuous monitoring and early fault detection minimize unscheduled downtime and keep production lines running at peak performance.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    headline: "Digital Twin Enablement",
    text: "Create virtual replicas of critical assets for simulation, testing, and optimization — without disrupting live operations.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema, localBusinessSchema, websiteSchema]} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Radial glow background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(33 95% 56% / 0.12) 0%, transparent 60%), hsl(217 19% 3%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
          {/* Badge pill */}
          <div
            className="inline-block px-4 py-2 mb-8 rounded-full text-sm font-medium"
            style={{
              border: "1px solid hsl(33 95% 56% / 0.3)",
              background: "hsl(33 95% 56% / 0.07)",
              color: "hsl(33 95% 56%)",
            }}
          >
            Predictive Maintenance · Edge AI · IoT
          </div>

          <h1 className="hero-title gradient-text mb-6">
            Industrial AI that reads your factory floor
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
            Six purpose-built sensors. One AI platform. Predict failures before they happen —
            across motors, cold chains, fleets, emissions, dairy, and cinema environments.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary text-base">
              Book a Live Demo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/case-studies" className="btn-outline-blue text-base">
              See Results
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex justify-center">
            <div
              className="w-6 h-10 rounded-full border-2 flex justify-center pt-2"
              style={{ borderColor: "hsl(33 95% 56% / 0.5)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-bounce"
                style={{ background: "hsl(33 95% 56%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section
        className="border-y py-6 px-6"
        style={{
          backgroundColor: "hsl(217 15% 8%)",
          borderColor: "hsl(217 15% 15%)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-center text-sm font-medium text-white/50">
          <span>748% ROI — Sukraft Paper Mill</span>
          <span>−62% unplanned downtime — MPL Steel</span>
          <span>79 assets monitored simultaneously</span>
          <span>5.4-month payback period</span>
        </div>
      </section>

      {/* ── Metrics ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "hsl(217 15% 8%)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-4">
            Proven Impact on the Factory Floor
          </h2>
          <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto">
            KLVIN delivers measurable outcomes across industrial sectors — from paper mills to steel plants to pharmaceutical cold chains.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="card-klvin text-center">
                <div className="subsection-title gradient-text mb-3">{m.value}</div>
                <div className="text-white font-semibold mb-2">{m.label}</div>
                <div className="text-white/50 text-sm leading-relaxed">{m.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product grid ─────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "hsl(217 19% 3%)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-4">
            One platform. Six purpose-built sensors.
          </h2>
          <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto">
            SENTINEL is the AI brain. Each sensor is purpose-engineered for a specific industrial asset class.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <li key={p.slug} className="card-klvin group">
                <Link href={"/products/" + p.slug} className="block">
                  <h3
                    className="font-heading font-bold text-lg text-white mb-2 group-hover:text-[hsl(33_95%_56%)] transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {p.device}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-4">{p.sub}</p>
                  <span
                    className="text-sm font-semibold inline-flex items-center gap-1 transition-colors"
                    style={{ color: "hsl(194 100% 42%)" }}
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Intelligence split panel ──────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "hsl(217 15% 8%)" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title mb-6">
              Empowering Industries with{" "}
              <span className="gradient-text">Predictive Intelligence</span>
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-8">
              KLVIN delivers real-time insights through AI-powered predictive maintenance and continuous
              asset monitoring, driving uptime, safety, and sustainability. Our platform fuses advanced
              IoT sensors with edge AI analytics to predict failures before they occur.
            </p>
            <ul className="space-y-4">
              {[
                "Continuous monitoring of motors, pumps, compressors, and thermal equipment",
                "Edge AI models that detect anomalies in real time at the machine level",
                "Cloud analytics that convert sensor data into clear, actionable insights",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="flex-shrink-0 mt-1"
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="hsl(33 95% 56%)" strokeWidth="2.5"
                  >
                    <circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/>
                  </svg>
                  <span className="text-white/65 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/platform" className="btn-primary text-sm">
                Explore the Platform
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          {/* Visual stand-in (gradient box until real images are added) */}
          <div
            className="rounded-xl overflow-hidden card-elevated aspect-[4/3] flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, hsl(217 15% 12%) 0%, hsl(217 15% 8%) 100%)",
              border: "1px solid hsl(217 15% 20%)",
            }}
          >
            <div className="text-center px-8">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: "hsl(33 95% 56% / 0.15)", border: "1px solid hsl(33 95% 56% / 0.3)" }}
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="hsl(33 95% 56%)" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <p className="text-white/40 text-sm">SENTINEL Intelligence Stack</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillars ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "hsl(217 19% 3%)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-4">
            More Than Monitoring.
          </h2>
          <p className="section-title gradient-text text-center mb-16">
            A Complete Industrial Intelligence Stack.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div key={p.headline} className="card-klvin group">
                <div
                  className="mb-4 transition-transform group-hover:scale-110"
                  style={{ color: "hsl(33 95% 56%)" }}
                >
                  {p.icon}
                </div>
                <h3 className="subsection-title mb-3">{p.headline}</h3>
                <p className="text-white/60 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section
        className="py-32 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(33 95% 56% / 0.08) 0%, hsl(194 100% 42% / 0.08) 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="section-title mb-6">
            Futureproof Your Machines with{" "}
            <span className="gradient-text">KLVIN</span>
          </h2>
          <p className="text-xl text-white/65 mb-12 leading-relaxed">
            Join leading steel mills, cement plants, rubber manufacturers, and pharmaceutical facilities
            that trust KLVIN to keep their critical assets online.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary text-base">
              Start a Pilot Deployment
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/case-studies" className="btn-outline-blue text-base">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
