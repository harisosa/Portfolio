import React from "react";
import { About, Project, Journey, Testimoni, Faq, Contact, Hero, Tools, Skills } from "@/sections";
import aboutImage from '@/../public/images/about.svg';
import { MARQUEE_LOGOS } from "@/features/marquee/constants";
import { Marquee } from "@/features/marquee/comnponents";


const Page: React.FC = () => {
  
  return (
    <main className="w-full bg-[#06080b] text-white">
      <Hero />
      <Marquee items={MARQUEE_LOGOS} className="mt-24.25" />
      <About  imageSrc={aboutImage} />
      <Tools />
      <Skills />
      <Project />
      <Journey />
      <Testimoni />
      <Faq />
      <Contact />
    </main>
  );
};

export default Page;
