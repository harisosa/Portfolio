"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useScrollCarousel, CarouselNav } from "@/features/carousel"
import { FAQ_ITEMS } from "@/features/faq/constants/faq"
import { FaqCard } from "@/features/faq/components"
import { Section } from "@/components/layout"

export const Faq: React.FC = () => {
  const { scrollRef, canPrev, canNext, activeIndex, goPrev, goNext } = useScrollCarousel({
    eps: 2,
    pageMode: "ratio",
    ratio: 0.9,
    itemCount: FAQ_ITEMS.length,
  })

  return (
    <Section id="faq">
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
          show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] },
          },
        }}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <motion.h2
              className="text-4xl font-semibold tracking-tight text-white"
              variants={{
                hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4 } },
              }}
            >
              Still Got Questions?
            </motion.h2>

            <motion.p
              className="mt-3 max-w-xl text-sm text-white/60"
              variants={{
                hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, delay: 0.05 } },
              }}
            >
              I’ve listed answers to questions I often get as a frontend developer.
            </motion.p>
          </div>

          <motion.div
            className="pt-2 hidden md:block"
            variants={{
              hidden: { opacity: 0, y: 8, filter: "blur(6px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.35, delay: 0.1 } },
            }}
          >
            <CarouselNav
              canPrev={canPrev}
              canNext={canNext}
              onPrev={goPrev}
              onNext={goNext}
              buttonClassName="
                border-white/10 bg-transparent text-white/80
                hover:bg-white/5 hover:text-white
                disabled:opacity-40 disabled:hover:bg-transparent
              "
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-6 md:hidden"
          variants={{
            hidden: { opacity: 0, y: 8, filter: "blur(6px)" },
            show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.35, delay: 0.1 } },
          }}
        >
          <CarouselNav
            canPrev={canPrev}
            canNext={canNext}
            onPrev={goPrev}
            onNext={goNext}
            buttonClassName="
              border-white/10 bg-transparent text-white/80
              hover:bg-white/5 hover:text-white
              disabled:opacity-40 disabled:hover:bg-transparent
            "
          />
        </motion.div>

        <div className="mt-10">
          <div
            ref={scrollRef}
            className="flex w-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar gap-0 sm:gap-6 pb-4"
          >
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              className="shrink-0 snap-start w-full sm:w-auto"
              // 👇 jangan bikin desktop ikut "active scale", cuma mobile aja
              animate={
                // mobile only
                i === activeIndex ? { scale: 1, opacity: 1 } : { scale: 0.985, opacity: 0.92 }
              }
              transition={{ type: "spring", stiffness: 240, damping: 26 }}
            >
              <FaqCard item={item} index={i} isActiveMobile={i === activeIndex} />
            </motion.div>
          ))}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}