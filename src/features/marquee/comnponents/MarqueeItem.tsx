"use client";

import Image, { type StaticImageData } from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

type MarqueeItemProps = {
  src: StaticImageData;
  alt: string;
  className?: string;
};

export const MarqueeItem: React.FC<MarqueeItemProps> = ({
  src,
  alt,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center",
        "px-6",
        "opacity-70 transition-all duration-300 ease-out hover:opacity-100 hover:scale-[1.03]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        className={cn(
          "h-full w-auto object-contain select-none",
          "brightness-0 invert opacity-90"
        )}
        draggable={false}
        style={{ height: "clamp(2.13rem, 3.97vw, 3rem)" }}
      />
    </div>
  );
};