import { MapPin } from "lucide-react";

interface LocationCardProps {
  name: string;
  tag?: string;
}

export default function LocationCard({ name, tag }: LocationCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 flex items-center gap-3 hover:bg-white/15 transition-colors">
      <MapPin className="w-5 h-5 text-el-green flex-shrink-0" />
      <div className="flex-1">
        <p className="font-montserrat font-semibold text-white text-sm">
          {name}
        </p>
      </div>
      {tag && (
        <span className="bg-el-green text-white text-[10px] font-montserrat font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
          {tag}
        </span>
      )}
    </div>
  );
}
