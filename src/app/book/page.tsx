import { Metadata } from "next";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import SectionLabel from "@/components/SectionLabel";
import GreenBanner from "@/components/GreenBanner";
import ProcessStep from "@/components/ProcessStep";
import PillButton from "@/components/PillButton";
import { MapPin, Monitor, Phone, Calendar, FileText, UserCheck, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Appointment | Elevation Medical Weight Loss",
  description:
    "Schedule your appointment at Elevation Medical Weight Loss. In-person or telehealth available. No contracts, no hidden fees.",
};

const locationsList = [
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

export default function BookPage() {
  return (
    <>
      <HeroBanner
        title="Book Your Appointment"
        subtitle="In-person or telehealth. First visits take about 30 minutes."
      />

      {/* ===== INTRO ===== */}
      <section className="bg-white py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel
              label="G E T &nbsp; S T A R T E D"
              headline="Ready to Start Your Weight Loss Journey?"
              body="Book online or call any of our 15 locations. Customizable plans starting at just $90/month. No contracts, no start-up fees, no hidden costs."
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PillButton href="https://elevationweightloss.setmore.com">
                Book Online
              </PillButton>
              <PillButton href="tel:+14123456789" variant="green-outline">
                Call (412) 345-6789
              </PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOOKING OPTIONS ===== */}
      <section className="bg-el-light-gray py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="B O O K I N G &nbsp; O P T I O N S"
            headline="Choose How to Visit"
            body="Two convenient ways to see our team."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* In-Person Card */}
            <div className="bg-white rounded-xl shadow-sm p-8 md:p-10">
              <div className="w-14 h-14 mb-6 rounded-full bg-el-green/10 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-cormorant text-3xl font-bold text-el-green mb-3">
                In-Person Visit
              </h3>
              <p className="text-el-text text-sm leading-relaxed mb-6">
                Visit any of our 15 locations across Pittsburgh, Weirton, and
                Morgantown. Walk-ins are welcome at most locations, or book ahead
                for a guaranteed time slot.
              </p>
              <div className="space-y-2 mb-8">
                <div className="grid grid-cols-2 gap-2">
                  {locationsList.map((loc) => (
                    <div key={loc} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-el-green flex-shrink-0" />
                      <span className="text-el-text text-xs">{loc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <PillButton href="https://elevationweightloss.setmore.com">
                Book In-Person
              </PillButton>
            </div>
            {/* Telehealth Card */}
            <div className="bg-white rounded-xl shadow-sm p-8 md:p-10">
              <div className="w-14 h-14 mb-6 rounded-full bg-el-green/10 flex items-center justify-center">
                <Monitor className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-cormorant text-3xl font-bold text-el-green mb-3">
                Telehealth Visit
              </h3>
              <p className="text-el-text text-sm leading-relaxed mb-6">
                Get the same physician-supervised care from the comfort of your home.
                Telehealth is available for both new and returning patients across
                all programs.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-el-green flex-shrink-0 mt-0.5" />
                  <p className="text-el-text text-sm">
                    Available for new patients — no prior in-person visit required
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-el-green flex-shrink-0 mt-0.5" />
                  <p className="text-el-text text-sm">
                    Returning patients can continue care virtually
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-el-green flex-shrink-0 mt-0.5" />
                  <p className="text-el-text text-sm">
                    All programs available including Semaglutide &amp; oral medications
                  </p>
                </div>
              </div>
              <PillButton href="https://elevationweightloss.setmore.com">
                Book Telehealth
              </PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOOKING EMBED PLACEHOLDER ===== */}
      <section className="bg-white py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="O N L I N E &nbsp; B O O K I N G"
            headline="Schedule Your Visit"
          />
          <div className="max-w-3xl mx-auto">
            <div className="bg-el-light-gray rounded-2xl p-12 md:p-16 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-el-green/10 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-el-green" />
              </div>
              <h3 className="font-cormorant text-3xl font-bold text-el-green mb-3">
                Online Booking via Setmore
              </h3>
              <p className="text-el-text text-sm leading-relaxed mb-6 max-w-lg mx-auto">
                Our online booking system makes it easy to schedule your visit.
                Choose your location, select a date and time, and you&apos;re all set.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="https://elevationweightloss.setmore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-el-green border border-gray-200 rounded-full px-8 py-3 font-montserrat font-semibold text-sm tracking-wide uppercase hover:bg-green-50 hover:border-el-green transition-all"
                >
                  Book on Setmore
                </Link>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-el-green" />
                <p className="font-montserrat text-el-charcoal text-sm">
                  Prefer to call?{" "}
                  <a
                    href="tel:+14123456789"
                    className="text-el-green font-semibold hover:underline"
                  >
                    (412) 345-6789
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT TO EXPECT ===== */}
      <section className="bg-el-light-gray py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="W H A T &nbsp; T O &nbsp; E X P E C T"
            headline="Your First Visit"
            body="Here&apos;s what happens when you visit Elevation for the first time."
          />
          <div className="max-w-3xl mx-auto space-y-8">
            <ProcessStep
              number="1"
              title="Check In"
              description="Arrive at your chosen location or log into your telehealth appointment. Our front desk team will get you checked in quickly. No lengthy paperwork — we keep things simple."
            />
            <ProcessStep
              number="2"
              title="Medical Evaluation"
              description="A licensed PA or NP will review your medical history, current medications, vitals, and weight loss goals. This evaluation ensures your plan is safe and effective for your unique needs."
            />
            <ProcessStep
              number="3"
              title="Personalized Plan"
              description="Your provider creates a customized plan including medication, nutrition guidance, and exercise recommendations tailored to your body, lifestyle, and goals."
            />
            <ProcessStep
              number="4"
              title="Start Your Program"
              description="Leave your first visit with your medication and a clear plan of action. Most patients start seeing results within the first few weeks. Follow-up visits are typically monthly."
            />
          </div>
        </div>
      </section>

      {/* ===== NEW PATIENT INFO ===== */}
      <section className="bg-white py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="N E W &nbsp; P A T I E N T S"
            headline="New Patient Information"
            body="Everything you need to know before your first visit."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-8 border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                <FileText className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-base mb-2">
                What to Bring
              </h3>
              <p className="text-el-text text-sm leading-relaxed">
                Just bring a valid photo ID and a list of any current medications.
                No insurance cards needed — we&apos;re a cash-pay clinic.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-8 border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                <ClipboardCheck className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-base mb-2">
                Forms Available Online
              </h3>
              <p className="text-el-text text-sm leading-relaxed">
                New patient forms are available online to save time at your visit.
                You can also complete them in the office — it only takes a few minutes.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-8 border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                <UserCheck className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-base mb-2">
                No Referral Needed
              </h3>
              <p className="text-el-text text-sm leading-relaxed">
                You do not need a referral from another doctor. Walk-ins are welcome
                at most locations, or book online for a guaranteed time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GREEN BANNER ===== */}
      <GreenBanner text="No contracts. No start-up fees. Plans from $90/month." />

      {/* ===== CTA ===== */}
      <CTABanner />
    </>
  );
}
