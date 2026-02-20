import React from "react";
import Image from "next/image";

export const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image
        src="/images/background.svg"
        alt=""
        fill
        priority
        className="object-cover object-left"
      />
      <div
        className="
            absolute inset-0
            bg-[linear-gradient(90deg,
              rgba(0,0,0,0)_0%,
              rgba(0,0,0,0)_48%,
              rgba(0,0,0,0.18)_58%,
              rgba(0,0,0,0.55)_72%,
              rgba(0,0,0,0.82)_86%,
              rgba(0,0,0,0.92)_100%
            )]
          "
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0)_22%,rgba(0,0,0,0)_78%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
};