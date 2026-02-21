"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { HeroBackground } from "../features/hero/components/HeroBackground";
import { cardIn, fadeUp, fadeUpFast } from "@/features/hero/motion";
import { MotionButton } from "@/components/ui/motion-button";
import MailIcon from '@/../public/icons/mail.svg'


export const Hero: React.FC = () => {

  return (
    <Section
      id="hero"
      className="relative overflow-hidden bg-black"
      containerClassName="relative z-10 "
      isHero
    >
      <HeroBackground />

      <div className="relative flex min-h-180 flex-col-reverse items-start justify-center gap-10 md:flex-row md:items-center
      ps-5 pe-2.75
      ">
        <div className="w-full md:w-[58%] md:pr-10">
          <motion.p
            {...fadeUpFast(0, 10)}
            className="text-xl text-white/80 mb-8 sm:text-md"
          >
            Hi. I&apos;m Edwin Anderson
          </motion.p>

          <motion.h1
            {...fadeUp(0.05, 14)}
            className="text-[56px] lg:text-[96px] font-extrabold leading-[0.95] tracking-[-0.02em] text-white sm:text-[64px] md:text-[78px]"
          >
            FRONT<span className="ml-2 font-normal italic text-white/90">END</span>
            <br />
            DEVELOPER
          </motion.h1>

          <motion.p
            {...fadeUp(0.12, 12)}
            className="mt-6 text-lg font-[400] spacing-1.5 text-white/55 sm:text-base"
          >
            Passionate about frontend development, I focus on crafting digital products that are visually
            polished, performance-optimized, and deliver a consistent experience across all platforms.
          </motion.p>

        <MotionButton icon={MailIcon} title="Hire Me" className="lg:w-52" />
        </div>

        <div className="flex w-full items-start justify-center md:w-[42%] md:justify-end">
          <motion.div
            {...cardIn(0.18)}
            className="
                      relative self-start
                      aspect-341/671
                      w-63
                      sm:w-70
                      md:w-75
                      lg:w-[320px]
                      xl:w-85.25  
                      2xl:w-90
                      -mt-4 sm:-mt-6 md:-mt-32
                    "
          >
            <Image
              src="/images/photo-card.svg"
              alt="photo card"
              fill
              priority
              className="object-contain object-top"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};