import { motion, useReducedMotion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import {
  buttonHover,
  hoverShiftStrong,
  revealContainer,
  revealItem,
  revealViewport,
} from '@/lib/motion'

const contactItems = [
  { label: 'Email', value: 'j.harisosa.93@gmail.com', href: 'mailto:j.harisosa.93@gmail.com', icon: Mail },
  { label: 'Location', value: 'Indonesia', href: undefined, icon: MapPin },
]

export function ContactSection() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      id="contact"
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'show'}
      viewport={revealViewport}
      variants={revealContainer()}
    >
      <Card className="section-shell overflow-hidden border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(122,211,255,0.14),transparent_30%),linear-gradient(180deg,rgba(12,17,27,0.92),rgba(7,10,16,0.98))] p-5 sm:p-7 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.9fr)] lg:items-start">
          <motion.div variants={revealItem}>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something solid"
              description="If you need a frontend engineer who can work cleanly across UI systems and enterprise delivery, feel free to reach out."
            />
            <div className="flex flex-wrap gap-3">
              <motion.div whileHover={reduceMotion ? undefined : buttonHover}>
                <Button onClick={() => (window.location.href = 'mailto:j.harisosa.93@gmail.com')}>Send Email</Button>
              </motion.div>
              <motion.div whileHover={reduceMotion ? undefined : buttonHover}>
                <Button variant="secondary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Back to top
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={revealItem}>
            <Card className="surface-hover border-white/8 p-5">
              <div className="space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon
                  const row = (
                    <motion.div
                      whileHover={reduceMotion ? undefined : hoverShiftStrong}
                      className="contact-row flex items-start justify-between gap-4 rounded-2xl border border-transparent px-3 py-3"
                    >
                      <div className="flex items-center gap-3 text-white/62">
                        <Icon className="h-4 w-4 text-cyan-200" />
                        <span className="text-[11px] uppercase tracking-[0.16em]">{item.label}</span>
                      </div>
                      <strong className="text-right text-sm font-medium leading-7 text-white">{item.value}</strong>
                    </motion.div>
                  )

                  return item.href ? (
                    <a key={item.label} href={item.href} className="block">
                      {row}
                    </a>
                  ) : (
                    <div key={item.label}>{row}</div>
                  )
                })}
              </div>
            </Card>
          </motion.div>
        </div>
      </Card>
    </motion.section>
  )
}
