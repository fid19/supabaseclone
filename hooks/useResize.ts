"use client";
import { singleton } from "@/utils/singleton";
import React, { useEffect } from "react";

export const resizeHook = () => {
  let size = 0;

  if (typeof window !== "undefined") {
    size = window.innerWidth;
  }

  const sizeRef = React.useRef<number>(size);

  useEffect(() => {
    const screenSize = (event: Event) => {
      const windowSize = window.innerWidth;
      sizeRef.current = windowSize;
    };

    window.addEventListener("resize", screenSize);

    return () => window.removeEventListener("resize", screenSize);
  }, []);

  return sizeRef;
};
