"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Section } from "@/components/layout";
import { ContactFormCard, ContactInfo } from "@/features/contact/components";
import { CONTACT_META } from "@/features/contact/constants/contact";

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -bottom-24 left-1/2 h-130 w-205 -translate-x-1/2 rounded-full bg-teal-500/20 blur-[90px]" />
      </div>

      <div className={cn("relative flex w-full flex-col gap-10 xl:flex-row xl:gap-12")}>
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
  );
};