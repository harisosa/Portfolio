import type { StaticImageData } from 'next/image'

import HtmlIcon from '@/../public/icons/html.svg'
import CssIcon from '@/../public/icons/css.svg'
import JavascriptIcon from '@/../public/icons/javascript.svg'
import TypescriptIcon from '@/../public/icons/typescript.svg'
import SequelizeIcon from '@/../public/icons/sequelize.svg'
import MongoDbIcon from '@/../public/icons/mongodb.svg'

export type Tool = {
  name: string
  icon: StaticImageData
  percentage: number
}

export const tools: Tool[] = [
  { name: 'HTML', icon: HtmlIcon, percentage: 100 },
  { name: 'CSS', icon: CssIcon, percentage: 90 },
  { name: 'Javascript', icon: JavascriptIcon, percentage: 90 },
  { name: 'Typescript', icon: TypescriptIcon, percentage: 80 },
  { name: 'Sequelize', icon: SequelizeIcon, percentage: 80 },
  { name: 'MongoDB', icon: MongoDbIcon, percentage: 75 },
]