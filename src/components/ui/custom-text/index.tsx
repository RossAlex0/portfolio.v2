"use client";

import { motion } from "motion/react";
import { classNames } from "@/services/utils/classNames";
import { CustomTextProps } from "./type";

import "./text.css";

export default function CustomText({
  isTitle,
  as,
  className,
  ...props
}: CustomTextProps) {
  const Tag = motion[as ?? (isTitle ? "h2" : "p")];

  return (
    <Tag
      {...props}
      className={classNames(
        className,
        isTitle ? "custom_title" : "custom_text"
      )}
    />
  );
}
