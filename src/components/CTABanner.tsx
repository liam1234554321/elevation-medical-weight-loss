import Image from "next/image";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative w-full py-24 px-4">
      <Image
        src="/images/Pittsburgh Scenic.webp"
        alt="Pittsburgh skyline at night with bridges and river"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
          Start Your Journey Today
        </h2>
        <p className="font-montserrat text-white/90 text-lg mb-8">
          Customizable plans from $90/month. No contracts. No hidden fees.
          Just results.
        </p>
        <Link
          href="/book"
          className="inline-block bg-white text-el-green font-montserrat font-semibold text-sm px-10 py-4 rounded-full hover:bg-green-50 transition-colors uppercase tracking-wide border border-gray-200"
        >
          Book Appointment
        </Link>
      </div>
    </section>
  );
}
