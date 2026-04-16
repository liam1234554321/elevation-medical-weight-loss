import Image from "next/image";

interface HeroBannerProps {
  title: string;
  subtitle: string;
}

export default function HeroBanner({ title, subtitle }: HeroBannerProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
      <Image
        src="/images/Pittsburgh Scenic.webp"
        alt="Pittsburgh skyline at night with bridges and river"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="font-cormorant text-4xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="font-montserrat text-lg md:text-xl text-white/90">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
