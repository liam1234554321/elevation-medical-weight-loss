interface TestimonialCardProps {
  quote: string;
  name: string;
}

export default function TestimonialCard({ quote, name }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <p className="text-el-text text-sm leading-relaxed italic mb-4">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="font-montserrat font-semibold text-el-charcoal text-sm">
        &mdash; {name}
      </p>
    </div>
  );
}
