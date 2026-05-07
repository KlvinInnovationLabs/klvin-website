import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "SENTINEL — Industrial AI Platform | KLVIN",
  description:
    "SENTINEL is KLVIN's cloud AI platform — aggregating sensor data from all six edge devices, running failure-prediction models, and delivering actionable maintenance alerts.",
  alternates: { canonical: "https://klvin.ai/platform/" },
  openGraph: {
    title: "SENTINEL — Industrial AI Platform | KLVIN",
    description:
      "SENTINEL aggregates sensor data, runs failure-prediction AI, and delivers actionable maintenance alerts for Indian manufacturers.",
    url: "https://klvin.ai/platform/",
    type: "website",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SENTINEL",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Cloud (AWS Mumbai ap-south-1)",
  description:
    "Industrial AI platform aggregating multi-sensor data from KLVIN edge devices to predict equipment failures and optimise maintenance scheduling.",
  offers: {
    "@type": "Offer",
    url: "https://klvin.ai/contact/",
    priceCurrency: "INR",
  },
  publisher: {
    "@type": "Organization",
    name: "KLVIN Technology Labs",
  },
};

export default function PlatformPage() {
  return (
    <>
      <JsonLd data={softwareSchema} />
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-heading text-4xl font-bold text-white leading-tight">
          SENTINEL — the industrial intelligence platform behind every KLVIN device
        </h1>
        <p className="mt-6 text-klvin-muted text-lg leading-relaxed max-w-2xl">
          Every KLVIN sensor feeds into SENTINEL. It aggregates multi-dimensional sensor data,
          runs on-device and cloud AI models, and delivers failure predictions weeks before they
          would otherwise surface.
        </p>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Multi-sensor aggregation", body: "Vibration, temperature, current, GPS, emissions, and humidity data from all six device families — normalised into a single time-series data lake." },
            { title: "AI failure prediction", body: "Unsupervised anomaly detection + supervised RUL models trained per asset class. 97%+ detection rate, 2.3% false-positive rate across 79+ assets." },
            { title: "Real-time alerting", body: "SMS, WhatsApp, and email alerts within 90 seconds of a threshold breach. Configurable per asset, shift, and severity level." },
            { title: "Integrations", body: "REST API, OPC-UA, BACnet/IP, MQTT. Pre-built connectors for SAP EWM, Oracle Fusion, Honeywell BMS, and leading CMMS platforms." },
            { title: "Compliance reporting", body: "Automated WHO PQS cold-chain reports, CDSCO GDP audit trails, Punjab PCB emissions logs, and ISO 10816 trending reports." },
            { title: "Data sovereignty", body: "Hosted on AWS Mumbai (ap-south-1). On-premises deployment available for defence and government customers." },
          ].map((feat) => (
            <li key={feat.title} className="border border-klvin-border bg-klvin-charcoal rounded-xl p-6">
              <h2 className="font-heading text-lg font-semibold text-white">{feat.title}</h2>
              <p className="text-klvin-muted text-sm mt-2 leading-relaxed">{feat.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="bg-klvin-orange text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Request a SENTINEL demo
          </Link>
        </div>
      </section>
    </>
  );
}
