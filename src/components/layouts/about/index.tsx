import CustomText from "@/components/ui/custom-text";
import SectionTitle from "@/components/ui/section-title";
import Timeline from "@/components/blocks/timeline";

import "./about.css";
import CustomIcon from "@/components/ui/custom-icon";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section_container flex_column_center" id="about">
      <SectionTitle>À Propos</SectionTitle>
      <CustomText className="about_desc">
        <span className="strong">Développeur </span> rigoureux et créatif, je
        vois chaque ligne de code comme une opportunité
        <span className="strong"> d’apprendre</span> et de faire mieux.
        Optimiste de nature, j’aborde chaque défi avec énergie, comme un sportif
        en quête de <span className="strong"> performance</span>. Ma
        <span className="strong"> passion</span> me pousse à toujours aller{" "}
        <span className="strong"> plus loin</span>, que ce soit pour créer des
        produits utiles ou offrir une vraie expérience à l’utilisateur.
        Travailler avec <span className="strong"> plaisir</span>, c’est ce qui
        me motive au quotidien.
      </CustomText>
      <div className="about_content flex_column">
        <div className="link_rs flex_row">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/RossAlex0"
            target="_blank"
          >
            <CustomIcon name="TbBrandGithub" pack="Tb" size={36} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://gitlab.com/alex.rossignol"
            target="_blank"
          >
            <CustomIcon name="TbBrandGitlab" pack="Tb" size={36} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://linkedin.com/in/rossignolalex"
            target="_blank"
          >
            <CustomIcon name="TbBrandLinkedin" pack="Tb" size={36} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="">
            <CustomIcon name="TbFileCv" pack="Tb" size={36} />
          </motion.a>
        </div>
        <Timeline />
      </div>
    </section>
  );
}
