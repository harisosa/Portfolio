import type { MotionProps, Transition } from "framer-motion";

const heroEase = [0.22, 1, 0.36, 1] as const;

const makeTransition = (delay: number, duration: number): Transition => ({
  duration,
  delay,
  ease: heroEase,
});

export const fadeUp = (delay: number, y: number): Pick<MotionProps, "initial" | "animate" | "transition"> => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: makeTransition(delay, 0.55),
});

export const fadeUpFast = (delay: number, y: number): Pick<MotionProps, "initial" | "animate" | "transition"> => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: makeTransition(delay, 0.5),
});

export const cardIn = (delay: number): Pick<MotionProps, "initial" | "animate" | "transition"> => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: makeTransition(delay, 0.6),
});