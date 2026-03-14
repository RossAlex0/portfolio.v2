"use client";

import { projects } from "@/services/data";
import { IconName } from "@/components/ui/custom-icon/type";
import React from "react";
import { useParams, notFound } from "next/navigation";
import CustomText from "@/components/ui/custom-text";
import Image from "next/image";
import Pils from "@/components/ui/pils";
import CustomModalPage from "@/components/blocks/custom-modal";
import SocialLink from "@/components/ui/social-link";
import { useWindowSizeContext } from "@/services/context/WindowSizeContext";

import "./project.css";

export default function ProjectPage() {
  const { id: urlProjectId } = useParams();

  const { isTablet } = useWindowSizeContext();

  const project = projects.find(
    (project) => project.id.toString() === urlProjectId
  );

  const renderSocialLinks = React.useCallback(() => {
    const socialLinks = [];

    if (!project) return [];

    if (project.github)
      socialLinks.push({
        iconName: "FaGithub",
        href: project.github,
        label: "Github",
      });
    if (project.link)
      socialLinks.push({
        iconName: "TbWorld",
        href: project.link,
        label: "Site Web",
      });
    if (project.video)
      socialLinks.push({
        iconName: "FaYoutube",
        href: project.video,
        label: "Video",
      });

    return socialLinks.map((link, index) => (
      <SocialLink
        key={index}
        href={link.href}
        iconName={link.iconName as IconName}
        delay={1}
        size={28}
        label={link.label}
        disabledAnimation={isTablet}
      />
    ));
  }, [isTablet, project]);

  const renderTextProjectDetails = (details: string[]) => {
    if (!details || details.length === 0) return null;

    const textDetails = details.map((d, i) => {
      if (details.length === i + 1) return d;

      return `${d} - `;
    });

    return textDetails;
  };

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
        <div className="project_modal_header_icon">{renderSocialLinks()}</div>
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
        {project.year} / {renderTextProjectDetails(project.format)} /{" "}
        {renderTextProjectDetails(project.type)} / Projet {project.style}
      </CustomText>
      <CustomText className="project_text_font">
        {project.description.fr}
      </CustomText>
    </CustomModalPage>
  );
}
