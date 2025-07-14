"use client";

import React from "react";
import Masonry from "react-masonry-css";
import { projects } from "@/services/data";
import SectionTitle from "@/components/ui/section-title";
import { motion } from "framer-motion";
import Pils from "@/components/ui/pils";
import CustomIcon from "@/components/ui/custom-icon";
import type { Project } from "@/services/data/type";

import "./project.css";
import ProjectModal from "@/components/blocks/project-description-modal";

export default function Project() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(
    null
  );
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

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
        {projects.map((project) => (
          <motion.div
            className="card_container"
            key={project.id}
            initial={{
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
              opacity: 0,
              y: 40,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -4,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.35)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="link_dev flex_row">
              {project.github ? (
                <motion.a
                  href={project.github}
                  target="_blank"
                  className="round_link"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <CustomIcon
                    name="TbBrandGithub"
                    pack="Tb"
                    color="#fffcee"
                    size={20}
                  />
                </motion.a>
              ) : undefined}
              {project.video ? (
                <motion.a
                  href={project.video}
                  target="_blank"
                  className="round_link"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <CustomIcon
                    name="RiYoutubeLine"
                    pack="Ri"
                    color="#fffcee"
                    size={20}
                  />
                </motion.a>
              ) : undefined}
              {project.link ? (
                <motion.a
                  href={project.link}
                  target="_blank"
                  className="round_link"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <CustomIcon
                    name="TbWorld"
                    pack="Tb"
                    color="#fffcee"
                    size={20}
                  />
                </motion.a>
              ) : undefined}

              <motion.button
                onClick={() => setSelectedProject(project)}
                className="round_link"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <CustomIcon
                  name="TbFileDescription"
                  pack="Tb"
                  color="#fffcee"
                  size={20}
                />
              </motion.button>
            </div>
            <div className="card_pils flex_row">
              <Pils accent>{project.format}</Pils>
              <Pils accent>{project.type}</Pils>
            </div>
            <motion.img src={project.image} alt={project.name} />
          </motion.div>
        ))}
      </Masonry>
      {selectedProject ? (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : undefined}
    </section>
  );
}
