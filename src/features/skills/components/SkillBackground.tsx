import * as React from "react";
import { cn } from "@/lib/utils";

export const SkillsBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className={cn(
          "absolute inset-0 opacity-[0.18]",
          "bg-[linear-gradient(to_right,rgba(45,212,191,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,212,191,0.22)_1px,transparent_1px)]",
          "bg-size-[44px_44px]"
        )}
      />
      <div
        className={cn(
          "absolute -left-65 top-35 h-190 w-190 rounded-full",
          "bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.26),transparent_62%)] blur-[2px]"
        )}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
    </div>
  );
};