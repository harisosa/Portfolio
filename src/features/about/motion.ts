export const aboutMotion = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  },
  cardHover: {
    rest: { y: 0, scale: 1 },
    hover: { y: -3, scale: 1.01, transition: { duration: 0.2, ease: 'easeOut' } },
  },
  iconHover: {
    rest: { rotate: 0, scale: 1 },
    hover: { rotate: -4, scale: 1.03, transition: { duration: 0.22, ease: 'easeOut' } },
  },
} as const;