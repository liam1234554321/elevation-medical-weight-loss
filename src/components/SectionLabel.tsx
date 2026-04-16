interface SectionLabelProps {
  label: string;
  headline: string;
  body?: string;
  dark?: boolean;
}

export default function SectionLabel({
  label,
  headline,
  body,
  dark = false,
}: SectionLabelProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <p
        className={`text-xs font-montserrat font-semibold tracking-[0.25em] uppercase mb-3 ${
          dark ? "text-gray-400" : "text-el-text"
        }`}
      >
        {label}
      </p>
      <h2
        className={`font-cormorant text-4xl md:text-5xl font-bold text-el-green mb-4`}
      >
        {headline}
      </h2>
      {body && (
        <p
          className={`text-base leading-relaxed ${
            dark ? "text-gray-300" : "text-el-text"
          }`}
        >
          {body}
        </p>
      )}
    </div>
  );
}
