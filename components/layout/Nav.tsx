"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/products",     label: "Products"     },
  { href: "/platform",     label: "Platform"     },
  { href: "/industries",   label: "Industries"   },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog",         label: "Insights"     },
  { href: "/team",         label: "Team"         },
];

export function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname                  = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const navBg = scrolled
    ? "bg-[hsl(217_19%_3%/0.95)] backdrop-blur-lg border-b border-[hsl(217_15%_15%)]"
    : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity"
            style={{ color: "hsl(194 100% 42%)", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            KLVIN
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="nav-link"
                  data-active={pathname === l.href || pathname.startsWith(l.href + "/") ? "true" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-sm !py-2 !px-5">
              Request a Quote
            </Link>
            <a
              href="https://platform.klvin.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-blue text-sm !py-2 !px-5"
            >
              SENTINEL Login
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[hsl(217_15%_15%)] bg-[hsl(217_19%_3%)]">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link py-2 text-base"
                data-active={pathname === l.href ? "true" : undefined}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <Link href="/contact" className="btn-primary text-sm text-center justify-center">
                Request a Quote
              </Link>
              <a
                href="https://platform.klvin.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-blue text-sm text-center justify-center"
              >
                SENTINEL Login
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
