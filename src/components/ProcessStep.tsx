interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export default function ProcessStep({
  number,
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-el-green/10 flex items-center justify-center">
        <span className="font-cormorant text-2xl font-bold text-el-green">
          {number}
        </span>
      </div>
      <div>
        <h3 className="font-montserrat font-bold text-el-charcoal text-lg mb-1">
          {title}
        </h3>
        <p className="text-el-text text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
