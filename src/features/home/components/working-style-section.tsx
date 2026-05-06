import { motion, useReducedMotion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { hoverLift, revealContainer, revealItem, revealViewport } from '@/lib/motion'
import { values } from '@/features/home/data/portfolio-data'

export function WorkingStyleSection() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'show'}
      viewport={revealViewport}
      variants={revealContainer()}
    >
      <Card className="section-shell p-5 sm:p-7 lg:p-8">
        <SectionHeading
          eyebrow="Working Style"
          title="What I bring to teams"
        />

        <motion.div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" variants={revealContainer(0.08, 0.02)}>
          {values.map(([title, description]) => (
            <motion.div
              key={title}
              variants={revealItem}
              whileHover={reduceMotion ? undefined : hoverLift}
            >
              <Card className="surface-hover h-full border-white/8 p-5">
                <h3 className="font-display text-2xl uppercase tracking-[-0.06em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Card>
    </motion.section>
  )
}
