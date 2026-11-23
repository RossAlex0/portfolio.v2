"use client";

import SocialLink from "@/components/ui/social-link";
import { IconName } from "@/components/ui/custom-icon/type";
import { useWindowSizeContext } from "@/services/context/WindowSizeContext";
import type { Project } from "@/services/data/type";

type ProjectLink = { iconName: IconName; href: string | null; label: string };

export default function ProjectLinks({
  project,
}: {
  project: Pick<Project, "github" | "link" | "video">;
}) {
  const { isTablet } = useWindowSizeContext();

  const links: ProjectLink[] = [
    { iconName: "FaGithub", href: project.github, label: "Github" },
    { iconName: "TbWorld", href: project.link, label: "Site Web" },
    { iconName: "FaYoutube", href: project.video, label: "Video" },
  ];

  return (
    <div className="project_modal_header_icon">
      {links.map(({ href, iconName, label }) =>
        href ? (
          <SocialLink
            key={label}
            href={href}
            iconName={iconName}
            delay={1}
            size={28}
            label={label}
            disabledAnimation={isTablet}
          />
        ) : null
      )}
    </div>
  );
}
