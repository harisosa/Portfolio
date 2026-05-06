import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80',
        className,
      )}
    >
      {children}
    </span>
  )
}
