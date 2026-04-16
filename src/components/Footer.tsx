"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const locations = [
  "Bridgeville",
  "Cranberry",
  "Greensburg",
  "Irwin",
  "McMurray",
  "Monroeville",
  "Moon Township",
  "Mt. Lebanon",
  "North Hills",
  "Pleasant Hills",
  "Robinson",
  "Upper St. Clair",
  "Washington",
  "Weirton",
  "Morgantown",
];

const services = [
  "Oral Diet Medications",
  "Semaglutide Injections",
  "HCG Rapid Fat Loss",
  "Testosterone Therapy",
  "Sermorelin Anti-Aging",
  "B Vitamin Injections",
  "Botox",
];

export default function Footer() {
  return (
    <footer className="bg-el-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo + Tagline */}
          <div>
            <Link href="/" className="font-cormorant text-3xl font-bold text-el-green">
              Elevation
            </Link>
            <p className="mt-4 font-montserrat text-sm text-gray-400 leading-relaxed">
              Physician-supervised weight loss made simple. No contracts. No hidden fees.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="tel:+14123456789"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-el-green transition-colors"
              >
                <Phone className="w-4 h-4" />
                (412) 345-6789
              </a>
              <a
                href="mailto:info@elevationweightloss.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-el-green transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@elevationweightloss.com
              </a>
            </div>
          </div>

          {/* Col 2: Locations */}
          <div>
            <h3 className="font-montserrat text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Locations
            </h3>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li key={loc}>
                  <Link
                    href="/locations"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-el-green transition-colors"
                  >
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="font-montserrat text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((svc) => (
                <li key={svc}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-el-green transition-colors"
                  >
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="font-montserrat text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-el-green transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-sm text-gray-400 hover:text-el-green transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-sm text-gray-400 hover:text-el-green transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/book"
                className="inline-block font-montserrat text-sm font-semibold text-el-green border border-el-green rounded-full px-6 py-2.5 hover:bg-el-green hover:text-white transition-all uppercase tracking-wide"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; 2026 Elevation Medical Weight Loss. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-gray-500 hover:text-el-green transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
