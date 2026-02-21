// src/components/sections/hero/HeroCtaButton.tsx
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroCtaButtonProps = {
  className?: string;
};

export const HeroCtaButton: React.FC<HeroCtaButtonProps> = ({ className }) => {
  return (
    <Button
      type="button"
      className={cn(
        "h-12 w-full lg:w-52 justify-center gap-2bg-[#13a4b6] text-white hover:bg-[#1092a2] shadow-[0_18px_40px_rgba(19,164,182,0.22)]",
        className ?? "")
      }
    >
      <Image src="/icons/mail.svg" alt="Mail icon" width={16} height={16} />
      Hire Me
    </Button>
  );
};