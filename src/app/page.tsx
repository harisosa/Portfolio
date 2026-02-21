import React from "react";
import { Footer } from "@/components/layout";
import { About, Projects, Journey, Testimoni, Faq, Contact, Hero, Tools } from "@/sections";
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
