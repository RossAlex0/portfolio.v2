"use client";

import { motion } from "motion/react";
import WordsRotate from "@/components/ui/words-rotate";
import SocialLink from "@/components/ui/social-link";

import "./hero.css";

const ROTATING_WORDS = ["vous.", "nous.", "tous."];

const socialLinks = [
  {
    href: "https://linkedin.com/in/rossignolalex",
    iconName: "TbBrandLinkedin",
    label: "LinkedIn",
    target: undefined,
  },
  { href: "/contact", iconName: "TbMail", label: "Contact", target: "_self" },
  {
    href: "/meta/alex-rossignol-cv.pdf",
    iconName: "TbFileCv",
    label: "CV PDF",
    target: undefined,
  },
] as const;

export default function Hero() {
  return (
    <section className="hero section_container">
      <motion.div
        className="hero_text"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0, once: true }}
      >
        <h1 className="hero_heading">
          <span className="hero_title custom_title">
            Développeur passionné de <br className="hide_is_mobile" />
            solutions web et mobile,
            <span className="only_mobile"> conçues</span>
          </span>
          <span
            className="hero_title custom_title"
            style={{ overflow: "hidden" }}
          >
            <span className="hide_is_mobile">conçues&nbsp;</span>
            pour&nbsp;
            <WordsRotate words={ROTATING_WORDS} />
          </span>
        </h1>
      </motion.div>
      <div className="hero_link flex_row_center_center">
        {socialLinks.map((link, index) => (
          <SocialLink
            key={link.href}
            href={link.href}
            iconName={link.iconName}
            label={link.label}
            delay={index}
            size={46}
            target={link.target}
          />
        ))}
      </div>
    </section>
  );
}
