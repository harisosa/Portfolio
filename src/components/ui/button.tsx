import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-[linear-gradient(135deg,#c9f0ff,#7bc8ff)] px-5 py-3 text-slate-950 shadow-[0_12px_34px_rgba(79,179,255,0.28)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(79,179,255,0.34)]',
        secondary:
          'border border-white/10 bg-white/[0.03] px-5 py-3 text-white hover:-translate-y-0.5 hover:border-cyan-200/20 hover:bg-white/[0.05]',
        ghost:
          'border border-white/10 bg-transparent px-4 py-2 text-white/80 hover:border-cyan-200/20 hover:bg-white/[0.04] hover:text-white',
      },
      size: {
        default: '',
        sm: 'px-3 py-2 text-[10px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { buttonVariants }
