"use client";

import * as React from "react";
import { JourneyCard } from "./JourneyCard";
import { JOURNEY_ITEMS } from "../constants";
import { CarouselNav, useScrollCarousel } from "@/features/carousel";

export const JourneyCarousel: React.FC = () => {
  const { scrollRef, canPrev, canNext, scrollByPage } = useScrollCarousel({
    eps: 2,
    pageMode: "full",
  });

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

      <CarouselNav
        className="pt-6"
        canPrev={canPrev}
        canNext={canNext}
        onPrev={() => scrollByPage("left")}
        onNext={() => scrollByPage("right")}
      />
    </>
  );
};