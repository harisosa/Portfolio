"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { JourneyCard } from "./JourneyCard"
import { JOURNEY_ITEMS } from "../constants"
import { Button } from "@/components/ui/button"

const EPS = 2

export const JourneyCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateNavState = () => {
    const el = scrollRef.current
    if (!el) return

    const max = Math.max(0, el.scrollWidth - el.clientWidth)
    const left = el.scrollLeft

    setCanPrev(left > EPS)
    setCanNext(left < max - EPS)
  }

  const scrollByPage = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return

    const width = el.clientWidth
    el.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    updateNavState()

    const onScroll = () => updateNavState()
    el.addEventListener("scroll", onScroll, { passive: true })

    const ro = new ResizeObserver(() => updateNavState())
    ro.observe(el)

    return () => {
      el.removeEventListener("scroll", onScroll)
      ro.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const items = useMemo(() => JOURNEY_ITEMS, [])

  return (
    <>
      <div
        ref={scrollRef}
        className="
          flex overflow-x-auto snap-x snap-mandatory scroll-smooth
          no-scrollbar
          pb-4
          gap-0 sm:gap-6
        "
      >
        {JOURNEY_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="
              shrink-0 snap-start
              w-full
              sm:w-auto
              pr-0 sm:pr-0
            "
          >
            <JourneyCard {...item} />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-6">
        <Button 
          onClick={() => scrollByPage("left")}
          className="border rounded-none px-4 py-2 text-md w-29.5 h-12"
          disabled={!canPrev}>
          Prev
        </Button>
        <Button 
        onClick={() => scrollByPage("right")}
        className="border rounded-none px-4 py-2 text-md w-29.5 h-12"
          disabled={!canNext}>
          Next
        </Button>
      </div>
    </>
  )
}