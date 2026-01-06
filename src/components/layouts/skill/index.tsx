import SectionTitle from "@/components/ui/section-title";
import { hardSkills, softSkills, toolSkills } from "@/services/data";
import SoftSkillElement from "./SoftSkillElement";
import SkillGroup from "./SkillGroup";

import "./skill.css";

export default function Skill() {
  return (
    <section className="section_container flex_column" id="skill">
      <SectionTitle>Compétences</SectionTitle>
      <div className="skill_container flex_row">
        <div className="soft_skill flex_column">
          <div className="soft_skill_block flex_row_between">
            {softSkills.map((skill, index) => (
              <SoftSkillElement
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                description={skill.exemple}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="hard_tools_container flex_column">
          <div className="hard_skill flex_column">
            <SkillGroup skills={hardSkills} />
          </div>
          <div className="tools_skill flex_column">
            <SkillGroup skills={toolSkills} />
          </div>
        </div>
      </div>
    </section>
  );
}
