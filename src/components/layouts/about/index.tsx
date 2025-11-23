import CustomText from "@/components/ui/custom-text";
import SectionTitle from "@/components/ui/section-title";
import Timeline from "@/components/blocks/timeline";
import CustomIcon from "@/components/ui/custom-icon";
import { motion } from "framer-motion";

import "./about.css";

export default function About() {
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
          {/* Faire <span className="strong">mieux</span> qu&apos;hier, pour que
          demain me <span className="strong"></span>! */}
          {/* <span className="strong">Développeur </span> rigoureux et créatif, je
          vois chaque ligne de code comme une opportunité
          <span className="strong"> d’apprendre</span> et de faire mieux.
          Optimiste de nature, j’aborde chaque défi avec énergie, comme un
          sportif en quête de <span className="strong"> performance</span>. Ma
          <span className="strong"> passion</span> me pousse à toujours aller{" "}
          <span className="strong"> plus loin</span>, que ce soit pour créer des
          produits utiles ou offrir une vraie expérience à l’utilisateur.
          Travailler avec <span className="strong"> plaisir</span>, c’est ce qui
          me motive au quotidien. */}
          {/* Développeur curieux et créatif, je vois chaque projet comme une chance
          de progresser et d’aller plus loin. Toujours positif, j’aborde chaque
          défi avec l’envie de performer, comme un sportif qui cherche à
          dépasser son propre record. Ce qui me motive vraiment : créer des
          interfaces utiles, fluides, et agréables à utiliser. Je travaille avec
          passion, et ça se ressent dans chaque détail. */}
          {/* Comprendre et expérimenter pour aller au fond des choses. Le
          handball ou la musculation m’ont appris rigueur et constance, et même
          mon ancien travail en pénitentiaire m’a appris à m’adapter vite.
          Aujourd’hui, je mets tout ça au service du développement, pour créer
          des solutions solides et efficaces.

          - ca m'enerve de pas comprendre donc j'explore pour comprendre les outils que j'utilise
          - Pendant 7ans au seins des Equipe de sécurité pénitentiaire j'ai acuéri la rigueur, l'daptabilité et aujourdh'ui la pression ne me destabilise pas dans les tache que j'execute
          - Le sport m'as appris la rigueur et ameliorer mes competence à travailler en Equipe dans des championnats de haut niveau
          - j'ai toujours trzavziller en equipe, partager mes acquis et appris des autres 
          - ma reconvertion est à l'image de ma motivation que j'applique dans chacun de mes projets 
          - 


            -J’aime comprendre comment les choses fonctionnent, alors je creuse, je teste et je vais jusqu’au bout des outils que j’utilise. Cette manière d’apprendre m’accompagne depuis longtemps, renforcée par le sport de haut niveau et mes années en sécurité où j’ai développé la rigueur, l’adaptabilité et l’habitude de travailler en équipe. Aujourd’hui, tout ça nourrit ma façon de coder : avancer proprement, chercher la solution la plus efficace et donner le maximum sur chaque projet.

            on va essayé de reprendre phrase par phrase : - J’aime comprendre comment les choses fonctionnent, alors je creuse, je teste et je vais jusqu’au bout des outils que j’utilise. :: je dirais plutot alors je creuse pour en éclaircir chaque bout de ficelle -Cette manière d’apprendre m’accompagne depuis longtemps, renforcée par le sport de haut niveau et mes années en sécurité où j’ai développé la rigueur, l’adaptabilité et l’habitude de travailler en équipe. ::: sport de haut niveau = handball ;; mes années en sécurité où j’ai développé la rigueur= mes 7 années dans les equipes de securité pénitentiaire ou j'ai acquis une rigueur à toute épreuves. - Aujourd’hui, tout ça nourrit ma façon de coder : avancer proprement, chercher la solution la plus efficace et donner le maximum sur chaque projet :::: aujourd'hui ces princcipes noiurrissent ma facon de concevoir et coder. Pas besoin d'en faire trop sur chaque ligne

          - J’aime comprendre comment les choses fonctionnent, alors je creuse pour en éclaircir chaque bout de ficelle. Mes 7 années dans les équipes de sécurité pénitentiaire m’ont appris une rigueur à toute épreuve, et le handball de haut niveau m’a appris le travail en équipe et la discipline. Aujourd’hui, ces principes nourrissent ma façon de concevoir et coder, pour trouver la solution la plus efficace et donner le meilleur sur chaque projet.
 */}
          J’aime comprendre comment les choses fonctionnent, alors je creuse
          pour en éclaircir chaque bout de ficelle. Mes années dans les équipes
          de sécurité pénitentiaire m’ont donné une rigueur et une gestion du
          stresse à toute épreuve, et le handball m’a appris la discipline, la
          communication et un esprit d’équipe affûté. Aujourd’hui, ces principes
          nourrissent ma façon de concevoir, coder et même débugger, avec
          l’envie simple de devenir meilleur chaque jour.
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
          >
            <CustomIcon name="TbBrandLinkedin" size={36} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 1, once: true }}
            href=""
          >
            <CustomIcon name="TbFileCv" size={36} />
          </motion.a>
        </div>
        <Timeline />
      </div>
    </section>
  );
}
