export default function BrandMarquee() {
  const text = "ELEVATION";
  const separator = " \u00B7 ";
  const repeated = Array(12)
    .fill(`${text}${separator}`)
    .join("");

  return (
    <section className="bg-el-green overflow-hidden py-6">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="font-cormorant text-3xl md:text-4xl font-bold text-white tracking-widest">
          {repeated}
        </span>
        <span className="font-cormorant text-3xl md:text-4xl font-bold text-white tracking-widest">
          {repeated}
        </span>
      </div>
    </section>
  );
}
