import { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import SectionLabel from "@/components/SectionLabel";
import GreenBanner from "@/components/GreenBanner";
import TeamCard from "@/components/TeamCard";
import { Shield, DollarSign, ClipboardList, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Elevation Medical Weight Loss",
  description:
    "Learn about Elevation Medical Weight Loss — a family-owned, physician-supervised weight loss clinic with 15 locations in Pittsburgh, Weirton, and Morgantown.",
};

const teamMembers = [
  { name: "Dr. Mye Cooper, DO", title: "Medical Director" },
  { name: "Julie O.", title: "Administrative Director" },
  { name: "Jenn J.", title: "Administrative Office Manager" },
  { name: "Valerie B.", title: "Lead PA" },
  { name: "Kierstin C.", title: "Certified PA" },
  { name: "Jeremy L.", title: "Certified PA" },
  { name: "Carrie C.", title: "Certified PA" },
  { name: "Becky B.", title: "Certified PA" },
  { name: "Dylan P.", title: "Certified NP" },
  { name: "Erika S.", title: "Certified NP" },
  { name: "Catie K.", title: "Certified NP" },
  { name: "Amber N.", title: "Certified NP" },
  { name: "Ashley D.", title: "Certified NP" },
  { name: "Megan O.", title: "Office Manager" },
  { name: "Christina P.", title: "Medical Assistant" },
  { name: "Mijin K.", title: "Medical Assistant" },
  { name: "Jamie S.", title: "Medical Assistant" },
  { name: "Maddie O.", title: "Medical Assistant" },
  { name: "Rachel S.", title: "Medical Assistant" },
  { name: "Adam P.", title: "Medical Assistant" },
  { name: "Shakala S.", title: "Medical Assistant" },
  { name: "Chrissy B.", title: "Medical Assistant" },
  { name: "Ashley C.", title: "Medical Assistant" },
  { name: "Courtney L.", title: "Medical Assistant" },
];

const values = [
  {
    icon: Shield,
    title: "Physician-Supervised Care",
    description:
      "Every visit is led by a licensed PA or NP under the direction of Dr. Cooper. Your safety and results are our top priority.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No contracts, no start-up fees, no hidden costs. You always know exactly what you&apos;re paying before your visit.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Plans",
    description:
      "No two patients are alike. We tailor your medication, nutrition guidance, and exercise recommendations to your unique needs and goals.",
  },
  {
    icon: MapPin,
    title: "Accessible Locations",
    description:
      "With 15 clinics across Pittsburgh, Weirton, and Morgantown — plus telehealth — quality weight loss care is always within reach.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroBanner
        title="About Us"
        subtitle="Family-owned. Physician-supervised. No-nonsense weight loss."
      />

      {/* ===== OUR STORY ===== */}
      <section className="bg-white py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="O U R &nbsp; S T O R Y"
            headline="Weight Loss Without the Gimmicks"
          />
          <div className="max-w-3xl mx-auto">
            <p className="text-el-text leading-relaxed mb-6">
              Elevation Medical Weight Loss was founded by Dr. Mye Cooper, DO, with
              a simple but powerful mission: make physician-supervised weight loss
              accessible and affordable for everyone. What started as a single clinic
              has grown into a family of 15 locations serving patients across
              Pittsburgh, Weirton, and Morgantown.
            </p>
            <p className="text-el-text leading-relaxed mb-6">
              As a family-owned and operated practice, we believe that quality medical
              care shouldn&apos;t come with long-term contracts, hidden fees, or
              corporate red tape. Every patient who walks through our doors receives
              a personalized plan built around their unique needs — not a one-size-fits-all
              program.
            </p>
            <p className="text-el-text leading-relaxed">
              Our approach is straightforward: physician-supervised care with
              transparent pricing. No contracts. No start-up fees. No hidden costs.
              Just proven medical protocols, a dedicated team, and a commitment to
              helping you reach your goals.
            </p>
          </div>
        </div>
      </section>

      {/* ===== DR. MYE COOPER ===== */}
      <section className="bg-el-light-gray py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="M E E T &nbsp; T H E &nbsp; D O C T O R"
            headline="Dr. Mye Cooper, DO"
            body="Founder &amp; Medical Director"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <div className="w-80 h-96 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-el-green/10 flex items-center justify-center">
                    <span className="font-cormorant text-4xl font-bold text-el-green">
                      MC
                    </span>
                  </div>
                  <p className="font-montserrat font-semibold text-el-charcoal">
                    Dr. Mye Cooper, DO
                  </p>
                  <p className="text-el-text text-sm mt-1">
                    Founder &amp; Medical Director
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-el-text leading-relaxed mb-4">
                Dr. Mye Cooper is a board-certified Doctor of Osteopathic Medicine
                and the founder of Elevation Medical Weight Loss. With a passion for
                making quality healthcare accessible, she built Elevation from the
                ground up as a family-owned practice dedicated to helping patients
                achieve lasting results.
              </p>
              <p className="text-el-text leading-relaxed mb-4">
                Under Dr. Cooper&apos;s leadership, Elevation has grown from a single
                clinic to 15 locations across the Pittsburgh region, Weirton, and
                Morgantown. She leads a team of licensed Physician Assistants and
                Nurse Practitioners who share her commitment to patient-centered care.
              </p>
              <p className="text-el-text leading-relaxed mb-4">
                Every visit at Elevation includes a medical evaluation, personalized
                medication plan, nutrition and exercise guidance, and optional vitamin
                injections — all under physician supervision. Dr. Cooper believes
                everyone deserves access to safe, effective weight loss care without
                the burden of long-term contracts or hidden fees.
              </p>
              <p className="text-el-text leading-relaxed">
                Her no-nonsense approach focuses on proven medical protocols tailored
                to each patient&apos;s unique needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FULL TEAM GRID ===== */}
      <section className="bg-white py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="O U R &nbsp; T E A M"
            headline="Meet the Elevation Team"
            body="A dedicated team of 24 medical professionals committed to your success."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                title={member.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR PHILOSOPHY ===== */}
      <section className="bg-el-light-gray py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="O U R &nbsp; P H I L O S O P H Y"
            headline="What We Stand For"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-el-green" />
                </div>
                <h3 className="font-montserrat font-bold text-el-charcoal text-lg mb-3">
                  {value.title}
                </h3>
                <p className="text-el-text text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GREEN BANNER ===== */}
      <GreenBanner text="No contracts. No start-up fees. No hidden costs. Plans from $90/month." />

      {/* ===== CTA ===== */}
      <CTABanner />
    </>
  );
}
