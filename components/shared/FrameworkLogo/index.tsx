"use client";

import Link from "next/link";
import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { RiNextjsFill, RiSvelteFill } from "react-icons/ri";
import { SiRedwoodjs, SiFlutter, SiKotlin, SiRefine } from "react-icons/si";
import { TbBrandSolidjs } from "react-icons/tb";

const icons = [
  {
    id: 1,
    name: "React",
    Logo: FaReact,
  },
  {
    id: 2,
    name: "NextJs",
    Logo: RiNextjsFill,
  },
  {
    id: 3,
    name: "Redwood",
    Logo: SiRedwoodjs,
  },
  {
    id: 4,
    name: "Flutter",
    Logo: SiFlutter,
  },
  {
    id: 5,
    name: "Kotlin",
    Logo: SiKotlin,
  },
  {
    id: 6,
    name: "Refine",
    Logo: SiRefine,
  },
  {
    id: 7,
    name: "SolidJs",
    Logo: TbBrandSolidjs,
  },
  {
    id: 8,
    name: "VueJs",
    Logo: IoLogoVue,
  },
  {
    id: 9,
    name: "Svelte",
    Logo: RiSvelteFill,
  },
  {
    id: 10,
    name: "React",
    Logo: FaReact,
  },
];
export default function FrameWorkLogo() {
  const [text, setText] = React.useState("any framework");

  return (
    <>
      <h2 className="text-3xl max-xl:text-center text-[#898989]">
        Use Supabase with <br />
        <span
          key={text}
          className="text-white inline-block animate-fade-in-top"
        >
          {text}
        </span>
      </h2>

      <div className="group grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 mr-3">
        {icons.map((icon) => (
          <Link
            key={icon.id}
            href="#"
            className="mx-auto group transition-opacity"
            onMouseLeave={(e) => {
              setText("any framework");
            }}
            onMouseEnter={(e) => {
              setText(icon.name);
            }}
          >
            <div className="hover:shadow m-1 rounded-md h-14 w-14 flex hover:border items-center justify-center transition-all text-foreground border-foreground group">
              {
                <icon.Logo
                  className={`w-8 h-8 text-white ${
                    text === icon.name
                      ? "opacity-100"
                      : text !== "any framework"
                      ? "opacity-50"
                      : "opacity-70"
                  }`}
                />
              }
            </div>
          </Link>
        ))}

        {/* <Link
          href="#"
          className="mx-auto group transition-opacity"
          onMouseLeave={(e) => {
            setText("any framework");
          }}
          onMouseEnter={(e) => {
            setText("React");
          }}
        >
          <div className="hover:shadow m-1 rounded-md h-16 w-16 flex group-hover:border items-center justify-center transition-all text-foreground border-foreground group">
            
          </div>
        </Link> */}

        {/* <Link href="#" className="mx-auto group transition-opacity">
          <div className="hover:shadow m-1 rounded-md h-16 w-16 flex group-hover:border items-center justify-center transition-all text-foreground border-foreground">
            
          </div>
        </Link> */}
        {/* <Link href="#" className="mx-auto group transition-opacity">
          <div className="hover:shadow m-1 rounded-md h-16 w-16 flex group-hover:border items-center justify-center transition-all text-foreground border-foreground">
            <SiRedwoodjs className="w-10 h-10 group-hover:opacity-100 text-white opacity-70" />
          </div>
        </Link> */}
        {/* <Link href="#" className="mx-auto group transition-opacity">
          <div className="hover:shadow m-1 rounded-md h-16 w-16 flex group-hover:border items-center justify-center transition-all text-foreground border-foreground">
            <SiFlutter className="w-10 h-10 group-hover:opacity-100 text-white opacity-70" />
          </div>
        </Link>
        <Link href="#" className="mx-auto group transition-opacity">
          <div className="hover:shadow m-1 rounded-md h-16 w-16 flex group-hover:border items-center justify-center transition-all text-foreground border-foreground">
            <SiKotlin className="w-10 h-10 group-hover:opacity-100 text-white opacity-70" />
          </div>
        </Link>
        <Link href="#" className="mx-auto group transition-opacity">
          <div className="hover:shadow m-1 rounded-md h-16 w-16 flex group-hover:border items-center justify-center transition-all text-foreground border-foreground">
            <RiSvelteFill className="w-10 h-10 group-hover:opacity-100 text-white opacity-70" />
          </div>
        </Link>
        <Link href="#" className="mx-auto group transition-opacity">
          <div className="hover:shadow m-1 rounded-md h-16 w-16 flex group-hover:border items-center justify-center transition-all text-foreground border-foreground">
            <TbBrandSolidjs className="w-10 h-10 group-hover:opacity-100 text-white opacity-70" />
          </div>
        </Link>
        <Link href="#" className="mx-auto group transition-opacity">
          <div className="hover:shadow m-1 rounded-md h-16 w-16 flex group-hover:border items-center justify-center transition-all text-foreground border-foreground">
            <IoLogoVue className="w-10 h-10 group-hover:opacity-100 text-white opacity-70" />
          </div>
        </Link>
        <Link href="#" className="mx-auto group transition-opacity">
          <div className="hover:shadow m-1 rounded-md h-16 w-16 flex group-hover:border items-center justify-center transition-all text-foreground border-foreground">
            <SiRefine className="w-10 h-10 group-hover:opacity-100 text-white opacity-70" />
          </div>
        </Link>
        <Link href="#" className="mx-auto group transition-opacity">
          <div className="hover:shadow m-1 rounded-md h-16 w-16 flex group-hover:border items-center justify-center transition-all text-foreground border-foreground">
            <TbBrandSolidjs className="w-10 h-10 group-hover:opacity-100 text-white opacity-70" />
          </div>
        </Link> */}
      </div>
    </>
  );
}
