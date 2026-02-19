"use client";

import { NAV_ITEMS } from "@/constants";
import React from "react";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar: React.FC = () => {
    return (
        <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 lg:px-0 lg:pt-0">
            <div className="hidden md:block">
                <div className="w-full px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-5">
                    <div className="flex w-full justify-center">
                        <div
                            className="
                flex items-center gap-8
                rounded-full
                border border-white/10
                bg-black/35
                px-6 py-3
                backdrop-blur-md
                shadow-[0_18px_60px_rgba(0,0,0,0.55)]
              "
                        >
                            <a href="#hero" className="text-xl font-semibold text-white">
                                Edwin
                            </a>

                            <nav className="flex items-center gap-7">
                                {NAV_ITEMS.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="text-md text-white/80 transition-colors hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        <MobileNavbar />
        </header>
    );
};
