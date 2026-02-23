"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SocialLink } from "@/features/social-media/types";


type SocialMediaProps = { socials: SocialLink[] };



export const SocialMedia: React.FC<SocialMediaProps> = ({ socials }) => {

    return (
        <div className="flex items-center gap-3">
            {socials.map((s) => (
                <Link
                    key={s.id}
                    href={s.href}
                    aria-label={s.label}
                    className={cn(
                        "relative inline-flex h-10 w-10 items-center justify-center rounded-full",
                        "border border-white/15 bg-black/20",
                        "transition hover:border-white/25 hover:bg-white/5"
                    )}
                >
                    <Image
                        src={s.icon}
                        alt={s.label}
                        fill
                        sizes="40px"
                        className="p-2 object-contain opacity-70 transition group-hover:opacity-100"
                    />
                </Link>
            ))}
        </div>
    );
};