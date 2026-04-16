import Link from "next/link";

interface PillButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline" | "green-outline";
}

export default function PillButton({
  children,
  href,
  variant = "primary",
}: PillButtonProps) {
  const base =
    "inline-block rounded-full px-8 py-3 font-montserrat font-semibold text-sm tracking-wide uppercase transition-all duration-200 text-center";

  const variants = {
    primary:
      "bg-white text-el-green border border-gray-200 hover:bg-green-50 hover:border-el-green",
    outline:
      "bg-transparent text-white border border-white hover:bg-white/10",
    "green-outline":
      "bg-transparent text-el-green border border-el-green hover:bg-el-green hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
