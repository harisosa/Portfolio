"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Section } from "@/components/layout";
import { ContactFormCard, ContactInfo } from "@/features/contact/components";
import { CONTACT_META } from "@/features/contact/constants/contact";

export const Contact: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative min-h-225">

        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#020617]" />
          <div
            className="
              absolute inset-0
              mask-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_95%)]
              [-webkit-mask-image:linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_95%)]
            "
          >
            <Image
              src="/background/glass-board.svg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-bottom opacity-[0.28]"
            />
          </div>
          <div
            className="
              absolute inset-0
              bg-[linear-gradient(180deg,rgba(27,178,201,0)_32.79%,rgba(27,178,201,0.75)_139.81%)]
            "
          />
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(900px_560px_at_85%_100%,rgba(45,212,191,0.55),transparent_60%)]
            "
          />

          <div className="absolute inset-0 bg-[radial-gradient(900px_650px_at_0%_50%,rgba(2,6,23,0.82),transparent_62%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_650px_at_100%_50%,rgba(2,6,23,0.72),transparent_64%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45),transparent_42%)]" />
        </div>


        <Section id="contact" className="relative z-10">
          <div className={cn("flex w-full flex-col gap-10 xl:flex-row xl:gap-12")}>
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full xl:max-w-145"
            >
              <ContactFormCard />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
              className="flex min-h-0 w-full flex-col"
            >
              <div className="flex-1">
                <ContactInfo meta={CONTACT_META} />
              </div>

              <div className="mt-10 xl:mt-auto">
                <div className="text-[44px] font-extrabold tracking-[0.08em] text-white/95 sm:text-[54px] xl:text-[64px]">
                  GET IN TOUCH
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>
    </div>
  );
};