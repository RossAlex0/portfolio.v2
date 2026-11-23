import { ComponentProps } from "react";
import { motion } from "motion/react";

export type MotionParagraphProps = ComponentProps<typeof motion.p>;
export type MotionHeadingProps = ComponentProps<typeof motion.h2>;

export type TextTag = "h1" | "h2" | "h3" | "p";

export type CustomTextProps = {
  isTitle?: boolean;
  /** Overrides the rendered tag (defaults to h2 for titles, p otherwise). */
  as?: TextTag;
} & MotionParagraphProps &
  MotionHeadingProps;
