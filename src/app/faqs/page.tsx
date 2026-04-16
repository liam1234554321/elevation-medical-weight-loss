import { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import SectionLabel from "@/components/SectionLabel";
import GreenBanner from "@/components/GreenBanner";
import PillButton from "@/components/PillButton";

export const metadata: Metadata = {
  title: "FAQs | Elevation Medical Weight Loss",
  description:
    "Frequently asked questions about Elevation Medical Weight Loss programs, pricing, insurance, and more.",
};

const generalFaqs = [
  {
    q: "What does a typical visit include?",
    a: "Every visit at Elevation includes a medical evaluation by a licensed PA or NP, personalized medication adjustments, nutrition and exercise guidance, and optional vitamin injections. Your provider reviews your progress and tailors your plan at each visit.",
  },
  {
    q: "Do I need a referral?",
    a: "No referral is needed. You can schedule an appointment directly or walk in at most locations. We welcome both new and returning patients without any referral requirements.",
  },
  {
    q: "Do you accept insurance?",
    a: "Elevation is a cash-pay clinic with transparent pricing. We do not bill insurance, which allows us to keep costs low and predictable. No surprise bills, no insurance headaches. Plans start at just $90/month.",
  },
  {
    q: "Are there contracts or hidden fees?",
    a: "Absolutely not. No contracts, no start-up fees, no enrollment fees, no hidden costs. You pay only for the services you receive, and our pricing is always transparent and upfront.",
  },
  {
    q: "How much weight can I expect to lose?",
    a: "Results vary by individual and program. Many patients on our semaglutide program lose 10-20% of their body weight over several months. Your provider will set realistic expectations based on your health, goals, and chosen program.",
  },
  {
    q: "Is telehealth available?",
    a: "Yes! We offer telehealth appointments for both new and returning patients. You can receive the same physician-supervised care from the comfort of your home. Telehealth is available for all programs including semaglutide and oral medications.",
  },
  {
    q: "What medications do you prescribe?",
    a: "Our providers prescribe a range of proven weight loss medications including Phentermine, Semaglutide (GLP-1), HCG, Sermorelin, and Testosterone Replacement Therapy (TRT). Your medication is selected based on your medical history, goals, and provider recommendations.",
  },
  {
    q: "How often do I need to come in?",
    a: "Visit frequency depends on your program. Most patients visit monthly, though some programs may require more frequent visits during the initial phase. Your provider will outline your schedule at your first appointment.",
  },
];

const semaglutideFaqs = [
  {
    q: "What are the common side effects of semaglutide?",
    a: "The most common side effects are mild nausea, which typically improves as your body adjusts to the medication. Some patients may also experience mild constipation or decreased appetite. Our gradual dose-escalation protocol is designed to minimize side effects.",
  },
  {
    q: "How does the semaglutide dosing schedule work?",
    a: "We start at a low dose of 0.25mg per week (Month 1) and gradually increase over 5 months to a maintenance dose of 2.4mg per week (Month 5+). This slow escalation helps your body adjust and minimizes side effects. Pricing increases with dose: $200 at Month 1 up to $400 at Month 5+.",
  },
  {
    q: "What happens if I miss doses or stop temporarily?",
    a: "If you miss more than 14 days between injections, your dose may need to be restarted at a lower level for safety. This is our 14-day restart policy. Please contact your provider if you have missed a scheduled injection so we can adjust your plan accordingly.",
  },
  {
    q: "How long do I need to take semaglutide?",
    a: "Treatment duration varies by patient. Many patients see significant results within 3-6 months. Your provider will work with you to determine the right timeline based on your goals and progress. There are no long-term contracts — you can stop at any time.",
  },
];

const pricingFaqs = [
  {
    q: "Why are your prices so affordable?",
    a: "As a cash-pay clinic, we don&apos;t deal with insurance billing overhead, which keeps our costs low. We also believe that weight loss care should be accessible to everyone — not just those with generous insurance plans. Our family-owned model means no corporate markups.",
  },
  {
    q: "Are there any additional costs beyond the listed prices?",
    a: "No. Our listed prices include everything: the medical evaluation, medication, and provider visit. Vitamin injections are optional add-ons with transparent pricing. There are no hidden fees, enrollment charges, or surprise costs of any kind.",
  },
  {
    q: "Can I switch programs if one isn&apos;t working for me?",
    a: "Absolutely. Since there are no contracts, you&apos;re free to switch programs at any time. Your provider will help you find the right fit based on your results and goals. Many patients start with oral medications and transition to semaglutide, or vice versa.",
  },
];

export default function FAQsPage() {
  return (
    <>
      <HeroBanner
        title="Frequently Asked Questions"
        subtitle="Straight answers. No fine print."
      />

      {/* ===== GENERAL FAQS ===== */}
      <section className="bg-white py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="G E N E R A L"
            headline="Common Questions"
            body="Everything you need to know about visiting Elevation Medical Weight Loss."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {generalFaqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-montserrat font-bold text-el-charcoal text-base hover:text-el-green transition-colors">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 text-el-green text-xl group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-el-text text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEMAGLUTIDE FAQS ===== */}
      <section className="bg-el-light-gray py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="S E M A G L U T I D E"
            headline="Semaglutide Questions"
            body="Specific questions about our GLP-1 injection program."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {semaglutideFaqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-montserrat font-bold text-el-charcoal text-base hover:text-el-green transition-colors">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 text-el-green text-xl group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-el-text text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <PillButton href="/services" variant="green-outline">
              View Semaglutide Pricing
            </PillButton>
          </div>
        </div>
      </section>

      {/* ===== PRICING FAQS ===== */}
      <section className="bg-white py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel
            label="P R I C I N G"
            headline="Pricing &amp; Payment Questions"
            body="We believe in complete transparency with our pricing."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {pricingFaqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-montserrat font-bold text-el-charcoal text-base hover:text-el-green transition-colors">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 text-el-green text-xl group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-el-text text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GREEN BANNER ===== */}
      <GreenBanner
        text="Still have questions? Call us or visit any of our 15 locations!"
        ctaText="Contact Us"
        ctaHref="/contact"
      />

      {/* ===== CTA ===== */}
      <CTABanner />
    </>
  );
}
