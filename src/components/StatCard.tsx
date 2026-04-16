interface StatCardProps {
  stat: string;
  label: string;
}

export default function StatCard({ stat, label }: StatCardProps) {
  return (
    <div className="text-center p-6">
      <p className="font-cormorant text-5xl md:text-6xl font-bold text-el-green mb-2">
        {stat}
      </p>
      <p className="font-montserrat text-sm text-el-text uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}
