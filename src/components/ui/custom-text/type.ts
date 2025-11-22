import { ComponentProps } from "react";
import { motion } from "framer-motion";

export type MotionParagraphProps = ComponentProps<typeof motion.p>;
export type MotionHeadingProps = ComponentProps<typeof motion.h2>;

export type CustomTextProps = { isTitle?: boolean } & MotionParagraphProps &
  MotionHeadingProps;
