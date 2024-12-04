"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SupaBaseLogo from "@/components/shared/SupabaseLogoText";
import { useWindowSize } from "@/context/WindowSizeContext";
import { useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/constant";

export function MobileNavbar() {
  const { sizeRef } = useWindowSize();

  console.log(sizeRef.current);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <RxHamburgerMenu />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="flex flex-col bg-overlay max-h-screen h-screen !p-0"
        side="top"
      >
        <SheetHeader>
          <SheetTitle className="px-6 h-16 w-full flex justify-between items-center">
            <SupaBaseLogo className="!px-0" />
          </SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="grid gap-3 text-xs py-0 px-6 overflow-y-auto pb-24">
          {navLinks.map((link, _index) => {
            return (
              <Link
                key={_index}
                className="font-bold pl-1 pb-3 border-b border-white/10"
                href="#"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <SheetFooter className="absolute !flex !justify-between gap-2 px-6 bottom-0 h-auto w-full py-3 bg-black p-0! ">
          <SheetClose asChild>
            <Button
              type="submit"
              className="!basis-1/2 bg-overlay ring-1 ring-white/30 text-white hover:bg-overlay hover:!ring-white/50"
            >
              Sign In
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              type="submit"
              className="!basis-1/2 bg-green-700 text-white ring-1 inline-flex ring-green-400 hover:bg-green-600"
            >
              Start your project
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function NavbarLink() {
  return "";
}
