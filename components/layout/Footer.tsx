import Link from "next/link";

const productLinks: [string, string][] = [
  ["S.A.M.v3",   "/products/sam-v3"],
  ["THRIVE.v2",  "/products/thrive-v2"],
  ["THRIVE+.v2", "/products/thrive-plus-v2"],
  ["TRACE.v2",   "/products/trace-v2"],
  ["SEAL.v1",    "/products/seal-v1"],
  ["I.S.M.v1",   "/products/ism-v1"],
];

const companyLinks: [string, string][] = [
  ["Platform",     "/platform"],
  ["Industries",   "/industries"],
  ["Case Studies", "/case-studies"],
  ["Insights",     "/blog"],
  ["Team",         "/team"],
  ["Contact",      "/contact"],
];

const legalLinks: [string, string][] = [
  ["Privacy Policy",   "/privacy"],
  ["Terms of Service", "/terms"],
  ["IIoT Glossary",    "/glossary"],
  ["llms.txt",         "/llms.txt"],
];

export function Footer() {
  return (
    <footer
      className="mt-24 border-t border-[hsl(217_15%_15%)]"
      style={{ backgroundColor: "hsl(217 15% 8%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="inline-block font-bold text-2xl tracking-tight mb-3 hover:opacity-80 transition-opacity"
              style={{ color: "hsl(194 100% 42%)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              KLVIN
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Intelligence That Powers Industry
            </p>

            {/* Badges */}
            <div className="flex flex-col gap-3">
              <div
                className="flex items-center gap-2 px-3 py-2 rounded w-fit text-xs font-semibold"
                style={{
                  background: "hsl(33 95% 56% / 0.1)",
                  border: "1px solid hsl(33 95% 56% / 0.3)",
                  color: "hsl(33 95% 56%)",
                }}
              >
                🇮🇳 Made in India
              </div>
              <div
                className="flex items-center gap-2 px-3 py-2 rounded w-fit text-xs font-semibold"
                style={{
                  background: "hsl(194 100% 42% / 0.1)",
                  border: "1px solid hsl(194 100% 42% / 0.3)",
                  color: "hsl(194 100% 42%)",
                }}
              >
                🏆 Startup India Recognized
              </div>
            </div>

            <p className="text-white/40 text-xs mt-4 leading-relaxed">
              Backed by iCreate, MeitY, IIT Hyderabad, DPIIT
            </p>
          </div>

          {/* Products column */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 text-sm hover:text-[hsl(33_95%_56%)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 text-sm hover:text-[hsl(33_95%_56%)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Legal column */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5 mb-8">
              {legalLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 text-sm hover:text-[hsl(33_95%_56%)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Contact</h4>
            <a
              href="mailto:connect@klvin.ai"
              className="text-white/60 text-sm hover:text-[hsl(33_95%_56%)] transition-colors block mb-2"
            >
              connect@klvin.ai
            </a>
            <a
              href="tel:+919985814545"
              className="text-white/60 text-sm hover:text-[hsl(33_95%_56%)] transition-colors block"
            >
              +91 99858 14545
            </a>
            <p className="text-white/40 text-xs mt-4 leading-relaxed">
              DLabs, I-Venture @ISB<br />
              Road No. 6, Gachibowli<br />
              Hyderabad – 500 111
            </p>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30"
          style={{ borderTop: "1px solid hsl(217 15% 15%)" }}
        >
          <span>© 2026 KLVIN Technology Labs Pvt. Ltd. All rights reserved.</span>
          <span>connect@klvin.ai</span>
        </div>
      </div>
    </footer>
  );
}
