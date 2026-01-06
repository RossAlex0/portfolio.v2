"use client";

import React from "react";
import { motion } from "framer-motion";
import CustomIcon from "@/components/ui/custom-icon";
import CustomText from "@/components/ui/custom-text";
import { SoftSkillElementProps } from "./type";

export default function SoftSkillElement({
  name,
  icon,
  description,
  index,
}: SoftSkillElementProps) {
  return (
    <motion.div
      className="soft_skill_element flex_row"
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
      <CustomIcon name={icon} size={26} />
      <div className="soft_skill_element_container">
        <CustomText className="soft_skill_element_title">{name}</CustomText>
        <CustomText className="soft_skill_element_description">
          {description}
        </CustomText>
      </div>
    </motion.div>
  );
}
