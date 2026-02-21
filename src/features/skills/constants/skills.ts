import { SkillRow } from "../type";

export const SKILLS: SkillRow[] = [
  { label: "React Expert" },
  { label: "Pixel Perfect" },
  { label: "TypeScript Proficiency" },
  { label: "Clean, Maintainable Code" },
  { label: "Performance Optimization" },
  { label: "Responsive Website" },
  { label: "UI Design Proficiency (Figma)" },
];

export const easeDiamond = [0.16, 1, 0.3, 1] as const;

export const headerIn = {
  hidden: { opacity: 0, y: 18, x: -10, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, x: 0, filter: "blur(0px)" },
};

export const cardIn = {
  hidden: { opacity: 0, y: 22, x: 10, rotate: 0.6 },
  show: { opacity: 1, y: 0, x: 0, rotate: 0 },
};

export const iconIn = {
  hidden: { opacity: 0, scale: 0.86, y: 6, rotate: -8 },
  show: { opacity: 1, scale: 1, y: 0, rotate: 0 },
};