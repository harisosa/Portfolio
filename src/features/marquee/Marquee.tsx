"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MarqueeItem } from "./MarqueeItem";
import type { MarqueeModel } from "@/types/marquee";

type MarqueeProps = {
  items: MarqueeModel[];
  className?: string;
  durationSec?: number;
};

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  className,
  durationSec = 55,
}) => {
  const loopItems = React.useMemo(() => [...items, ...items], [items]);

  return (
    <div className={cn("w-full overflow-hidden bg-[#108EA2] py-6", className)}>
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: durationSec, ease: "linear", repeat: Infinity }}
        style={{ willChange: "transform" }}
      >
        {loopItems.map((logo, i) => (
          <MarqueeItem key={`${logo.alt}-${i}`} src={logo.src} alt={logo.alt} />
        ))}
      </motion.div>
    </div>
  );
};

;