'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import MailIcon from '@/../public/icons/mail.svg'
import { tools } from '@/features/tool/constants/tools'
import { Section } from '@/components/layout'
import { toolsMotion } from '@/features/tool/motion'
import { ToolItem } from '@/features/tool/components'
import { MotionButton } from '@/components/ui/motion-button'
import { ScrollArea } from '@/components/ui/scroll-area'

export const Tools: React.FC = () => {
  const scrollAreaRootRef = React.useRef<HTMLDivElement | null>(null)
  const viewportRef = React.useRef<HTMLDivElement | null>(null)

  const [scrollThumb, setScrollThumb] = React.useState({
    topPct: 0,
    heightPct: 0.25,
    visible: false,
  })

  const recalcThumb = React.useCallback(() => {
    const el = viewportRef.current
    if (!el) return

    const { scrollTop, scrollHeight, clientHeight } = el
    const maxScroll = Math.max(1, scrollHeight - clientHeight)

    const topPct = Math.max(0, Math.min(1, scrollTop / maxScroll))
    const rawHeightPct = clientHeight / Math.max(1, scrollHeight)
    const heightPct = Math.max(0.14, Math.min(0.6, rawHeightPct))
    const visible = scrollHeight > clientHeight + 1

    setScrollThumb({ topPct, heightPct, visible })
  }, [])

  React.useEffect(() => {
    const root = scrollAreaRootRef.current
    if (!root) return

    const viewport = root.querySelector(
      '[data-radix-scroll-area-viewport]'
    ) as HTMLDivElement | null

    if (!viewport) return

    viewportRef.current = viewport

    const onScroll = () => recalcThumb()
    viewport.addEventListener('scroll', onScroll, { passive: true })

    recalcThumb()

    const onResize = () => recalcThumb()
    window.addEventListener('resize', onResize)

    return () => {
      viewport.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [recalcThumb])

  return (
    <Section id='tools' className="w-full px-6 py-24">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
        {/* LEFT */}
        <div className="flex flex-col  max-w-lg justify-between lg:h-129.75 lg:w-91.75">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Tools I Use to Build
            </h2>

            <p className="mt-4 text-sm text-white/60">
              From code to design — here&apos;s the tech that helps
              me turn ideas into real products.
            </p>
          </div>
          <div className='w-full'>
          <MotionButton icon={MailIcon} title="Send Message" />
          </div>

        </div>

        {/* RIGHT */}
        <motion.div
          variants={toolsMotion.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative flex flex-col flex-1 gap-6 pl-10 min-h-0"
        >
          {/* left scroll indicator (thumb only) */}
          <div
            className={[
              'pointer-events-none absolute left-0 top-0 h-full w-6',
              'flex items-start justify-center',
              scrollThumb.visible ? 'opacity-100' : 'opacity-0',
              'transition-opacity duration-200',
            ].join(' ')}
            aria-hidden="true"
          >
            <div className="relative h-full w-0.5 translate-x-px">
              <div
                className="absolute left-0 w-0.5 rounded-full bg-white/90"
                style={{
                  top: `${scrollThumb.topPct * (100 - scrollThumb.heightPct * 100)}%`,
                  height: `${scrollThumb.heightPct * 100}%`,
                }}
              />
            </div>
          </div>

          {/* IMPORTANT: FIXED height 529px + min-h-0 so it actually overflows */}
          <ScrollArea
            ref={scrollAreaRootRef}
            className="h-132.25 min-h-0 pr-4 overflow-hidden"
          >
            {/* padding bottom so last item isn't cut */}
            <div className="flex flex-col gap-6 pb-10">
              {tools.map((tool) => (
                <ToolItem key={tool.name} {...tool} />
              ))}
            </div>
          </ScrollArea>
        </motion.div>
      </div>
    </Section>
  )
}