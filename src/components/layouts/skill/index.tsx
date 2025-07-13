import React from "react";
import SectionTitle from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { hardSkills, softSkills, toolSkills } from "@/services/data";
import Pils from "@/components/ui/pils";
import CustomIcon from "@/components/ui/custom-icon";
import CustomText from "@/components/ui/custom-text";

import "./skill.css";

export default function Skill() {
  return (
    <section className="section_container flex_column" id="skill">
      <SectionTitle>Compétences</SectionTitle>
      <div className="skill_container flex_row">
        <div className="soft_skill flex_column">
          <div className="soft_skill_block flex_row_between">
            {softSkills.map((sskill) => (
              <motion.div
                className="soft_skill_element flex_row"
                key={sskill.name}
                initial={{ y: 0, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)" }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.35)",
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <CustomIcon
                  name={sskill.icon.name}
                  pack={sskill.icon.pack}
                  size={26}
                />
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
            ))}
          </div>
        </div>
        <div className="hard_tools_container flex_column">
          <div className="hard_skill flex_column">
            <div className="skills_mapping flex_row_center">
              {hardSkills.map((hskill) => (
                <Pils key={hskill}>{hskill}</Pils>
              ))}
            </div>
          </div>
          <div className="tools_skill flex_column">
            <div className="skills_mapping flex_row_center">
              {toolSkills.map((tool) => (
                <Pils key={tool}>{tool}</Pils>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
