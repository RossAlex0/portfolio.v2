"use client";

import React from "react";
import Masonry from "react-masonry-css";
import { projects } from "@/services/data";
import SectionTitle from "@/components/ui/section-title";
import { AnimatePresence, motion } from "framer-motion";
import { StyleProject } from "@/services/data/type";
import ProjectCard from "./ProjectCard";
import CustomText from "@/components/ui/custom-text";
import CustomIcon from "@/components/ui/custom-icon";
import type { Project } from "@/services/data/type";

import "./project.css";

export default function Project() {
  const [isOpenPersoProjects, setIsOpenPersoProjects] = React.useState(false);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const personnalProjects = React.useMemo(
    () => projects.filter((project) => project.style === StyleProject.PERSO),
    []
  );

  const proProjects = React.useMemo(
    () => projects.filter((project) => project.style === StyleProject.PRO),
    []
  );

  const openPersonnalProjects = React.useCallback(
    () => setIsOpenPersoProjects((s) => !s),
    []
  );

  const renderMansory = React.useCallback(
    (projects: Project[]) => {
      const isPersonnalProject = projects.some(
        (project) => project.style === StyleProject.PERSO
      );

      return (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={isPersonnalProject ? index : undefined}
              compact={isPersonnalProject}
            />
          ))}
        </Masonry>
      );
    },
    [projects]
  );

  return (
    <motion.section
      className="project_container section_container flex_column_center_center"
      id="projects"
      layout
    >
      <SectionTitle>Projets</SectionTitle>
      {renderMansory(proProjects)}
      <button
        onClick={openPersonnalProjects}
        className="button_see_projects"
        type="button"
        aria-expanded={isOpenPersoProjects}
        aria-controls="personnal-projects-section"
      >
        <CustomText className="text_see_projects">
          Voir mes projets personnels
        </CustomText>
        <CustomIcon
          name="TbChevronDown"
          style={{
            transform: isOpenPersoProjects ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </button>

      <AnimatePresence>
        <motion.div
          layout
          initial={false}
          animate={{
            height: isOpenPersoProjects ? "auto" : 0,
            opacity: isOpenPersoProjects ? 1 : 0,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="container_see_projects flex_column_center_center"
        >
          {renderMansory(personnalProjects)}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
