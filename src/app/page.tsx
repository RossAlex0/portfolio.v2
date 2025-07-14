"use client";

import Hero from "@/components/layouts/hero";
import Header from "@/components/blocks/header";
import Project from "@/components/layouts/project";
import Skill from "@/components/layouts/skill";
import About from "@/components/layouts/about";
import Footer from "@/components/blocks/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Project />
        <Skill />
        <About />
        <Footer />
      </main>
    </>
  );
}
