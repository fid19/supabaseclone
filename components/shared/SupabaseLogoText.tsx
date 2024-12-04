import Image from "next/image";
import Logo from "@/app/assets/svgs/logo.svg";
import Link from "next/link";

export default function index({ className }: { className?: string }) {
  return (
    <Link href="#" className={`flex items-center gap-1 mr-6 ${className}`}>
      <Image src={Logo} height={24} width={24} alt="supabase logo" />
      <p className="font-circular font-bold text-white">supabase</p>
    </Link>
  );
}
