import type { StaticImageData } from "next/image";

export type PortfolioItem = {
  title: string;
  year: string;
  image: StaticImageData;
};