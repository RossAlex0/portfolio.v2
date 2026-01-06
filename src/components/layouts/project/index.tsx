"use client";

import React from "react";
import Masonry from "react-masonry-css";
import { projects } from "@/services/data";
import SectionTitle from "@/components/ui/section-title";
import { AnimatePresence } from "framer-motion";
import { StyleProject } from "@/services/data/type";
import ProjectCard from "./ProjectCard";
import CustomText from "@/components/ui/custom-text";
import CustomIcon from "@/components/ui/custom-icon";

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

  return (
    <section
      className="project_container section_container flex_column_center_center"
      id="projects"
    >
      <SectionTitle>Projets</SectionTitle>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {proProjects.map((project) => (
          <ProjectCard key={project.id} project={project} compact={false} />
        ))}
      </Masonry>

      <button onClick={openPersonnalProjects} className="button_see_projects">
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
        {isOpenPersoProjects ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {personnalProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                compact
              />
            ))}
          </Masonry>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
