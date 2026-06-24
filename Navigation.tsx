"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Dumbbell, Droplets } from "lucide-react";

const NAV_LINKS = [
  { href: "/locations", label: "Locations" },
  { href: "/classes", label: "Classes" },
  { href: "/book-pt", label: "Book PT" },
  { href: "/offers", label: "Offers" },
  { href: "/membership", label: "Membership" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 top-0 bg-primary-dark/80 backdrop-blur-xl border-b border-white/5">
      {/* Top water drip accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/50 to-transparent animate-water-wave"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Droplets className="h-7 w-7 text-accent-teal group-hover:animate-water-drip transition-all" />
            </div>
            <span className="font-heading font-black text-2xl tracking-tighter text-white">
              H2O<span className="text-accent-teal">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-accent-teal bg-accent-teal/10"
                    : "text-text-secondary hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/app" className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-white transition-colors px-3 py-2">
              Dashboard
            </Link>
            <Link href="/login" className="text-sm font-medium text-white hover:text-accent-teal transition-colors px-3 py-2">
              Log in
            </Link>
            <Link
              href="/signup"
              className="group relative text-sm font-bold bg-accent-teal text-primary-dark px-5 py-2.5 rounded-full overflow-hidden hover:shadow-[0_0_20px_rgba(112,245,209,0.5)] transition-all transform hover:scale-105"
            >
              <span className="relative z-10">Join H2O</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-secondary hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card-dark/95 backdrop-blur-xl border-b border-white/5 absolute w-full">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                  pathname === link.href ? "text-accent-teal bg-accent-teal/10" : "text-text-secondary hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/5 space-y-2">
              <Link href="/app" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-white hover:bg-white/5 rounded-xl">Dashboard</Link>
              <Link href="/login" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-white hover:bg-white/5 rounded-xl">Log in</Link>
              <Link href="/signup" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-bold text-primary-dark bg-accent-teal rounded-xl hover:bg-accent-teal/90">Join H2O →</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
