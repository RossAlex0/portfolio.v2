"use client";

import { projects } from "@/services/data";
import { useParams, notFound } from "next/navigation";
import CustomText from "@/components/ui/custom-text";
import Image from "next/image";
import Pils from "@/components/ui/pils";
import CustomModalPage from "@/components/blocks/custom-modal";
import SocialLink from "@/components/ui/social-link";
import { useWindowSize } from "@/services/hook/useWindowSize";
import React from "react";

import "./project.css";
import Loading from "@/app/loading";

export default function ProjectPage() {
  const { id: urlProjectId } = useParams();
  const { width } = useWindowSize();

  if (!width) return <Loading />;

  const disabledSocialLinkAnimation = width <= 768;

  const project = projects.find(
    (project) => project.id.toString() === urlProjectId
  );

  if (!project) {
    console.warn(`Issue: Project not found with ${urlProjectId} id`);
    notFound();
  }

  return (
    <CustomModalPage backgroundText={project.name}>
      <div className="project_modal_header flex_row_between_center">
        <CustomText isTitle style={{ color: "#171717" }}>
          {project.name}
        </CustomText>
        <div className="project_modal_header_icon">
          {project.github ? (
            <SocialLink
              href={project.github}
              iconName="FaGithub"
              delay={1}
              size={28}
              label="Github"
              disabledAnimation={true}
            />
          ) : undefined}
          {project.link ? (
            <SocialLink
              href={project.link}
              iconName="TbWorld"
              delay={1}
              size={28}
              label="Site Web"
              disabledAnimation={disabledSocialLinkAnimation}
            />
          ) : undefined}
          {project.video ? (
            <SocialLink
              href={project.video}
              iconName="FaYoutube"
              delay={1}
              size={28}
              label="Video"
              disabledAnimation={disabledSocialLinkAnimation}
            />
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
          className="project_modal_image"
        />
        <div className="project_modal_techno flex_row">
          {project.techno.map((tech) => (
            <Pils
              key={`${project.name}${tech.name}`}
              containerStyle={{
                paddingInline: "0.8rem",
                paddingBlock: "0.4rem",
              }}
              dark
              textStyle={{ fontSize: "0.9rem" }}
            >
              {tech.name}
            </Pils>
          ))}
        </div>
      </div>
      <CustomText
        className="project_text_bold"
        style={{ marginBottom: "2rem" }}
      >
        {project.year} /{" "}
        {project.format.map((f, i) => {
          if (project.format.length === i + 1) return f;

          return `${f} - `;
        })}{" "}
        /{" "}
        {project.type.map((t, i) => {
          if (project.type.length === i + 1) return t;

          return `${t} - `;
        })}{" "}
        / Projet {project.style}
      </CustomText>
      <CustomText className="project_text_font">
        {project.description.fr}
      </CustomText>
    </CustomModalPage>
  );
}
