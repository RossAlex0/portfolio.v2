"use client";

import React from "react";
import Masonry from "react-masonry-css";
import { projects } from "@/services/data";
import SectionTitle from "@/components/ui/section-title";
import { motion } from "framer-motion";
import Pils from "@/components/ui/pils";
import CustomIcon from "@/components/ui/custom-icon";
import type { Project } from "@/services/data/type";
import { useRouter } from "next/navigation";

import "./project.css";
import Image from "next/image";

export default function Project() {
  const router = useRouter();

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
            <div className="header_pils flex_row">
              <Pils dark>{project.name}</Pils>
            </div>
            <div className="bottom_pils flex_row">
              {project.techno.slice(0, 6).map((tech) => (
                <Pils
                  dark
                  containerStyle={{
                    paddingTop: "0.5rem",
                    paddingBottom: "0.3rem",
                    paddingInline: "0.6rem",
                  }}
                  key={tech.name}
                >
                  <CustomIcon name={tech.icon} color="#fffcee" size={20} />
                </Pils>
              ))}
            </div>
            <Image
              src={project.image}
              alt={project.name}
              width={project.image_size.width}
              height={project.image_size.height}
              style={{
                cursor: "pointer",
              }}
              onClick={() => router.push(`/project/${project.id}`)}
            />
          </motion.div>
        ))}
      </Masonry>
    </section>
  );
}
