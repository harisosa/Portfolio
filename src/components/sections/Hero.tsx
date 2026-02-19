"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Mail } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <Section
      id="hero"
      className="relative overflow-hidden bg-black"
      containerClassName="relative z-10"
      isHero
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/background.svg"
          alt=""
          fill
          priority
          className="object-cover object-left"
        />
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(90deg,
              rgba(0,0,0,0)_0%,
              rgba(0,0,0,0)_48%,
              rgba(0,0,0,0.18)_58%,
              rgba(0,0,0,0.55)_72%,
              rgba(0,0,0,0.82)_86%,
              rgba(0,0,0,0.92)_100%
            )]
          "
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0)_22%,rgba(0,0,0,0)_78%,rgba(0,0,0,0.45)_100%)]" />
      </div>

      <div className="relative flex min-h-180 flex-col-reverse items-start justify-center gap-10 md:flex-row md:items-center">

        <div className="w-full md:w-[58%] md:pr-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-white/80 mb-8 sm:text-md"
          >
            Hi. I&apos;m Edwin Anderson
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-[56px] lg:text-[96px] font-extrabold leading-[0.95] tracking-[-0.02em] text-white sm:text-[64px] md:text-[78px]"
          >
            FRONT<span className="ml-2 font-normal italic text-white/90">END</span>
            <br />
            DEVELOPER
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg font-[400] spacing-1.5 text-white/55 sm:text-base"
          >
            Passionate about frontend development, I focus on crafting digital products that are visually
            polished, performance-optimized, and deliver a consistent experience across all platforms.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 
            inline-flex 
            w-full
            h-12 lg:w-52 items-center justify-center 
             bg-[#13a4b6]
             text-md font-semibold
              text-white shadow-[0_18px_40px_rgba(19,164,182,0.22)]"
          >
            <Image src='/icons/mail.svg' alt="Mail icon" width={16} height={16} className="mr-2" />
            Hire Me
          </motion.button>
        </div>

        <div className="flex w-full items-start justify-center md:w-[42%] md:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
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
                    ">
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
