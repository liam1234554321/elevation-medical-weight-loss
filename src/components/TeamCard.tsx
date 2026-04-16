interface TeamCardProps {
  name: string;
  title: string;
  image?: string;
}

export default function TeamCard({ name, title, image }: TeamCardProps) {
  return (
    <div className="text-center">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-el-light-gray overflow-hidden">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-el-green font-cormorant text-3xl font-bold">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}
      </div>
      <h3 className="font-montserrat font-bold text-el-charcoal text-sm">
        {name}
      </h3>
      <p className="font-montserrat text-el-text text-xs mt-1">{title}</p>
    </div>
  );
}
