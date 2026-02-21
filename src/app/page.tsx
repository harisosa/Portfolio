import React from "react";
import { Footer } from "@/components/layout";
import { Skill, About, Projects, Journey, Testimoni, Faq, Contact, Hero } from "@/sections";
import { Marquee } from "@/features/marquee";
import { MARQUEE_LOGOS } from "@/constants";

import aboutImage from '@/../public/images/about.svg';


const Page: React.FC = () => {
  
  return (
    <main className="w-full bg-[#06080b] text-white">
      <Hero />
      <Marquee items={MARQUEE_LOGOS} className="mt-24.25" />
      <About  imageSrc={aboutImage} />
      <Skill />
      <Projects />
      <Journey />
      <Testimoni />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
};

export default Page;
