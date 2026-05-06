import { motion, useReducedMotion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { hoverLift, revealContainer, revealItem, revealViewport } from '@/lib/motion'
import { stackGroups } from '@/features/home/data/portfolio-data'

export function StackSection() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      id="stack"
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'show'}
      viewport={revealViewport}
      variants={revealContainer()}
    >
      <Card className="section-shell p-5 sm:p-7 lg:p-8">
        <SectionHeading
          eyebrow="Core Stack"
          title="Focused capabilities"
        />

        <motion.div className="grid gap-4 lg:grid-cols-3" variants={revealContainer(0.08, 0.02)}>
          {stackGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={revealItem}
              whileHover={reduceMotion ? undefined : hoverLift}
            >
              <Card className="surface-hover h-full border-white/8 p-5">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl uppercase tracking-[-0.06em]">{group.title}</h3>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/42">{group.label}</div>
                  </div>
                </div>
                <p className="text-sm leading-7 text-white/62">{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Card>
    </motion.section>
  )
}
