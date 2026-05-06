import { motion, useReducedMotion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { hoverLift, revealContainer, revealItem, revealViewport } from '@/lib/motion'
import { experiences } from '@/features/home/data/portfolio-data'

export function ExperienceSection() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      id="experience"
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'show'}
      viewport={revealViewport}
      variants={revealContainer()}
    >
      <Card className="section-shell p-5 sm:p-7 lg:p-8">
        <SectionHeading
          eyebrow="Experience"
          title="Selected enterprise work"
        />

        <motion.div className="grid gap-4 lg:grid-cols-3" variants={revealContainer(0.08, 0.02)}>
          {experiences.map((item) => (
            <motion.div
              key={item.company}
              variants={revealItem}
              whileHover={reduceMotion ? undefined : hoverLift}
            >
              <Card className="surface-hover h-full border-white/8 p-5">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[2rem] uppercase leading-none tracking-[-0.06em]">{item.company}</h3>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-white/48">
                      {item.role} · {item.duration}
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-7 text-white/64">{item.description}</p>

                <ul className="mt-5 space-y-2.5 text-sm leading-7 text-white/58">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-cyan-200/70 shadow-[0_0_14px_rgba(122,211,255,0.4)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
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
