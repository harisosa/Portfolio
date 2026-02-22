"use client"

import Image, { type StaticImageData } from "next/image"
import  Briefcase  from "@/../public/icons/briefcase.svg"

type JourneyCardProps = {
  title: string
  period: string
  description: string
  logoSrc: StaticImageData
  logoAlt: string
}

export const JourneyCard: React.FC<JourneyCardProps> = ({
  title,
  period,
  description,
  logoSrc,
  logoAlt
}) => {
  return (
    <div
      className="
  relative shrink-0 snap-start
  w-full sm:w-[60%] lg:w-141
  border border-white/15
  bg-black
"
    >
      <div className="px-8 py-7 h-full min-h-90 flex flex-col">

        <div className="relative">
          <div className="absolute -left-8 top-0 h-18.5 w-0.75 bg-cyan-400" />

          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-xl leading-[1.1] font-semibold text-white">
                {title}
              </h4>
              <p className="mt-3 text-md text-white">{period}</p>
            </div>

            <div className="pt-1 text-white">
                        <Image
            src={Briefcase}
            alt="briefcase"
            className="h-5 w-5 select-none"
            priority={false}
          />
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-white/20" />
        </div>

        <p className="mt-6 text-[14px] leading-7 text-white/70">
          {description}
        </p>

        <div className="mt-auto pt-10">
          <Image
            src={logoSrc}
            alt={logoAlt}
            className="h-auto w-30 select-none"
            priority={false}
          />
        </div>
      </div>
    </div>
  )
}