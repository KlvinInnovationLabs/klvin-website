import type { Metadata } from "next";
import { Nav }    from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://klvin.ai"),
  title: {
    default:  "Industrial AI + IoT Intelligence Platform | KLVIN",
    template: "%s | KLVIN",
  },
  description: "KLVIN deploys purpose-built IoT sensors for motors, cold chains, fleets, and emissions — fed into AI that predicts failures before they happen.",
  openGraph: {
    siteName: "KLVIN",
    locale:   "en_IN",
    type:     "website",
  },
  twitter: { card: "summary_large_image" },
  robots:  { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
