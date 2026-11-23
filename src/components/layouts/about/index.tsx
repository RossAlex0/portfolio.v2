import CustomText from "@/components/ui/custom-text";
import SectionTitle from "@/components/ui/section-title";
import Timeline from "@/components/blocks/timeline";
import SocialLink from "@/components/ui/social-link";
import { EXTERNAL_LINKS } from "@/services/data/site";

import "./about.css";

function Strong({ children }: { children: React.ReactNode }) {
  return <span className="strong">{children}</span>;
}

export default function About() {
  const socialLinks = [
    {
      href: EXTERNAL_LINKS.github,
      iconName: "TbBrandGithub",
      label: "GitHub",
    },
    {
      href: EXTERNAL_LINKS.gitlab,
      iconName: "TbBrandGitlab",
      label: "GitLab",
    },
    {
      href: EXTERNAL_LINKS.linkedin,
      iconName: "TbBrandLinkedin",
      label: "LinkedIn",
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
          <Strong>Développeur web</Strong> basé à Toulouse, je conçois des{" "}
          <Strong>applications</Strong> web et mobiles avec le coeur.
          Anciennement agent de sécurité pénitentiaire, je me suis reconverti en
          2024 pour devenir{" "}
          <Strong>développeur et concepteur d’applications</Strong>, après une
          période d’apprentissage en autodidacte.
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
