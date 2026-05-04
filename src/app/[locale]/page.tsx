"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CareerFocus from "@/components/sections/CareerFocus";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Certificates from "@/components/sections/Certificates";
import GitHubSection from "@/components/sections/GitHub";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <CareerFocus />
      <Projects />
      <Skills />
      <Education />
      <Certificates />
      <GitHubSection />
      <Contact />
    </>
  );
}
