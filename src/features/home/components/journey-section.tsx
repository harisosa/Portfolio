import { motion, useReducedMotion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import {
  hoverShift,
  pulseTransition,
  revealContainer,
  revealItem,
  revealViewport,
} from '@/lib/motion'
import { journeyItems } from '@/features/home/data/portfolio-data'

export function JourneySection() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      id="journey"
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'show'}
      viewport={revealViewport}
      variants={revealContainer()}
    >
      <Card className="section-shell p-5 sm:p-7 lg:p-8">
        <SectionHeading
          eyebrow="Journey"
          title="Earlier roles that shaped the stack"
        />

        <motion.div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3" variants={revealContainer(0.08, 0.02)}>
          {journeyItems.map(([company, meta, description], index) => (
            <motion.div
              key={company}
              variants={revealItem}
              whileHover={reduceMotion ? undefined : hoverShift}
              className="timeline-entry relative pl-6 pb-3"
            >
              <motion.div
                className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(122,211,255,0.64)]"
                animate={reduceMotion ? undefined : { opacity: [0.72, 1, 0.72], scale: [1, 1.1, 1], boxShadow: ['0 0 18px rgba(122,211,255,0.4)', '0 0 24px rgba(122,211,255,0.6)', '0 0 18px rgba(122,211,255,0.4)'] }}
                transition={reduceMotion ? undefined : pulseTransition(3.6, index * 0.15)}
              />
              <div className="absolute left-[4px] top-5 h-[calc(100%-0.25rem)] w-px bg-gradient-to-b from-cyan-200/40 to-transparent" />
              <div className="space-y-2">
                <h3 className="font-display text-2xl uppercase tracking-[-0.06em]">{company}</h3>
                <div className="text-[11px] uppercase tracking-[0.16em] text-white/42">{meta}</div>
                <p className="text-sm leading-7 text-white/58">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Card>
    </motion.section>
  )
}
