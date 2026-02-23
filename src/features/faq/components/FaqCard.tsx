"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { FaqItem } from "@/features/faq/type"

type FaqCardProps = {
  item: FaqItem
  index: number
  isActiveMobile: boolean
}

export const FaqCard: React.FC<FaqCardProps> = ({ item, isActiveMobile }) => {
  return (
    <motion.article
      className={cn(
        "group relative overflow-hidden rounded-2xl border p-8",
        "flex flex-col flex-none shrink-0 box-border",
        "min-h-116.5",
        "border-white/10 bg-black/40",
        "transition-[width,background-color] duration-200",
        "w-full",

        "xl:w-63 xl:min-w-63 xl:max-w-63",
        "xl:hover:w-94.75 xl:hover:min-w-94.75 xl:hover:max-w-94.75",
        "xl:focus-within:w-94.75 xl:focus-within:min-w-94.75 xl:focus-within:max-w-94.75",

        isActiveMobile && "bg-teal-900/70 xl:bg-black/40"
      )}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
    >
      <div className="absolute left-6 top-6 h-20 w-20">
        <div
          className={cn(
            "relative h-full w-full overflow-hidden rounded-full bg-white/10",
            "opacity-0 scale-95 transition-all duration-200",
            "xl:group-hover:opacity-100 xl:group-hover:scale-100",
            "xl:group-focus-within:opacity-100 xl:group-focus-within:scale-100",
            isActiveMobile && "opacity-100 scale-100 xl:opacity-0 xl:scale-95"
          )}
        >
          <Image src={item.avatarUrl} alt={item.question} fill className="object-cover" />
        </div>
      </div>

      <div className="absolute right-6 top-6">
        <div
          className={cn(
            "relative h-10 w-10 rounded-xl border border-white/10 bg-white/5",
            "transition-colors duration-200",
            "xl:group-hover:bg-white/10 xl:group-focus-within:bg-white/10"
          )}
          aria-hidden="true"
        >
          <Image src="/icons/message.svg" alt="message" fill className="object-contain p-2" />
        </div>
      </div>

      <div className="flex-1" />

      <h3 className="text-display-sm font-semibold leading-snug text-white">
        {item.question}
      </h3>

      {item.answer ? (
        <p
          className={cn(
            "mt-6 text-md leading-relaxed text-white/80",
            "hidden",
            "xl:group-hover:block xl:group-focus-within:block",
            isActiveMobile && "block xl:hidden"
          )}
        >
          {item.answer}
        </p>
      ) : null}

      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-200",
          "bg-teal-900/70",
          "xl:group-hover:opacity-100 xl:group-focus-within:opacity-100",
          isActiveMobile && "opacity-100 xl:opacity-0"
        )}
      />

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />
    </motion.article>
  )
}