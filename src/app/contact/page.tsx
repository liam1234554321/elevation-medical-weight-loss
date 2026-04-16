import { Metadata } from "next";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import SectionLabel from "@/components/SectionLabel";
import GreenBanner from "@/components/GreenBanner";
import ContactForm from "@/components/ContactForm";
import { Phone, Globe, Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Elevation Medical Weight Loss",
  description:
    "Get in touch with Elevation Medical Weight Loss. Call, email, or fill out our contact form. 15 locations across Pittsburgh, Weirton, and Morgantown.",
};

const allLocations = [
  "Green Tree",
  "Weirton",
  "North Hills",
  "Morgantown",
  "South Hills",
  "Monroeville",
  "Robinson",
  "Washington",
  "Wexford",
  "Cranberry",
  "Bridgeville",
  "Shadyside",
  "Pleasant Hills",
  "Upper St. Clair",
  "Elevation Fitness+",
];

export default function ContactPage() {
  return (
    <>
      <HeroBanner
        title="Contact Us"
        subtitle="We&apos;d love to hear from you. Reach out anytime."
      />

      {/* ===== CONTACT INFO CARDS ===== */}
      <section className="bg-white py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="G E T &nbsp; I N &nbsp; T O U C H"
            headline="We&apos;re Here to Help"
            body="Reach out by phone, email, or visit any of our 15 locations."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-8 border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                <Phone className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-base mb-2">
                Phone
              </h3>
              <a
                href="tel:+14123456789"
                className="text-el-green font-montserrat font-semibold text-sm hover:underline"
              >
                (412) 345-6789
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-8 border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                <Globe className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-base mb-2">
                Website
              </h3>
              <p className="text-el-text text-sm">
                elevationweightloss.com
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-8 border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                <Mail className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-base mb-2">
                Email
              </h3>
              <a
                href="mailto:info@elevationweightloss.com"
                className="text-el-green font-montserrat font-semibold text-sm hover:underline break-all"
              >
                info@elevationweightloss.com
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-8 border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                <Clock className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-base mb-2">
                Hours
              </h3>
              <p className="text-el-text text-sm">
                Mon – Fri: 9am – 5pm
              </p>
              <p className="text-el-text text-sm">
                Sat: Select Locations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="bg-el-light-gray py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="S E N D &nbsp; A &nbsp; M E S S A G E"
            headline="Contact Form"
            body="Fill out the form below and our team will get back to you shortly."
          />
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ===== ALL LOCATIONS QUICK LINKS ===== */}
      <section className="bg-white py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="O U R &nbsp; L O C A T I O N S"
            headline="Visit Us In Person"
            body="15 clinics across Pittsburgh, Weirton, and Morgantown."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {allLocations.map((loc) => (
              <Link
                key={loc}
                href="/locations"
                className="bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-4 flex items-center gap-3 hover:border-el-green hover:shadow-md transition-all"
              >
                <MapPin className="w-4 h-4 text-el-green flex-shrink-0" />
                <span className="font-montserrat font-semibold text-el-charcoal text-sm">
                  {loc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GREEN BANNER ===== */}
      <GreenBanner text="15 Locations. Telehealth Available. No Contracts." />

      {/* ===== CTA ===== */}
      <CTABanner />
    </>
  );
}
