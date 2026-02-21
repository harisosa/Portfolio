'use client'

import { motion } from 'framer-motion'
import MailIcon from '@/../public/icons/mail.svg'
import { tools } from '@/features/tool/constants/tools'
import { Section } from '@/components/layout'
import { toolsMotion } from '@/features/tool/motion'
import { ToolItem } from '@/features/tool/components'
import { MotionButton } from '@/components/ui/motion-button'

export const Tools: React.FC = () => {
  return (
    <Section id='tools' className="w-full px-6 py-24">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
        
        {/* LEFT */}
        <div className="flex-1 max-w-md lg:h-129.75 lg:w-91.75">
          <div>
          <h2 className="text-3xl font-semibold text-white">
            Tools I Use to Build
          </h2>

          <p className="mt-4 text-sm text-white/60">
            From code to design — here&apos;s the tech that helps
            me turn ideas into real products.
          </p>

          </div>
          <MotionButton icon={MailIcon} title="Send Message" />
        </div>

        {/* RIGHT */}
        <motion.div
          variants={toolsMotion.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col flex-1 gap-6 border-l border-white/10 pl-8"
        >
          {tools.map((tool) => (
            <ToolItem key={tool.name} {...tool} />
          ))}
        </motion.div>

      </div>
    </Section>
  )
}