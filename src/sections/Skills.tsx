// src/components/SkillsComparisonSection.tsx
"use client";

import * as React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";

type SkillRow = { label: string };

const SKILLS: SkillRow[] = [
  { label: "React Expert" },
  { label: "Pixel Perfect" },
  { label: "TypeScript Proficiency" },
  { label: "Clean, Maintainable Code" },
  { label: "Performance Optimization" },
  { label: "Responsive Website" },
  { label: "UI Design Proficiency (Figma)" },
];

const easeDiamond = [0.16, 1, 0.3, 1] as const;

export const Skills: React.FC = () => {
  return (
    <section
      aria-labelledby="skills-compare-title"
      className={cn("relative w-full overflow-hidden bg-black text-white", "min-h-234.5")}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={cn(
            "absolute inset-0 opacity-[0.18]",
            "bg-[linear-gradient(to_right,rgba(45,212,191,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,212,191,0.22)_1px,transparent_1px)]",
            "bg-size-[44px_44px]"
          )}
        />
        <div
          className={cn(
            "absolute -left-65 top-35 h-190 w-190 rounded-full",
            "bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.26),transparent_62%)] blur-[2px]"
          )}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <div className="relative mx-auto w-full px-6 pb-20 pt-20 sm:px-10 lg:px-16">
        <motion.header
          className="mx-auto flex w-full max-w-245 flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: easeDiamond }}
        >
          <h2
            id="skills-compare-title"
            className="text-balance text-display-2xl font-semibold tracking-tight sm:text-5xl"
          >
            Not Your Typical Frontend Developer
          </h2>
          <p className="max-w-180 text-pretty text-md leading-6 text-white/55 sm:text-base">
            I care about how it looks, how it works, and how it feels — all at once
          </p>
        </motion.header>

        {/* Table */}
        <div className="mx-auto mt-12 w-full">
          <motion.div
            className={cn(
              "relative mx-auto w-full",
              "rounded-[2px] border border-white/10 bg-black/35",
              "shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
              "max-w-305"
            )}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: easeDiamond }}
          >
            <div className="w-full overflow-x-auto">
              <div className="min-w-245">
                <Table className="w-full">
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead className="h-16 w-[44%] px-10 text-left text-base font-semibold text-white/85">
                        Skill
                      </TableHead>

                      <TableHead
                        className={cn(
                          "h-16 w-[28%] px-10 text-left text-base font-semibold",
                          "bg-[#0b5860] text-white"
                        )}
                      >
                        With Me
                      </TableHead>

                      <TableHead className="h-16 w-[28%] px-10 text-left text-base font-semibold text-white/85">
                        Other
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {SKILLS.map((row, idx) => (
                      <TableRow key={row.label} className="border-white/10">
                        <TableCell className="h-19 px-10 text-sm text-white/80">
                          {row.label}
                        </TableCell>

                        <TableCell className={cn("relative h-19 px-10", "bg-[#0b5860]")}>
                          <span
                            aria-hidden
                            className={cn(
                              "pointer-events-none absolute inset-0 opacity-[0.14]",
                              "bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,transparent_40%,rgba(255,255,255,0.08)_64%,transparent_100%)]"
                            )}
                          />

                          <motion.span
                            className={cn(
                              "relative inline-flex h-9 w-9 items-center justify-center rounded-full",
                              "bg-white text-black"
                            )}
                            initial={{ opacity: 0, scale: 0.86, y: 6 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{
                              duration: 0.55,
                              ease: easeDiamond,
                              delay: 0.12 + idx * 0.035,
                            }}
                          >
                            <Check className="h-5 w-5" />
                          </motion.span>
                        </TableCell>

                        <TableCell className="h-19 px-10">
                          <motion.span
                            className={cn(
                              "inline-flex h-9 w-9 items-center justify-center rounded-full",
                              "bg-white/10 text-white/50"
                            )}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{
                              duration: 0.55,
                              ease: easeDiamond,
                              delay: 0.16 + idx * 0.03,
                            }}
                          >
                            <X className="h-5 w-5" />
                          </motion.span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-[2px] ring-1 ring-white/5" />

            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-[44%] w-[28%] overflow-hidden"
            >
              <motion.div
                className={cn(
                  "absolute -inset-y-8 -left-[55%] w-[60%] rotate-18",
                  "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]"
                )}
                animate={{ x: ["-10%", "220%"] }}
                transition={{
                  duration: 5.8,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 1.8,
                }}
              />
              <motion.div
                className={cn(
                  "absolute -inset-y-10 -left-[65%] w-[36%] rotate-18",
                  "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent)]"
                )}
                animate={{ x: ["-20%", "240%"] }}
                transition={{
                  duration: 7.2,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 2.6,
                  delay: 1.1,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};