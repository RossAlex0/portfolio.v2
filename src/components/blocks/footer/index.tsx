"use client";

import CustomText from "@/components/ui/custom-text";
import CustomIcon from "@/components/ui/custom-icon";
import Link from "next/link";
import SocialLink from "@/components/ui/social-link";
import { motion } from "motion/react";
import { useWindowSizeContext } from "@/services/context/WindowSizeContext";

import { COLORS, EXTERNAL_LINKS, OWNER, ROUTES } from "@/services/data/site";

import "./footer.css";

/** Reveal animation on desktop only (disabled on mobile for scroll perf). */
function FooterReveal({ children }: { children: React.ReactNode }) {
  const { isMobile } = useWindowSizeContext();

  if (isMobile) {
    return <div className="footer_block flex_column">{children}</div>;
  }

  return (
    <motion.div
      className="footer_block flex_column"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.2, once: true }}
    >
      {children}
    </motion.div>
  );
}

export default function Footer() {
  const socialLinks = [
    {
      href: EXTERNAL_LINKS.github,
      iconName: "FaGithub",
      label: "Github",
      light: true,
      size: 28,
    },
    {
      href: EXTERNAL_LINKS.gitlab,
      iconName: "SiGitlab",
      label: "Gitlab",
      light: true,
      size: 28,
    },
    {
      href: EXTERNAL_LINKS.linkedin,
      iconName: "SiLinkedin",
      label: "LinkedIn",
      light: true,
      size: 28,
    },
    {
      href: ROUTES.contact,
      iconName: "TbMail",
      label: "Email",
      light: true,
      size: 28,
    },
  ] as const;

  return (
    <footer className="footer_container flex_column_center_center">
      <FooterReveal>
        <div className="footer_head_block flex_row">
          <div className="footer_head_infos flex_column">
            <div className="infos_title flex_row">
              <CustomIcon
                name="FaCode"
                color={COLORS.primary}
                className="icons"
              />
              <CustomText>Full Stack Developer & Mobile Developer</CustomText>
            </div>
            <CustomText className="infos_user">Toulouse, France.</CustomText>
            <CustomText className="infos_user">
              <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a>
            </CustomText>
            <CustomText className="infos_user">
              <a href={`tel:${OWNER.phone}`}>{OWNER.phoneDisplay}</a>
            </CustomText>
          </div>
          <div className="footer_head_infos flex_column">
            <CustomText className="infos_user hide_is_tablet_portrait_and_mobile">
              Passionné, rigoureux, toujours en mouvement - Du concept à la mise
              en production - Le détail fait la différence.
            </CustomText>
            <div className="footer_link flex_row">
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.href}
                  target={link.label === "Email" ? "_self" : "_blank"}
                  iconName={link.iconName}
                  label={link.label}
                  light={link.light}
                  size={link.size}
                  disabledAnimation={true}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="footer_footer flex_row_between">
          <CustomText className="infos_user legal_link">
            © {new Date().getFullYear()} – Tous droits réservés · {OWNER.name}
          </CustomText>
          <div className="footer_legal flex_row">
            <Link
              href={ROUTES.privacy}
              prefetch={false}
              style={{ color: COLORS.primary }}
            >
              <CustomText className="infos_user legal_link">
                Politique de confidentialités
              </CustomText>
            </Link>
            <CustomText className="infos_user legal_link hide_is_mobile">
              -
            </CustomText>
            <Link
              href={ROUTES.legal}
              prefetch={false}
              style={{ color: COLORS.primary }}
            >
              <CustomText className="infos_user legal_link">
                Mentions légales
              </CustomText>
            </Link>
          </div>
        </div>
      </FooterReveal>

      <div className="title_footer" aria-hidden="true">
        Developpeur Full Stack.
      </div>
    </footer>
  );
}
