'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Dialog } from "radix-ui";
import { useState } from "react";
import { NAV_ITEMS } from "@/constants";
import Image from "next/image";

export const MobileNavbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            className="flex 
            w-full 
            items-center 
            justify-between px-5 py-4 md:hidden
            bg-black/55
            rounded-full"
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{ pointerEvents: open ? "none" : "auto" }}
        >
            <a href="#hero" className="text-lg font-semibold text-white">
                Edwin
            </a>

            {!open ? (
                <button
                    type="button" aria-label="Open menu" className="text-white"
                    onClick={() => setOpen(true)}
                >
                    <Image src='/icons/hamburger.svg' alt="nav menu icon" width={24} height={24} />
                </button>
            ) : (
                <MobileMenu open={open} setOpen={setOpen} />
            )}
        </motion.div>
    )
}

const MobileMenu: React.FC<{ open: boolean; setOpen: (value: boolean) => void }> = ({ open, setOpen }) => {
    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <button type="button" aria-label="Open menu" className="text-white">
                    <Menu size={24} />
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <AnimatePresence>
                    {open ? (
                        <>
                            <Dialog.Overlay asChild>
                                <motion.div
                                    key="overlay"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className=" fixed inset-0
                                                        bg-black/25
                                                        backdrop-blur-2xl
                                                        backdrop-saturate-150"
                                />

                            </Dialog.Overlay>

                            <Dialog.Content asChild>
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    className="
                                                                            fixed inset-4
                                                    rounded-3xl
                                                    border border-white/20
                                                    bg-black/55
                                                    z-50
                                                    p-6
                                                    backdrop-blur-xl
                                                    shadow-[0_30px_120px_rgba(0,0,0,0.70)]
                                                                            "
                                >
                                    <div className="flex items-center justify-between">
                                        <Dialog.Title className="text-lg font-semibold text-white">
                                            Edwin
                                        </Dialog.Title>

                                        <Dialog.Close asChild>
                                            <button type="button" aria-label="Close menu" className="text-white">
                                                <X size={22} />
                                            </button>
                                        </Dialog.Close>
                                    </div>

                                    <nav className="mt-10 flex flex-col gap-7">
                                        {NAV_ITEMS.map((item) => (
                                            <Dialog.Close asChild key={item.href}>
                                                <a
                                                    href={item.href}
                                                    className="text-base text-white/80 transition-colors hover:text-white"
                                                >
                                                    {item.label}
                                                </a>
                                            </Dialog.Close>
                                        ))}
                                    </nav>
                                </motion.div>
                            </Dialog.Content>
                        </>
                    ) : null}
                </AnimatePresence>
            </Dialog.Portal>
        </Dialog.Root>
    )
}