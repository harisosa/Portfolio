import type { Transition, Variants } from "framer-motion";

export const heroEase = [0.22, 1, 0.36, 1] as const;

export const springSoft: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 20,
  mass: 0.8,
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: heroEase,
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

export const itemReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: heroEase,
    },
  },
};

export const panelReveal: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: heroEase,
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.56,
      ease: heroEase,
    },
  },
};

export const hoverLift = {
  y: -4,
  scale: 1.01,
  transition: springSoft,
};

export const buttonHoverPrimary = {
  y: -2,
  scale: 1.01,
  boxShadow: "0 16px 38px rgba(125, 211, 252, 0.26)",
  transition: springSoft,
};

export const buttonHoverSecondary = {
  y: -2,
  scale: 1.01,
  transition: springSoft,
};

export const panelHover = {
  y: -3,
  transition: springSoft,
};

export function floatingGlow(delay = 0, duration = 7.2) {
  return {
    initial: { opacity: 0.16, scale: 1, x: 0, y: 0 },
    animate: {
      opacity: [0.16, 0.28, 0.16],
      scale: [1, 1.08, 1],
      x: [0, 10, 0],
      y: [0, -6, 0],
    },
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };
}

export function floatingGlowAlt(delay = 0, duration = 8.4) {
  return {
    initial: { opacity: 0.12, scale: 1, x: 0, y: 0 },
    animate: {
      opacity: [0.12, 0.22, 0.12],
      scale: [1, 1.1, 1],
      x: [0, -12, 0],
      y: [0, 8, 0],
    },
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };
}

export function blinkLoop(delay = 0) {
  return {
    animate: {
      opacity: [0.45, 1, 0.45],
      scale: [1, 1.14, 1],
    },
    transition: {
      duration: 2.2,
      delay,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };
}

export function sheenLoop(delay = 0, duration = 5.8) {
  return {
    initial: { x: "-140%", opacity: 0, skewX: -18 },
    animate: { x: ["-140%", "240%"], opacity: [0, 0.24, 0] },
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "linear" as const,
    },
  };
}

export function chipLoop(delay = 0, duration = 4.8) {
  return {
    animate: {
      y: [0, -2, 0],
      opacity: [0.88, 1, 0.88],
    },
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };
}

export function barLoop(delay = 0, duration = 5.2) {
  return {
    animate: {
      scaleX: [0.92, 1, 0.92],
      opacity: [0.62, 1, 0.62],
    },
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };
}
