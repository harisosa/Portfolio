import React from "react";
import { Footer } from "@/components/layout";
import { Skill, About, Projects, Journey, Testimoni, Faq, Contact, Hero } from "@/sections";
import { Marquee } from "@/features/marquee";
import { MARQUEE_LOGOS } from "@/constants";




const Page: React.FC = () => {
  
  return (
    <main className="w-full bg-[#06080b] text-white">
      <Hero />
      <Marquee items={MARQUEE_LOGOS} />
      <About />
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
