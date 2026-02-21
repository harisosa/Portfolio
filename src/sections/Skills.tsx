"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { SkillsBackground } from "@/features/skills/components";
import { easeDiamond, headerIn } from "@/features/skills/constants";
import { SkillsTable } from "@/features/skills/components/SkillTable";
import { Section } from "@/components/layout";

export const Skills: React.FC = () => {
  return (
    <Section
      id='skills'
      aria-labelledby="skills-compare-title"
      className="relative w-full overflow-hidden bg-black"
    >
      <SkillsBackground />

      <div className="relative mx-auto w-full">

        <motion.header
          className="mx-auto flex w-full max-w-245 flex-col items-center gap-4 text-center"
          variants={headerIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.95, ease: easeDiamond }}
        >
          <h2
            id="skills-compare-title"
            className="text-balance text-display-md lg:text-display-2xl font-semibold tracking-tight sm:text-5xl"
          >
            Not Your Typical Frontend Developer
          </h2>
          <p className="max-w-180 text-pretty text-sm lg:text-md leading-6 text-white/55 sm:text-base">
            I care about how it looks, how it works, and how it feels — all at once
          </p>
        </motion.header>
        <div className="mx-auto mt-10 w-full sm:mt-12">
          <SkillsTable className="max-w-305" />
        </div>
      </div>
    </Section>
  );
};