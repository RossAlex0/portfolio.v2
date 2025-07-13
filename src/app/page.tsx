"use client";

import Hero from "@/components/layouts/hero";
import Header from "@/components/blocks/header";
import Project from "@/components/layouts/project";

import "@/styles/globals.css";
import Skill from "@/components/layouts/skill";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Project />
        <Skill />
      </main>
    </>
  );
}
