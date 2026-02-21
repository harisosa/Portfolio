"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PortfolioItem } from "../type";
import { EASE_OUT, portfolioCardVariants } from "../motion";

type Props = { item: PortfolioItem; index: number };

export const PortfolioCard: React.FC<Props> = ({ item, index }) => {
  return (
    <motion.div
      custom={index}
      variants={portfolioCardVariants}
      className={cn(
        "group shrink-0",
        "w-[min(--spacing(90),100%)]",
        "aspect-square",
        "lg:w-93 lg:aspect-square"
      )}
    >
      <Card className="rounded-2xl border-white/10 bg-transparent p-0 shadow-none">
        <div className="relative overflow-hidden rounded-2xl">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(600px 260px at 50% 0%, rgba(255,255,255,0.14), transparent 55%)",
            }}
          />

          <motion.div
            whileHover={{ y: -2, scale: 1.005 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className={cn("relative w-full h-full bg-black")}
          >
            <Image
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
              priority={false}
            />

            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              initial={{ opacity: 0.75 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 22%, transparent 55%)",
              }}
            />
          </motion.div>
        </div>
      </Card>

      <div className="mt-6">
        <div className="text-lg font-medium text-white">{item.title}</div>
        <div className="mt-2 text-sm text-white/45">{item.year}</div>
      </div>
    </motion.div>
  );
};