"use client";

import { Section } from "@/components/layout";
import { TestimoniLayout } from "@/features/testimoni/components";
import * as React from "react";

export const Testimoni: React.FC = () => {
  return (
    <Section id="testimoni">
      <div className="w-full">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Trusted Voices
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/55">
            Here’s what people say about working with me — across projects,
            teams, and timelines.
          </p>
        </div>

        <div className="mt-10">
          <TestimoniLayout />
        </div>
      </div>
    </Section>
  );
};