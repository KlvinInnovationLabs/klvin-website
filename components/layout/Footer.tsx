import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "hsl(217 15% 8%)" }} className="mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <p className="text-white font-bold text-base mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>KLVIN</p>
          <p className="text-white/60">Industrial AI + IoT Intelligence Platform.</p>
          <p className="text-white/60 mt-1">Hyderabad, India.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Products</p>
          <ul className="space-y-2">
            {[
              ["S.A.M.v3",   "/products/sam-v3"],
              ["THRIVE.v2",  "/products/thrive-v2"],
              ["THRIVE+.v2", "/products/thrive-plus-v2"],
              ["TRACE.v2",   "/products/trace-v2"],
              ["SEAL.v1",    "/products/seal-v1"],
              ["I.S.M.v1",   "/products/ism-v1"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-white/60 hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Company</p>
          <ul className="space-y-2">
            {[
              ["Team",         "/team"],
              ["Platform",     "/platform"],
              ["Insights",     "/blog"],
              ["Case Studies", "/case-studies"],
              ["Contact",      "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-white/60 hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Resources</p>
          <ul className="space-y-2">
            <li><Link href="/glossary" className="text-white/60 hover:text-white transition-colors">IIoT Glossary</Link></li>
            <li><Link href="/llms.txt" className="text-white/60 hover:text-white transition-colors">llms.txt</Link></li>
          </ul>
          <p className="text-white/40 mt-6 text-xs">DLabs, I-Venture @ISB<br />Road No. 6, Gachibowli<br />Hyderabad – 500111</p>
          <p className="text-white/40 text-xs mt-1">+91 99858 14545</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 max-w-7xl mx-auto flex justify-between text-xs text-white/30">
        <span>© 2026 KLVIN Technology Labs Pvt. Ltd.</span>
        <span>connect@klvin.ai</span>
      </div>
    </footer>
  );
}
