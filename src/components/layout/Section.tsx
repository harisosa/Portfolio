import React from "react";
import { Container } from "./Container";

type SectionProps = React.PropsWithChildren & {
  id: string;
  className?: string;
  isHero?: boolean;
  containerClassName?: string;
};

export const Section: React.FC<SectionProps> = ({
  id,
  className = "",
  isHero = false,
  containerClassName = "",
  children,
}) => {
  return (
    <section id={id} className={`relative w-full ${!isHero ? "py-16 sm:py-20 md:py-24 lg:py-28" : ""} ${className} `}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};
