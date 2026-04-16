import Link from "next/link";

interface GreenBannerProps {
  text: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function GreenBanner({ text, ctaText, ctaHref }: GreenBannerProps) {
  return (
    <section className="bg-el-green py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-montserrat text-white text-lg md:text-xl font-semibold">
          {text}
        </p>
        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className="inline-block mt-4 bg-white text-el-green font-montserrat font-semibold text-sm px-8 py-3 rounded-full hover:bg-green-50 transition-colors uppercase tracking-wide"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
