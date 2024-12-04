import { TriangleUpIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { GoTriangleUp } from "react-icons/go";
import { IoIosArrowRoundUp } from "react-icons/io";
import { RiNextjsFill, RiSvelteFill } from "react-icons/ri";
import { RxTriangleUp } from "react-icons/rx";

export default function ListCard() {
  return (
    <Link
      href="#"
      className="group border rounded-xl border-overlay col-span-12 h-full lg:col-span-6 xl:col-span-4 flex items-stretch flex-col"
    >
      <div className="flex justify-center items-center aspect-[3/1] gap-4">
        <RiNextjsFill className="h-10 w-auto" />
        <RiSvelteFill className="h-10 w-auto" />
        <RxTriangleUp className="h-10 w-auto" />
      </div>
      <div className="p-5 bg-overlay/40 border-t-overlay border-t">
        <h1 className="mb-4 text-lg font-bold">Stripe Subscription Started</h1>
        <p className="text-[#898989] text-normal">
          The all-in-one subscription starter kit for high-performance SaaS
          applications, powered by Stripe, Supabase, and Vercel.
        </p>
      </div>
      <div>
        <div className="p-5 bg-overlay/40 pt-0 flex gap-1">
          <p className="text-xs text-[#898989] group-hover:text-white">
            View Template
          </p>
          <IoIosArrowRoundUp className="text-[#898989] group-hover:text-white group-hover:animate-fade-in-top !rotate-45" />
        </div>
      </div>
    </Link>
  );
}
