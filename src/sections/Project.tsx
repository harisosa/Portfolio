"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout";

import { PORTFOLIO_ITEMS } from "@/features/portfolio/constants/portfolio";
import { PortfolioCard } from "@/features/portfolio/components/PortfolioCard";
import { portfolioSectionVariants } from "@/features/portfolio/motion";

export const Project: React.FC = () => {
  return (
    <Section
      id="projects"
      className="relative w-full bg-black overflow-x-hidden"
    >

      <motion.div
        variants={portfolioSectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative w-full"
      >
        <div className="flex w-full flex-col items-center text-center">
          <h2 className="text-balance text-display-md lg:text-display-2xl font-bold tracking-tight text-white">
            Bridging Design and Development
          </h2>
          <p className="mt-4 text-pretty text-sm lg:text-md font-[400] leading-relaxed text-white/60">
            These are real projects where I implemented frontend interfaces with precision and attention to detail.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-5 sm:mt-14">
          {PORTFOLIO_ITEMS.map((it, idx) => (
            <PortfolioCard key={it.title} item={it} index={idx} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
};