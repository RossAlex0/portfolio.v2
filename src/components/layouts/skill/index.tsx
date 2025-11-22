import React from "react";
import SectionTitle from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { hardSkills, softSkills, toolSkills } from "@/services/data";
import Pils from "@/components/ui/pils";
import CustomIcon from "@/components/ui/custom-icon";
import CustomText from "@/components/ui/custom-text";

import "./skill.css";

export default function Skill() {
  const softSkillsComponent = React.useCallback(
    () =>
      softSkills.map((sskill, index) => (
        <motion.div
          className="soft_skill_element flex_row"
          key={sskill.name}
          initial={{
            y: 0,
            x: -80,
            opacity: 0,
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.10)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            y: -4,
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.30)",
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          viewport={{ amount: 0.3 + index / 10, once: true }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <CustomIcon name={sskill.icon} size={26} />
          <div style={{ width: "88%" }}>
            <CustomText style={{ fontSize: "16px", fontWeight: "bold" }}>
              {sskill.name}
            </CustomText>
            <CustomText
              style={{
                fontSize: "10px",
                opacity: 0.7,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {sskill.exemple}
            </CustomText>
          </div>
        </motion.div>
      )),
    []
  );

  const hardSkillComponent = React.useCallback(
    () => hardSkills.map((hskill) => <Pils key={hskill}>{hskill}</Pils>),
    []
  );
  const toolSkillComponent = React.useCallback(
    () => toolSkills.map((tool) => <Pils key={tool}>{tool}</Pils>),
    []
  );

  return (
    <section className="section_container flex_column" id="skill">
      <SectionTitle>Compétences</SectionTitle>
      <div className="skill_container flex_row">
        <div className="soft_skill flex_column">
          <div className="soft_skill_block flex_row_between">
            {softSkillsComponent()}
          </div>
        </div>
        <div className="hard_tools_container flex_column">
          <div className="hard_skill flex_column">
            <motion.div
              className="skills_mapping flex_row"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.8, once: true }}
            >
              {hardSkillComponent()}
            </motion.div>
          </div>
          <div className="tools_skill flex_column">
            <motion.div
              className="skills_mapping flex_row"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.8, once: true }}
            >
              {toolSkillComponent()}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
