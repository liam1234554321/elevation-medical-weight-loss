"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="font-cormorant text-3xl font-bold text-el-green">
              Elevation
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-montserrat text-sm font-medium text-el-charcoal hover:text-el-green transition-colors uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+14123456789"
              className="flex items-center gap-2 font-montserrat text-sm text-el-charcoal hover:text-el-green transition-colors"
            >
              <Phone className="w-4 h-4" />
              (412) 345-6789
            </a>
            <Link
              href="/book"
              className="font-montserrat text-sm font-semibold text-el-green border border-gray-200 rounded-full px-6 py-2.5 hover:bg-green-50 hover:border-el-green transition-all uppercase tracking-wide"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-el-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-montserrat text-sm font-medium text-el-charcoal hover:text-el-green uppercase tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-gray-100" />
            <a
              href="tel:+14123456789"
              className="flex items-center gap-2 font-montserrat text-sm text-el-charcoal"
            >
              <Phone className="w-4 h-4" />
              (412) 345-6789
            </a>
            <Link
              href="/book"
              className="inline-block font-montserrat text-sm font-semibold text-el-green border border-gray-200 rounded-full px-6 py-2.5 hover:bg-green-50 uppercase tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
