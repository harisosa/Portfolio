"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CarouselNavProps = {
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
  buttonClassName?: string;
};

export const CarouselNav: React.FC<CarouselNavProps> = ({
  canPrev,
  canNext,
  onPrev,
  onNext,
  className,
  buttonClassName,
}) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        className={cn("border rounded-none px-4 py-2 text-md w-29.5 h-12", buttonClassName)}
      >
        Prev
      </Button>

      <Button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        className={cn("border rounded-none px-4 py-2 text-md w-29.5 h-12", buttonClassName)}
      >
        Next
      </Button>
    </div>
  );
};