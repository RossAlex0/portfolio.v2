"use client";

import type { Project } from "@/services/data/type";
import { motion, AnimatePresence } from "framer-motion";

import "./project-modal.css";
import CustomText from "@/components/ui/custom-text";
import CustomIcon from "@/components/ui/custom-icon";
import React from "react";
import SectionTitle from "@/components/ui/section-title";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [selectedTechno, setSelectedTechno] = React.useState<
    string | undefined
  >();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="project_modal_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="project_modal flex_column"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <SectionTitle
            color="#fffcee"
            containerStyle={{ marginBottom: "2.5rem" }}
          >
            Description
          </SectionTitle>
          <div className="descriptif_content flex_column">
            <CustomText isTitle style={{ color: "#fffcee" }}>
              {project.name} - {project.year}
            </CustomText>
            <CustomText
              style={{
                color: "#fffcee",
                lineHeight: "1.5rem",
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              {project.description.fr}
            </CustomText>
            <div className="descritif_icons flex_row">
              {project.techno.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.2 }}
                  onMouseEnter={() => setSelectedTechno(tech.name)}
                  onMouseLeave={() => setSelectedTechno(undefined)}
                  className="desc_icons_container"
                >
                  <CustomIcon
                    name={tech.icon.name}
                    pack={tech.icon.type}
                    color="#fffcee"
                    size={28}
                  />
                  {selectedTechno === tech.name ? (
                    <p className="tooltip_desc">{tech.name}</p>
                  ) : undefined}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
