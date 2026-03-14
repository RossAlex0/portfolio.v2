"use client";

import Hero from "@/components/layouts/hero";
import Header from "@/components/blocks/header";
import Project from "@/components/layouts/project";
import Skill from "@/components/layouts/skill";
import About from "@/components/layouts/about";
import Footer from "@/components/blocks/footer";
import { useWindowSizeContext } from "@/services/context/WindowSizeContext";
import Loading from "./loading";

export default function Home() {
  const { mounted } = useWindowSizeContext();

  return (
    <>
      <Header />
      <main>
        {mounted ? (
          <>
            <Hero />
            <Project />
            <Skill />
            <About />
            <Footer />
          </>
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
}
