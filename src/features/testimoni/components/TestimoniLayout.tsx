"use client";

import * as React from "react";
import { TESTIMONI_FEATURES } from "../constants";
import { TestimoniCard } from "./TestimoniCard";

export const TestimoniLayout: React.FC = () => {
  const hero = TESTIMONI_FEATURES.find((v) => v.role === "hero");
  const top = TESTIMONI_FEATURES.find((v) => v.role === "top");
  const bottom = TESTIMONI_FEATURES.filter((v) => v.role === "bottom").slice(0, 2);

  if (!hero || !top) return null;
    console.log(hero)
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-4">

      <div className="flex w-full lg:w-[38%]">
        <TestimoniCard feature={hero} variant="hero" className="w-full" />
      </div>


      <div className="flex w-full flex-1 flex-col gap-4">
        <TestimoniCard feature={top} className="w-full" />

        <div className="flex flex-col gap-4 sm:flex-row">
          {bottom.map((item) => (
            <TestimoniCard key={item.id} feature={item} className="w-full sm:flex-1" />
          ))}
        </div>
      </div>
    </div>
  );
};