"use client";

import { CustomTextProps } from "./type";
import { motion } from "framer-motion";

import "./text.css";

export default function CustomText({ isTitle, ...props }: CustomTextProps) {
  const combinedClass = `${props.className} ${
    isTitle ? "custom_title" : "custom_text"
  } `;

  return isTitle ? (
    <motion.h2 {...props} className={combinedClass} />
  ) : (
    <motion.p {...props} className={combinedClass} />
  );
}
