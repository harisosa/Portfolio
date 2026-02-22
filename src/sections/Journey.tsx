"use client"

import { Section } from "@/components/layout"
import { JourneyCarousel } from "@/features/journey/components/JourneyCarousel"
import { motion } from "framer-motion"

export const Journey: React.FC = () => {
  return (
    <Section id="journey">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <div className="space-y-2">
          <h2 className="text-display-2xl font-bold">
            My Journey in Tech
          </h2>
          <p className="text-muted-foreground text-md">
            From small gigs to real-world challenges — each experience helped me grow as a builder and problem-solver.
          </p>
        </div>

        <JourneyCarousel />
      </motion.div>
    </Section>
  )
}