"use client";

import { motion } from "framer-motion";
import Pils from "@/components/ui/pils";
import { SkillGroupProps } from "./type";

export default function SkillGroup({ skills }: SkillGroupProps) {
  return (
    <motion.div
      className="skills_mapping flex_row"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.8, once: true }}
    >
      {skills.map((skill) => (
        <Pils key={skill}>{skill}</Pils>
      ))}
    </motion.div>
  );
}
