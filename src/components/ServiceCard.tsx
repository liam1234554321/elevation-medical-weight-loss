interface ServiceCardProps {
  name: string;
  price: string;
  description: string;
  tag?: string;
}

export default function ServiceCard({
  name,
  price,
  description,
  tag,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col">
      {tag && (
        <span className="inline-block self-start bg-el-green/10 text-el-green text-xs font-montserrat font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
          {tag}
        </span>
      )}
      <h3 className="font-montserrat font-bold text-el-charcoal text-lg mb-1">
        {name}
      </h3>
      <p className="font-montserrat font-bold text-el-green text-xl mb-3">
        {price}
      </p>
      <p className="text-el-text text-sm leading-relaxed flex-1">
        {description}
      </p>
    </div>
  );
}
