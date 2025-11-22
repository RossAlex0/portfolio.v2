"use client";

import React from "react";
import { projects } from "@/services/data";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CustomText from "@/components/ui/custom-text";

import "./project.css";
import CustomIcon from "@/components/ui/custom-icon";
import Image from "next/image";
import Pils from "@/components/ui/pils";
import CustomButton from "@/components/ui/custom-button";

export default function ProjectPage() {
  const { id: urlProjectId } = useParams();
  const router = useRouter();

  const project = projects.find(
    (project) => project.id.toString() === urlProjectId
  );

  if (!project) {
    // TODO return _not_found
    console.info(`Issue: Project not found with ${urlProjectId}`);
    return;
  }
  return (
    <section className="project_screen_container flex_column">
      <CustomButton className="project_button" onClick={router.back}>
        Retour
      </CustomButton>
      <CustomText isTitle className="project_text_background">
        {project.name}
      </CustomText>
      <motion.div
        className="project_modal"
        initial={{
          opacity: 0,
          y: 90,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="project_modal_header flex_row_between_center">
          <CustomText isTitle style={{ color: "#fffcee" }}>
            {project.name}
          </CustomText>
          <div className="project_modal_header_icon">
            {project.github ? (
              <motion.a
                whileHover={{ scale: 1.2 }}
                href={project.github}
                target="_blank"
              >
                <CustomIcon name="FaGithub" size={28} color="#fffcee" />
              </motion.a>
            ) : undefined}
            {project.link ? (
              <motion.a
                href={project.link}
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <CustomIcon name="TbWorld" color="#fffcee" size={28} />
              </motion.a>
            ) : undefined}
            {project.video ? (
              <motion.a
                href={project.video}
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <CustomIcon name="FaYoutube" color="#fffcee" size={28} />
              </motion.a>
            ) : undefined}
          </div>
        </div>
        <div className="project_modal_separator" />
        <div className="project_modal_techno_image flex_row_between">
          <Image
            src={project.image}
            alt={project.name}
            width={300}
            height={300}
            style={{
              objectFit: "contain",
              height: "auto",
              maxHeight: "250px",
              width: "auto",
              maxWidth: "300px",
              borderRadius: "12px",
            }}
          />
          <div className="project_modal_techno flex_row">
            {project.techno.map((tech) => (
              <Pils
                key={`${project.name}${tech.name}`}
                containerStyle={{
                  paddingInline: "0.8rem",
                  paddingBlock: "0.4rem",
                  backgroundColor: "#fffcee",
                }}
                textStyle={{ fontSize: "0.9rem" }}
              >
                {tech.name}
              </Pils>
            ))}
          </div>
        </div>
        <CustomText style={{ color: "#fffcee", marginBottom: "2rem" }}>
          {project.year} /{" "}
          {project.format.map((f, i) => {
            if (project.format.length === i + 1) return f;

            return `${f} - `;
          })}{" "}
          /{" "}
          {project.type.map((t, i) => {
            if (project.type.length === i + 1) return t;

            return `${t} - `;
          })}
        </CustomText>
        <CustomText style={{ color: "#fffcee" }}>
          {project.description.fr}
        </CustomText>
      </motion.div>
    </section>
  );
}
