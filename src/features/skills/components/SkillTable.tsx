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
import { cardIn, easeDiamond, iconIn, SKILLS } from "../constants";


type Props = {
    className?: string;
};

const SheenOverlay: React.FC = () => {
    return (
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
    );
};

export const SkillsTable: React.FC<Props> = ({ className }) => {
    return (
        <motion.div
            className={cn(
                "relative mx-auto w-full",
                "rounded-[2px] border border-white/10 bg-black/35",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
            )}
            variants={cardIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.95, ease: easeDiamond }}
        >
            <div className="w-full overflow-x-hidden sm:overflow-x-auto">
                {/* IMPORTANT: jangan pakai min-w di mobile */}
                <div className="relative w-full">
                    <Table className="w-full table-fixed">
                        <TableHeader>
                            <TableRow className="border-white/10">
                                {/* Skill: paling lebar */}
                                <TableHead className="h-14 w-[58%] px-3 text-left text-sm font-semibold text-white/85 sm:h-16 sm:w-[44%] sm:px-10 sm:text-base">
                                    Skill
                                </TableHead>

                                {/* With Me: slim */}
                                <TableHead
                                    className={cn(
                                        "h-14 w-[22%] px-3 text-left text-sm font-semibold sm:h-16 sm:w-[28%] sm:px-10 sm:text-base",
                                        "bg-[#0b5860] text-white"
                                    )}
                                >
                                    With Me
                                </TableHead>

                                {/* Other: masih kebagian */}
                                <TableHead className="h-14 w-[20%] px-3 text-left text-sm font-semibold text-white/85 sm:h-16 sm:w-[28%] sm:px-10 sm:text-base">
                                    Other
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {SKILLS.map((row, idx) => (
                                <TableRow key={row.label} className="border-white/10">
                                    <TableCell className="h-14 px-3 text-sm text-white/80 sm:h-19 sm:px-10">
                                        {/* biar text skill wrap rapi di mobile */}
                                        <span className="block whitespace-normal leading-5">
                                            {row.label}
                                        </span>
                                    </TableCell>

                                    <TableCell className={cn("relative h-14 px-3 sm:h-19 sm:px-10", "bg-[#0b5860]")}>
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
                                            variants={iconIn}
                                            initial="hidden"
                                            whileInView="show"
                                            viewport={{ once: true, amount: 0.6 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 420,
                                                damping: 28,
                                                delay: 0.12 + idx * 0.035,
                                            }}
                                        >
                                            <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                                        </motion.span>
                                    </TableCell>

                                    <TableCell className="h-14 px-3 sm:h-19 sm:px-10">
                                        <motion.span
                                            className={cn(
                                                "inline-flex h-9 w-9 items-center justify-center rounded-full",
                                                "bg-white/10 text-white/50"
                                            )}
                                            initial={{ opacity: 0, scale: 0.9, y: 4, rotate: 6 }}
                                            whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                                            viewport={{ once: true, amount: 0.6 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 360,
                                                damping: 26,
                                                delay: 0.16 + idx * 0.03,
                                            }}
                                        >
                                            <X className="h-4 w-4 sm:h-5 sm:w-5" />
                                        </motion.span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {/* sheen overlay: desktop/tablet aja, mobile hide */}
                    <div className="hidden sm:block">
                        <SheenOverlay />
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-[2px] ring-1 ring-white/5" />
        </motion.div>
    );
};