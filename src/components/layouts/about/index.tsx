import React from "react";
import CustomText from "@/components/ui/custom-text";
import SectionTitle from "@/components/ui/section-title";
import Timeline from "@/components/blocks/timeline";
import SocialLink from "@/components/ui/social-link";

import "./about.css";

export default function About() {
  const strong = React.useCallback(
    (word: string) => <span className="strong">{word}</span>,
    []
  );

  const socialLinks = [
    {
      href: "https://github.com/RossAlex0",
      iconName: "TbBrandGithub",
      label: "GitHub",
    },
    {
      href: "https://gitlab.com/alex.rossignol",
      iconName: "TbBrandGitlab",
      label: "GitLab",
    },
    {
      href: "https://linkedin.com/in/rossignolalex",
      iconName: "TbBrandLinkedin",
      label: "LinkedIn",
    },
    {
      href: "/meta/alex-rossignol-cv.pdf",
      iconName: "TbFileCv",
      label: "CV PDF",
    },
  ] as const;

  return (
    <section className="section_container flex_column_center" id="about">
      <SectionTitle>À Propos</SectionTitle>
      <div>
        <CustomText
          className="about_desc"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ amount: 0.1, once: true }}
        >
          {strong("Développeur web")} basé à Toulouse, je conçois des{" "}
          {strong("applications")} web et mobiles avec le coeur. Anciennement
          agent de sécurité pénitentiaire, je me suis reconverti en 2024 pour
          devenir {strong("développeur et concepteur d’applications")}, après
          une période d’apprentissage en autodidacte.
        </CustomText>
      </div>
      <div className="about_content flex_column">
        <div className="link_rs flex_row">
          {socialLinks.map((link, index) => (
            <SocialLink
              key={link.href}
              href={link.href}
              iconName={link.iconName}
              label={link.label}
              delay={index}
            />
          ))}
        </div>
        <Timeline />
      </div>
    </section>
  );
}
