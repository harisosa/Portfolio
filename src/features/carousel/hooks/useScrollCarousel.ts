"use client"

import * as React from "react"

type UseScrollCarouselArgs = {
  eps?: number
  pageMode?: "full" | "ratio"
  ratio?: number
  itemCount?: number // ✅ optional: enable activeIndex + scrollToIndex
}

export const useScrollCarousel = (args: UseScrollCarouselArgs = {}) => {
  const { eps = 2, pageMode = "full", ratio = 0.9, itemCount } = args

  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = React.useState(false)
  const [canNext, setCanNext] = React.useState(true)

  // ✅ new
  const [activeIndex, setActiveIndex] = React.useState(0)

  const updateNavState = React.useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    const max = Math.max(0, el.scrollWidth - el.clientWidth)
    const left = el.scrollLeft

    setCanPrev(left > eps)
    setCanNext(left < max - eps)

    // ✅ compute activeIndex only when itemCount is provided
    if (!itemCount) return

    const children = Array.from(el.children) as HTMLElement[]
    if (!children.length) return

    let bestIdx = 0
    let bestDist = Number.POSITIVE_INFINITY

    for (let i = 0; i < children.length; i++) {
      const dist = Math.abs(children[i].offsetLeft - left)
      if (dist < bestDist) {
        bestDist = dist
        bestIdx = i
      }
    }

    setActiveIndex(Math.min(itemCount - 1, Math.max(0, bestIdx)))
  }, [eps, itemCount])

  const scrollByPage = React.useCallback(
    (dir: "left" | "right") => {
      const el = scrollRef.current
      if (!el) return

      const base = el.clientWidth
      const delta = pageMode === "ratio" ? Math.max(240, Math.floor(base * ratio)) : base

      el.scrollBy({
        left: dir === "left" ? -delta : delta,
        behavior: "smooth",
      })
    },
    [pageMode, ratio]
  )

  // ✅ new: scrollToIndex (for snap layouts like FAQ)
  const scrollToIndex = React.useCallback(
    (idx: number) => {
      const el = scrollRef.current
      if (!el || !itemCount) return

      const children = Array.from(el.children) as HTMLElement[]
      if (!children.length) return

      const clamped = Math.min(itemCount - 1, Math.max(0, idx))
      const target = children[clamped]
      if (!target) return

      el.scrollTo({ left: target.offsetLeft, behavior: "smooth" })
    },
    [itemCount]
  )

  const goPrev = React.useCallback(() => scrollToIndex(activeIndex - 1), [activeIndex, scrollToIndex])
  const goNext = React.useCallback(() => scrollToIndex(activeIndex + 1), [activeIndex, scrollToIndex])

  React.useEffect(() => {
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
  }, [updateNavState])

  return {
    scrollRef,
    canPrev,
    canNext,
    scrollByPage,
    // ✅ new exports (safe even if itemCount not provided)
    activeIndex,
    scrollToIndex,
    goPrev,
    goNext,
  }
}