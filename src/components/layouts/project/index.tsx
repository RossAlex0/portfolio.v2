"use client";

import React from "react";
import Masonry from "react-masonry-css";
import { projects } from "@/services/data";
import SectionTitle from "@/components/ui/section-title";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/services/data/type";

import "./project.css";

export default function Project() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <motion.section
      className="project_container section_container flex_column_center_center"
      id="projects"
      layout
    >
      <SectionTitle>Projets</SectionTitle>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </Masonry>
    </motion.section>
  );
}
