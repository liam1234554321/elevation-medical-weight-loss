import { Metadata } from "next";
import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import SectionLabel from "@/components/SectionLabel";
import GreenBanner from "@/components/GreenBanner";
import PillButton from "@/components/PillButton";
import { Award, Monitor, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Locations | Elevation Medical Weight Loss",
  description:
    "Find an Elevation Medical Weight Loss clinic near you. 15 locations across Pittsburgh, Weirton, and Morgantown, plus telehealth.",
};

const locations = [
  { name: "Green Tree", description: "Pittsburgh area, flagship location" },
  { name: "Weirton", tag: "Best of 2025", description: "Weirton, WV" },
  { name: "North Hills", description: "Pittsburgh north" },
  { name: "Morgantown", description: "Morgantown, WV" },
  { name: "South Hills", description: "Pittsburgh south" },
  { name: "Monroeville", description: "Pittsburgh east" },
  { name: "Robinson", description: "Pittsburgh west" },
  { name: "Washington", description: "South of Pittsburgh" },
  { name: "Wexford", description: "North suburbs" },
  { name: "Cranberry", tag: "Best of 2025", description: "North suburbs" },
  { name: "Bridgeville", description: "South suburbs" },
  { name: "Shadyside", description: "Pittsburgh proper" },
  { name: "Pleasant Hills", tag: "NEW", description: "South suburbs" },
  { name: "Upper St. Clair", tag: "NOW OPEN", description: "South suburbs" },
  { name: "Elevation Fitness+", description: "Gym &amp; fitness location" },
];

export default function LocationsPage() {
  return (
    <>
      <HeroBanner
        title="Our Locations"
        subtitle="15 clinics across Pittsburgh, Weirton, and Morgantown — plus telehealth."
      />

      {/* ===== GREEN BANNER ===== */}
      <GreenBanner text="15 locations across Pittsburgh, Weirton, and Morgantown — plus telehealth!" />

      {/* ===== LOCATIONS GRID ===== */}
      <section className="bg-white py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="A L L &nbsp; L O C A T I O N S"
            headline="Find a Clinic Near You"
            body="Every location offers the same physician-supervised care, transparent pricing, and welcoming team."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-6 border border-gray-100 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-el-green/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-el-green" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-montserrat font-bold text-el-charcoal text-base">
                      {loc.name}
                    </h3>
                    {loc.tag && (
                      <span className="bg-el-green text-white text-[10px] font-montserrat font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        {loc.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-el-text text-sm">{loc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AWARDS SECTION ===== */}
      <section className="bg-el-light-gray py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="A W A R D S"
            headline="Best of 2025"
            body="We&apos;re proud to be recognized for outstanding patient care."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                <Award className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-lg mb-2">
                Cranberry
              </h3>
              <p className="font-montserrat font-semibold text-el-green text-sm mb-2">
                Best of 2025 Winner
              </p>
              <p className="text-el-text text-sm leading-relaxed">
                Voted one of the best weight loss clinics in the Cranberry Township
                area. Thank you to our amazing patients!
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                <Award className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-lg mb-2">
                Weirton
              </h3>
              <p className="font-montserrat font-semibold text-el-green text-sm mb-2">
                Best of 2025 Winner
              </p>
              <p className="text-el-text text-sm leading-relaxed">
                Recognized as a top weight loss provider in the Weirton, WV area.
                We&apos;re honored by your support!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TELEHEALTH ===== */}
      <section className="bg-white py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel
              label="T E L E H E A L T H"
              headline="Virtual Visits Available"
              body="Can&apos;t visit in person? No problem. Elevation offers telehealth appointments for both new and returning patients. Get the same physician-supervised care from the comfort of your home."
            />
            <div className="flex items-center justify-center gap-3 mb-8">
              <Monitor className="w-6 h-6 text-el-green" />
              <p className="font-montserrat text-sm text-el-text">
                Available for all programs including Semaglutide, oral medications, and more.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PillButton href="/book">Book Telehealth Visit</PillButton>
              <PillButton href="/contact" variant="green-outline">
                Contact Us
              </PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP PLACEHOLDER ===== */}
      <section className="bg-el-light-gray py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="S E R V I C E &nbsp; A R E A"
            headline="Serving Greater Pittsburgh &amp; Beyond"
          />
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="https://placehold.co/1200x400/e5e7eb/999999?text=Map+Coming+Soon"
                alt="Service area map placeholder"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-el-text text-sm text-center mt-6">
              Serving patients across Pittsburgh, Weirton, WV, and Morgantown, WV.
              Telehealth available for patients who prefer virtual visits.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTABanner />
    </>
  );
}
