import type { Transition, Variants } from 'framer-motion'

export const motionEase = [0.22, 1, 0.36, 1] as const

export const transitionBase: Transition = {
  duration: 0.58,
  ease: motionEase,
}

export const transitionSlow: Transition = {
  duration: 0.72,
  ease: motionEase,
}

export const springSoft: Transition = {
  type: 'spring',
  stiffness: 220,
  damping: 22,
  mass: 0.86,
}

export const revealContainer = (staggerChildren = 0.08, delayChildren = 0.04): Variants => ({
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: motionEase,
      staggerChildren,
      delayChildren,
    },
  },
})

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: transitionBase,
  },
}

export const revealSoft: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.99 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitionBase,
  },
}

export const headerReveal: Variants = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: motionEase,
      staggerChildren: 0.05,
    },
  },
}

export const headerItem: Variants = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: motionEase,
    },
  },
}

export const hoverLift = {
  y: -6,
  transition: springSoft,
}

export const hoverLiftSoft = {
  y: -4,
  transition: springSoft,
}

export const hoverShift = {
  x: 4,
  transition: springSoft,
}

export const hoverShiftStrong = {
  x: 6,
  transition: springSoft,
}

export const buttonHover = {
  y: -2,
  scale: 1.01,
  transition: springSoft,
}

export const revealViewport = {
  once: true,
  amount: 0.16,
} as const

export const orbitSpinTransition = (duration: number): Transition => ({
  duration,
  ease: 'linear',
  repeat: Infinity,
})

export const pulseTransition = (duration: number, delay = 0): Transition => ({
  duration,
  delay,
  ease: 'easeInOut',
  repeat: Infinity,
})


