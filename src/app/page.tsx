import React from "react";
import { Footer } from "@/components/layout";
import { Hero, Skill, About, Projects, Journey, Testimoni, Faq, Contact } from "@/components/sections";


const Page: React.FC = () => {
  return (
    <main className="w-full bg-[#06080b] text-white">
      <Hero />
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
