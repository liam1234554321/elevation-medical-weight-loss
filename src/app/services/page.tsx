import { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import SectionLabel from "@/components/SectionLabel";
import GreenBanner from "@/components/GreenBanner";
import PillButton from "@/components/PillButton";
import { Stethoscope, Pill, Salad, Syringe } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Pricing | Elevation Medical Weight Loss",
  description:
    "Explore our physician-supervised weight loss programs. Oral medications from $90/mo, Semaglutide from $200/mo, HCG, TRT, Sermorelin, vitamins, and Botox.",
};

const vitaminInjections = [
  {
    name: "B12 Injection",
    price: "$8/wk",
    description:
      "A quick energy boost that supports metabolism and helps fight fatigue. Our most popular add-on injection.",
  },
  {
    name: "Fat Burner (Lipo+)",
    price: "$15/wk",
    description:
      "Lipotropic fat-burning injection with amino acids that help your body break down and metabolize fat more efficiently.",
  },
  {
    name: "B12 + Fat Burner Combo",
    price: "$23/wk",
    description:
      "The best of both — energy support from B12 plus the fat-burning benefits of our Lipo+ injection in one visit.",
  },
  {
    name: "Super B-Complex",
    price: "$23/wk",
    description:
      "Enhanced B-vitamin complex for maximum energy, immune support, and metabolism. Great for patients who need an extra boost.",
  },
  {
    name: "Vitamin D3",
    price: "$15/wk",
    description:
      "Supports bone health, immune function, and mood regulation. Especially beneficial during fall and winter months.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <HeroBanner
        title="Services &amp; Pricing"
        subtitle="Transparent pricing. No contracts. No hidden fees."
      />

      {/* ===== GREEN BANNER ===== */}
      <GreenBanner text="All plans include medical evaluation, personalized medication, nutrition guidance, and optional vitamin injections." />

      {/* ===== WEIGHT LOSS PROGRAMS ===== */}
      <section className="bg-white py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="W E I G H T &nbsp; L O S S &nbsp; P R O G R A M S"
            headline="Our Core Programs"
            body="Every program is physician-supervised and includes a medical evaluation at each visit."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              name="Oral Diet Medications"
              price="$90 – $170"
              description="Phentermine 37.5mg with chromium supplement. 30-day supply for $90 or 60-day supply for $170. Our most affordable quick-start option for physician-supervised weight loss."
              tag="Most Popular"
            />
            <ServiceCard
              name="Semaglutide Injections"
              price="From $200/mo"
              description="Weekly GLP-1 peptide injection that controls appetite and supports sustained weight loss. Dose-dependent pricing: Month 1 at $200 (0.25mg) up to Month 5+ at $400 (2.4mg)."
              tag="GLP-1"
            />
            <ServiceCard
              name="HCG Rapid Fat Loss"
              price="$425/30 days"
              description="Daily injections with B12 and Lipo+ fat burner included at no extra charge. Our most aggressive physician-supervised fat loss program for rapid results."
            />
            <ServiceCard
              name="Testosterone Therapy (TRT)"
              price="From $450"
              description="Full testosterone replacement therapy. 3-month plan for $450 or 6-month plan for $875. All medication included. Optional HCG, Cialis, and Viagra add-ons available."
              tag="Men&apos;s Health"
            />
            <ServiceCard
              name="Sermorelin Anti-Aging"
              price="$235/30 days"
              description="Daily anti-aging peptide injections that support growth hormone production. Benefits include improved recovery, body composition, sleep quality, and energy levels."
            />
          </div>
          <div className="text-center mt-10">
            <PillButton href="/book">Book Appointment</PillButton>
          </div>
        </div>
      </section>

      {/* ===== SEMAGLUTIDE PRICING DETAIL ===== */}
      <section className="bg-el-light-gray py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="S E M A G L U T I D E &nbsp; D E T A I L"
            headline="Semaglutide Pricing Breakdown"
            body="Our most effective program for sustained weight loss. Doses increase gradually over 5 months for optimal results with minimal side effects."
          />
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-el-green/10">
                    <th className="text-left px-5 py-4 font-montserrat font-semibold text-el-charcoal">
                      Month
                    </th>
                    <th className="text-left px-5 py-4 font-montserrat font-semibold text-el-charcoal">
                      Weekly Dose
                    </th>
                    <th className="text-right px-5 py-4 font-montserrat font-semibold text-el-green">
                      Monthly Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="px-5 py-4 text-el-charcoal font-medium">Month 1</td>
                    <td className="px-5 py-4 text-el-text">0.25mg</td>
                    <td className="px-5 py-4 text-el-green font-semibold text-right">$200</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="px-5 py-4 text-el-charcoal font-medium">Month 2</td>
                    <td className="px-5 py-4 text-el-text">0.5mg</td>
                    <td className="px-5 py-4 text-el-green font-semibold text-right">$250</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="px-5 py-4 text-el-charcoal font-medium">Month 3</td>
                    <td className="px-5 py-4 text-el-text">1.0mg</td>
                    <td className="px-5 py-4 text-el-green font-semibold text-right">$300</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="px-5 py-4 text-el-charcoal font-medium">Month 4</td>
                    <td className="px-5 py-4 text-el-text">1.7mg</td>
                    <td className="px-5 py-4 text-el-green font-semibold text-right">$350</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-el-green/5">
                    <td className="px-5 py-4 text-el-charcoal font-medium">Month 5+</td>
                    <td className="px-5 py-4 text-el-text">2.4mg</td>
                    <td className="px-5 py-4 text-el-green font-bold text-right">$400</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
              <p className="text-el-text text-sm leading-relaxed">
                <span className="font-montserrat font-semibold text-el-charcoal">14-Day Restart Policy:</span>{" "}
                If you miss more than 14 days between injections, your dose may need to be
                restarted at a lower level for safety. Please contact your provider if
                you&apos;ve missed a scheduled injection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VITAMIN INJECTIONS ===== */}
      <section className="bg-white py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="V I T A M I N &nbsp; I N J E C T I O N S"
            headline="Quick Boost Injections"
            body="Walk-in friendly at most locations. No appointment needed for vitamin injections."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vitaminInjections.map((injection) => (
              <div
                key={injection.name}
                className="bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-8 border border-gray-100 text-center"
              >
                <p className="font-cormorant text-3xl font-bold text-el-green mb-1">
                  {injection.price}
                </p>
                <h3 className="font-montserrat font-bold text-el-charcoal text-base mb-3">
                  {injection.name}
                </h3>
                <p className="text-el-text text-sm leading-relaxed">
                  {injection.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTOX ===== */}
      <section className="bg-el-light-gray py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="A E S T H E T I C S"
            headline="Botox"
            body="Administered by trained medical professionals at select Elevation locations."
          />
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <p className="font-cormorant text-3xl font-bold text-el-green mb-1">
                  $13
                </p>
                <p className="font-montserrat font-bold text-el-charcoal text-sm mb-2">
                  Per Unit
                </p>
                <p className="text-el-text text-xs">Standard pricing</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <p className="font-cormorant text-3xl font-bold text-el-green mb-1">
                  $1,100
                </p>
                <p className="font-montserrat font-bold text-el-charcoal text-sm mb-2">
                  100-Unit Package
                </p>
                <p className="text-el-text text-xs">Save $200</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <p className="font-cormorant text-3xl font-bold text-el-green mb-1">
                  $2,000
                </p>
                <p className="font-montserrat font-bold text-el-charcoal text-sm mb-2">
                  200-Unit Package
                </p>
                <p className="text-el-text text-xs">Save $600</p>
              </div>
            </div>
            <p className="text-el-text text-sm text-center mt-6 leading-relaxed">
              Packages are shareable — bring a friend and split the savings.
              Schedule a consultation to discuss your treatment plan.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TRT ADD-ONS ===== */}
      <section className="bg-white py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="T R T &nbsp; A D D - O N S"
            headline="Testosterone Therapy Extras"
            body="Optional add-ons available for TRT patients."
          />
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-8 border border-gray-100">
                <h3 className="font-montserrat font-bold text-el-charcoal text-lg mb-2">
                  Cialis
                </h3>
                <p className="font-montserrat font-bold text-el-green text-xl mb-3">
                  From $70/mo
                </p>
                <p className="text-el-text text-sm leading-relaxed">
                  5mg daily — $70/month. 10mg daily — $100/month. Prescribed as part
                  of your TRT plan.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-8 border border-gray-100">
                <h3 className="font-montserrat font-bold text-el-charcoal text-lg mb-2">
                  Viagra
                </h3>
                <p className="font-montserrat font-bold text-el-green text-xl mb-3">
                  $5/tablet
                </p>
                <p className="text-el-text text-sm leading-relaxed">
                  100mg tablets available as needed. Prescribed as part of your TRT plan.
                </p>
              </div>
            </div>
            <p className="text-el-text text-sm text-center mt-6 leading-relaxed">
              Optional HCG add-on is also available for TRT patients. Ask your provider for details.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHAT EVERY VISIT INCLUDES ===== */}
      <section className="bg-el-light-gray py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="E V E R Y &nbsp; V I S I T"
            headline="What Every Visit Includes"
            body="No matter which program you choose, every visit at Elevation includes these core services."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                <Stethoscope className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-base mb-2">
                Medical Evaluation
              </h3>
              <p className="text-el-text text-sm leading-relaxed">
                A licensed PA or NP reviews your progress, vitals, and overall
                health at every visit.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                <Pill className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-base mb-2">
                Personalized Medication
              </h3>
              <p className="text-el-text text-sm leading-relaxed">
                Your medication is adjusted based on your progress and goals. No
                generic one-size-fits-all prescriptions.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                <Salad className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-base mb-2">
                Nutrition &amp; Exercise Guidance
              </h3>
              <p className="text-el-text text-sm leading-relaxed">
                Practical nutrition and exercise tips tailored to your lifestyle,
                goals, and current fitness level.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-el-green/10 flex items-center justify-center">
                <Syringe className="w-7 h-7 text-el-green" />
              </div>
              <h3 className="font-montserrat font-bold text-el-charcoal text-base mb-2">
                Optional Vitamin Injections
              </h3>
              <p className="text-el-text text-sm leading-relaxed">
                Add B12, Fat Burner, or other vitamin injections to any visit
                for an extra energy and metabolism boost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTABanner />
    </>
  );
}
