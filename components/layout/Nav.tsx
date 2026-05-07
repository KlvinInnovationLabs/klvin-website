import Link from "next/link";

const links = [
  { href: "/products",     label: "Products"     },
  { href: "/platform",     label: "Platform"     },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog",         label: "Insights"     },
  { href: "/team",         label: "Team"         },
];

export function Nav() {
  return (
    <nav
      style={{ backgroundColor: "hsl(217 19% 3%)" }}
      className="sticky top-0 z-50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-xl tracking-tight"
          style={{ color: "hsl(194 100% 42%)", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          KLVIN
        </Link>
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="text-white/80 hover:text-white transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="font-semibold px-4 py-2 rounded-md text-sm transition-colors"
          style={{ backgroundColor: "hsl(33 95% 56%)", color: "hsl(217 19% 3%)" }}
        >
          Book a Demo
        </Link>
      </div>
    </nav>
  );
}
