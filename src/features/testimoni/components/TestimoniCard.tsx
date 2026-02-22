"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TestimoniFeature } from "../type";


type Props = {
  feature: TestimoniFeature;
  variant?: "hero" | "default";
  className?: string;
};

const Stars: React.FC<{ value?: number }> = ({ value = 5 }) => {
  const count = Math.max(0, Math.min(5, value));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < count ? "fill-amber-400 text-amber-400" : "text-white/15"
          )}
        />
      ))}
    </div>
  );
};

export const TestimoniCard: React.FC<Props> = ({
  feature,
  variant = "default",
  className,
}) => {
  const { metric, headline, quote, rating, person } = feature;
  const isHero = variant === "hero";

  return (
    <motion.article
      initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(
        "relative w-full overflow-hidden bg-[#070A0C] p-6",
        "border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)]",
        "flex min-h-75 flex-col",
        isHero ? "lg:min-h-140" : "lg:min-h-60",
        className
      )}
    >

      <div className="pointer-events-none absolute inset-0 opacity-70">

        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_30%_10%,rgba(255,255,255,0.06),transparent_55%)]" />
        {isHero ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(70%_90%_at_0%_20%,rgba(45,212,191,0.28),transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(45,212,191,0.14),transparent_35%)]" />
          </>
        ) : null}

        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,transparent_35%,rgba(0,0,0,0.55)_90%)]" />
      </div>

      <div className="relative flex flex-1 flex-col">
        <div>
          {(metric || headline) && (
            <div className="mb-4">
              {metric ? (
                <div className="text-3xl font-semibold tracking-tight text-white">
                  {metric}
                </div>
              ) : null}
              {headline ? (
                <div className="mt-2 text-sm font-semibold text-white">
                  {headline}
                </div>
              ) : null}
            </div>
          )}

          <Stars value={rating} />

          <p className="mt-4 text-sm leading-6 text-white/70">{quote}</p>
        </div>

        <div className="mt-auto pt-8">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 border border-white/10">
              <AvatarImage
                src={person.avatarUrl ? person.avatarUrl : undefined}
                alt={person.name}
              />
              <AvatarFallback className="bg-white/5 text-xs text-white/70">
                {person.name
                  .split(" ")
                  .slice(0, 2)
                  .map((s) => s[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-white">
                {person.name}
              </div>
              <div className="truncate text-xs text-white/55">
                {person.title}
              </div>
            </div>
          </div>

          <Quote className="pointer-events-none absolute bottom-4 right-4 h-7 w-7 text-white/12" />
        </div>
      </div>
    </motion.article>
  );
};