import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import ServiceCard from "@/components/ServiceCard";
import LocationCard from "@/components/LocationCard";
import TeamCard from "@/components/TeamCard";
import BrandMarquee from "@/components/BrandMarquee";
import CTABanner from "@/components/CTABanner";
import PillButton from "@/components/PillButton";
import { Shield, DollarSign, MapPin, Syringe, Monitor } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
          alt="Mountain landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Start Your Weight Loss Journey Today!
          </h1>
          <p className="font-montserrat text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Customizable weight loss plans starting at just $90/month.
            Physician-supervised. No contracts. No hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block bg-white text-el-green font-montserrat font-semibold text-sm px-10 py-4 rounded-full hover:bg-green-50 transition-colors uppercase tracking-wide border border-gray-200"
            >
              Book Appointment
            </Link>
            <Link
              href="/book"
              className="inline-block bg-transparent text-white font-montserrat font-semibold text-sm px-10 py-4 rounded-full hover:bg-white/10 transition-colors uppercase tracking-wide border border-white"
            >
              Telehealth
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: WHY ELEVATION ===== */}
      <section className="bg-el-light-gray py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel
            label="W H Y &nbsp; E L E V A T I O N"
            headline="Weight Loss Made Simple"
            body="We take a no-nonsense, physician-supervised approach to help you lose weight safely and affordably."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-lg mb-3">
                Physician-Supervised
              </h3>
              <p className="text-el-text text-sm leading-relaxed">
                Every plan is overseen by Dr. Cooper&apos;s experienced medical
                team. Safe, proven protocols tailored to your body.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-lg mb-3">
                No Hidden Costs
              </h3>
              <p className="text-el-text text-sm leading-relaxed">
                Plans from $90/month. No contracts, no enrollment fees, no
                surprises. What you see is what you pay.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-lg mb-3">
                15 Locations
              </h3>
              <p className="text-el-text text-sm leading-relaxed">
                Across Pittsburgh, Weirton, and Morgantown — plus telehealth
                for patients who prefer virtual visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SERVICES OVERVIEW ===== */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel
            label="O U R &nbsp; S E R V I C E S"
            headline="Programs &amp; Pricing"
            body="Transparent pricing on every program. No contracts. No hidden fees."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ServiceCard
              name="Oral Diet Medications"
              price="$90 – $170"
              description="30-day ($90) or 60-day ($170) physician-supervised oral medication plans. Our most affordable option."
              tag="Most Popular"
            />
            <ServiceCard
              name="Semaglutide Injections"
              price="From $200/mo"
              description="GLP-1 weekly injection program. Dose-dependent pricing from $200 to $400/month."
              tag="GLP-1"
            />
            <ServiceCard
              name="HCG Rapid Fat Loss"
              price="$425/30 days"
              description="Includes B12 + Lipo+ injections. Designed for rapid, physician-supervised fat loss."
            />
            <ServiceCard
              name="Testosterone Therapy"
              price="From $450/3 mo"
              description="TRT for men experiencing low testosterone. 3-month ($450) or 6-month ($875) plans with lab work."
            />
            <ServiceCard
              name="Sermorelin Anti-Aging"
              price="$235/30 days"
              description="Supports anti-aging, recovery, and body composition. Physician-supervised peptide therapy."
            />
            <ServiceCard
              name="B Vitamin Injections"
              price="From $8"
              description="B12 ($8), Fat Burner ($15), Combo ($23), Super Lipo ($25), Biotin ($15). Walk-ins welcome."
            />
            <ServiceCard
              name="Botox"
              price="$13/unit"
              description="Administered by trained medical professionals. Packages available. Schedule a consultation today."
            />
          </div>
          <div className="text-center mt-10">
            <PillButton href="/services" variant="green-outline">
              View All Services
            </PillButton>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: SEMAGLUTIDE SPOTLIGHT ===== */}
      <section className="bg-el-light-gray py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionLabel
            label="S E M A G L U T I D E"
            headline="GLP-1 Injection Program"
            body="Our most effective program for sustained weight loss. Semaglutide helps control appetite and blood sugar with a simple weekly injection."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-xl mb-4">
                How It Works
              </h3>
              <p className="text-el-text text-sm leading-relaxed mb-6">
                Semaglutide is a GLP-1 receptor agonist that mimics a natural
                hormone in your body. It slows gastric emptying, reduces appetite,
                and helps regulate blood sugar — leading to significant, sustainable
                weight loss when combined with lifestyle changes.
              </p>
              <p className="text-el-text text-sm leading-relaxed mb-6">
                Our physician-supervised program gradually increases your dose over
                5 months for optimal results with minimal side effects. All
                visits and injections are included in the monthly price.
              </p>
              <div className="flex items-center gap-2 mb-2">
                <Syringe className="w-5 h-5 text-el-green" />
                <span className="font-montserrat font-semibold text-el-charcoal text-sm">
                  Once-weekly injection
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-el-green" />
                <span className="font-montserrat font-semibold text-el-charcoal text-sm">
                  Physician-supervised at every step
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-xl mb-4">
                Pricing Ladder
              </h3>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-el-green/10">
                      <th className="text-left px-5 py-3 font-montserrat font-semibold text-el-charcoal">
                        Month
                      </th>
                      <th className="text-left px-5 py-3 font-montserrat font-semibold text-el-charcoal">
                        Dose
                      </th>
                      <th className="text-right px-5 py-3 font-montserrat font-semibold text-el-green">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-100">
                      <td className="px-5 py-3 text-el-charcoal">Month 1</td>
                      <td className="px-5 py-3 text-el-text">0.25mg</td>
                      <td className="px-5 py-3 text-el-green font-semibold text-right">
                        $200
                      </td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-5 py-3 text-el-charcoal">Month 2</td>
                      <td className="px-5 py-3 text-el-text">0.5mg</td>
                      <td className="px-5 py-3 text-el-green font-semibold text-right">
                        $250
                      </td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-5 py-3 text-el-charcoal">Month 3</td>
                      <td className="px-5 py-3 text-el-text">1.0mg</td>
                      <td className="px-5 py-3 text-el-green font-semibold text-right">
                        $300
                      </td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-5 py-3 text-el-charcoal">Month 4</td>
                      <td className="px-5 py-3 text-el-text">1.7mg</td>
                      <td className="px-5 py-3 text-el-green font-semibold text-right">
                        $350
                      </td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-5 py-3 text-el-charcoal">Month 5+</td>
                      <td className="px-5 py-3 text-el-text">2.4mg</td>
                      <td className="px-5 py-3 text-el-green font-semibold text-right">
                        $400
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <PillButton href="/book">Book Appointment</PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: MEET DR. COOPER ===== */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionLabel
            label="M E E T &nbsp; T H E &nbsp; D O C T O R"
            headline="Dr. Mye Cooper, DO"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-el-text leading-relaxed mb-4">
                Dr. Mye Cooper is a board-certified physician and the founder of
                Elevation Medical Weight Loss. With a passion for making
                physician-supervised weight loss accessible and affordable, she
                built Elevation from the ground up as a family-owned practice.
              </p>
              <p className="text-el-text leading-relaxed mb-4">
                Dr. Cooper believes that everyone deserves access to safe,
                effective weight loss care — without the burden of long-term
                contracts or hidden fees. Her no-nonsense approach focuses on
                proven medical protocols tailored to each patient&apos;s unique
                needs.
              </p>
              <p className="text-el-text leading-relaxed mb-6">
                Under her leadership, Elevation has grown to 15 locations
                across Pittsburgh, Weirton, and Morgantown, helping thousands
                of patients achieve their weight loss goals.
              </p>
              <PillButton href="/book">Book Appointment</PillButton>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-96 rounded-2xl bg-el-light-gray flex items-center justify-center">
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
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: THE TEAM ===== */}
      <section className="bg-el-light-gray py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel
            label="O U R &nbsp; T E A M"
            headline="Meet the Elevation Team"
            body="A dedicated team of medical professionals committed to your success."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <TeamCard name="Dr. Mye Cooper" title="Founder & Medical Director" />
            <TeamCard name="Sarah Mitchell" title="Nurse Practitioner" />
            <TeamCard name="James Rivera" title="Physician Assistant" />
            <TeamCard name="Emily Chen" title="Clinical Director" />
            <TeamCard name="Michael Torres" title="Patient Coordinator" />
            <TeamCard name="Ashley Williams" title="Nurse Practitioner" />
            <TeamCard name="David Kim" title="Medical Assistant" />
            <TeamCard name="Rachel Foster" title="Office Manager" />
            <TeamCard name="Brandon Hayes" title="Telehealth Coordinator" />
            <TeamCard name="Lauren Murphy" title="Aesthetics Specialist" />
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: BRAND MARQUEE ===== */}
      <BrandMarquee />

      {/* ===== SECTION 8: LOCATIONS ===== */}
      <section className="bg-el-dark py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel
            label="O U R &nbsp; L O C A T I O N S"
            headline="15 Locations Near You"
            body="Visit us in person across the Pittsburgh region, Weirton, and Morgantown — or schedule a telehealth appointment from anywhere."
            dark
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <LocationCard name="Bridgeville" />
            <LocationCard name="Cranberry" tag="Best of 2025" />
            <LocationCard name="Greensburg" />
            <LocationCard name="Irwin" />
            <LocationCard name="McMurray" />
            <LocationCard name="Monroeville" />
            <LocationCard name="Moon Township" />
            <LocationCard name="Mt. Lebanon" />
            <LocationCard name="North Hills" />
            <LocationCard name="Pleasant Hills" tag="NEW" />
            <LocationCard name="Robinson" />
            <LocationCard name="Upper St. Clair" tag="NOW OPEN" />
            <LocationCard name="Washington" />
            <LocationCard name="Weirton" tag="Best of 2025" />
            <LocationCard name="Morgantown" />
          </div>
          <div className="text-center mt-10">
            <PillButton href="/locations" variant="outline">
              View All Locations
            </PillButton>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: VITAMIN INJECTIONS ===== */}
      <section className="bg-el-light-gray py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionLabel
            label="V I T A M I N &nbsp; I N J E C T I O N S"
            headline="Quick Boost Injections"
            body="Walk-in friendly at most locations. No appointment needed for injections."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <p className="font-cormorant text-3xl font-bold text-el-green mb-1">
                $8
              </p>
              <p className="font-montserrat font-bold text-el-charcoal text-sm mb-2">
                B12 Injection
              </p>
              <p className="text-el-text text-xs">
                Energy boost, metabolism support
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <p className="font-cormorant text-3xl font-bold text-el-green mb-1">
                $15
              </p>
              <p className="font-montserrat font-bold text-el-charcoal text-sm mb-2">
                Fat Burner (Lipo+)
              </p>
              <p className="text-el-text text-xs">
                Lipotropic fat-burning injection
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <p className="font-cormorant text-3xl font-bold text-el-green mb-1">
                $23
              </p>
              <p className="font-montserrat font-bold text-el-charcoal text-sm mb-2">
                B12 + Fat Burner Combo
              </p>
              <p className="text-el-text text-xs">
                Best of both — energy &amp; fat burning
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <p className="font-cormorant text-3xl font-bold text-el-green mb-1">
                $25
              </p>
              <p className="font-montserrat font-bold text-el-charcoal text-sm mb-2">
                Super Lipo
              </p>
              <p className="text-el-text text-xs">
                Enhanced lipotropic formula
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <p className="font-cormorant text-3xl font-bold text-el-green mb-1">
                $15
              </p>
              <p className="font-montserrat font-bold text-el-charcoal text-sm mb-2">
                Biotin Injection
              </p>
              <p className="text-el-text text-xs">
                Hair, skin &amp; nail support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 10: TELEHEALTH ===== */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel
            label="T E L E H E A L T H"
            headline="Virtual Visits Available"
            body="Can&apos;t make it in person? No problem. Elevation offers telehealth appointments for both new and returning patients. Get the same physician-supervised care from the comfort of your home."
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
              Learn More
            </PillButton>
          </div>
        </div>
      </section>

      {/* ===== SECTION 11: FINAL CTA ===== */}
      <CTABanner />
    </>
  );
}
