import WordsRotate from "@/components/ui/words-rotate";
import CustomText from "@/components/ui/custom-text";
import { motion } from "framer-motion";
import SocialLink from "@/components/ui/social-link";

import "./hero.css";

export default function Hero() {
  const socialLinks = [
    {
      href: "https://linkedin.com/in/rossignolalex",
      iconName: "TbBrandLinkedin",
      label: "LinkedIn",
      size: 46,
      target: undefined,
    },
    {
      href: "/contact",
      iconName: "TbMail",
      label: "Contact",
      size: 46,
      target: "_self",
    },
    {
      href: "/meta/alex-rossignol-cv.pdf",
      iconName: "TbFileCv",
      label: "CV PDF",
      size: 46,
      target: undefined,
    },
  ] as const;

  return (
    <section className="hero section_container">
      <motion.div
        className="hero_text"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0, once: true }}
      >
        <CustomText className="hero_title" isTitle>
          Développeur passionné de <br />
          solutions web et mobile,
        </CustomText>
        <CustomText
          className="hero_title"
          style={{ overflow: "hidden" }}
          isTitle
        >
          conçues pour&nbsp;
          <WordsRotate words={["vous.", "nous.", "tous."]} />
        </CustomText>
      </motion.div>
      <div className="hero_link flex_row_center_center">
        {socialLinks.map((link, index) => (
          <SocialLink
            key={link.href}
            href={link.href}
            iconName={link.iconName}
            label={link.label}
            delay={index}
            size={link.size}
            target={link.target}
          />
        ))}
      </div>
    </section>
  );
}
