'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ToolProgress } from './ToolProgress'
import { toolsMotion } from '../motion'
import { Tool } from '../constants'


export const ToolItem: React.FC<Tool> = ({
  name,
  icon,
  percentage,
}) => {
  return (
    <motion.div
      variants={toolsMotion.item}
      className="w-full"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={icon}
            alt={name}
            width={20}
            height={20}
            className="object-contain"
          />
          <span className="text-sm text-white/80">
            {name}
          </span>
        </div>

        <span className="text-sm text-white/60">
          {percentage}%
        </span>
      </div>

      <ToolProgress percentage={percentage} />
    </motion.div>
  )
}