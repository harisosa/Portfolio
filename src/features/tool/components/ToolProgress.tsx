'use client'

import { motion } from 'framer-motion'
import { toolsMotion } from '../motion'


type Props = {
  percentage: number
}

export const ToolProgress: React.FC<Props> = ({ percentage }) => {
  return (
    <div className="mt-3 h-0.5 w-full bg-white/10 overflow-hidden">
      <motion.div
        custom={percentage}
        variants={toolsMotion.progress}
        className="h-full bg-primary"
      />
    </div>
  )
}