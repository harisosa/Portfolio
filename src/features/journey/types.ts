import { StaticImageData } from "next/image"

export interface JourneyItem {
  title: string
  period: string
  description: string
  logoSrc: StaticImageData
  logoAlt: string
}
