import { ComponentProps } from "react";
import { motion } from "motion/react";

export type MotionParagraphProps = ComponentProps<typeof motion.p>;
export type MotionHeadingProps = ComponentProps<typeof motion.h2>;

export type CustomTextProps = { isTitle?: boolean } & MotionParagraphProps &
  MotionHeadingProps;
