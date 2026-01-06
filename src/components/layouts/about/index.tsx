import CustomText from "@/components/ui/custom-text";
import SectionTitle from "@/components/ui/section-title";
import Timeline from "@/components/blocks/timeline";
import CustomIcon from "@/components/ui/custom-icon";
import { motion } from "framer-motion";

import "./about.css";

export default function About() {
  const strong = (word: string) => <span className="strong">{word}</span>;
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
          J’aime {strong("comprendre")} comment les choses fonctionnent, alors
          je creuse pour en éclaircir chaque bout de ficelle. Mes années dans
          les équipes de sécurité pénitentiaire m’ont donné une{" "}
          {strong("rigueur")} et une {strong("gestion")} du stresse à toute
          épreuve, et le handball m’a appris la discipline, la{" "}
          {strong("communication")} et un esprit {strong("d’équipe")} affûté.
          Aujourd’hui, ces principes nourrissent ma façon de concevoir,{" "}
          {strong("coder")} et même débugger, avec l’envie simple de devenir{" "}
          {strong("meilleur")} chaque jour.
        </CustomText>
      </div>
      <div className="about_content flex_column">
        <div className="link_rs flex_row">
          <motion.a
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ amount: 1, once: true }}
            href="https://github.com/RossAlex0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomIcon name="TbBrandGithub" size={36} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ amount: 1, once: true }}
            href="https://gitlab.com/alex.rossignol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomIcon name="TbBrandGitlab" size={36} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 1, once: true }}
            href="https://linkedin.com/in/rossignolalex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomIcon name="TbBrandLinkedin" size={36} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 1, once: true }}
            href="/meta/alex-rossignol-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomIcon name="TbFileCv" size={36} />
          </motion.a>
        </div>
        <Timeline />
      </div>
    </section>
  );
}
