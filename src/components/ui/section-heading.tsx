import { motion, useReducedMotion } from 'framer-motion'
import { pulseTransition, revealItem } from '@/lib/motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={revealItem}
      className="mb-5 space-y-3 lg:mb-6"
    >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/12 bg-cyan-300/6 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-100/82">
              <motion.span
          className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.55)]"
          animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6], filter: ['drop-shadow(0 0 0 rgba(122,211,255,0))', 'drop-shadow(0 0 8px rgba(122,211,255,0.45))', 'drop-shadow(0 0 0 rgba(122,211,255,0))'] }}
          transition={reduceMotion ? undefined : pulseTransition(4.8)}
        />
        {eyebrow}
      </div>
      <div className="space-y-3">
        <h2 className="max-w-3xl font-hero font-display text-3xl uppercase leading-none tracking-[-0.06em] sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-white/62 sm:text-[15px]">{description}</p>
      </div>
    </motion.div>
  )
}
