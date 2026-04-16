import { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";

export const metadata: Metadata = {
  title: "Privacy Policy | Elevation Medical Weight Loss",
  description: "Privacy policy for Elevation Medical Weight Loss.",
};

export default function PrivacyPage() {
  return (
    <>
      <HeroBanner
        title="Privacy Policy"
        subtitle="Your privacy matters to us."
      />
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto prose prose-sm text-el-text">
          <p className="leading-relaxed mb-4">
            Elevation Medical Weight Loss respects your privacy and is committed
            to protecting your personal information. This page will be updated
            with our full privacy policy.
          </p>
          <p className="leading-relaxed mb-4">
            For questions about our privacy practices, please contact us at{" "}
            <a
              href="mailto:info@elevationweightloss.com"
              className="text-el-green hover:underline"
            >
              info@elevationweightloss.com
            </a>
            .
          </p>
          <p className="text-xs text-gray-400 mt-8">
            Last updated: April 2026
          </p>
        </div>
      </section>
    </>
  );
}
