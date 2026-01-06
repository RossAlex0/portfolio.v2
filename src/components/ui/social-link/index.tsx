"use client";

import { motion } from "framer-motion";
import CustomIcon from "@/components/ui/custom-icon";
import { SocialLinkProps } from "./type";

export default function SocialLink({
  href,
  iconName,
  delay,
  label,
}: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.2 }}
      initial={{ opacity: 0, x: -25 * (delay + 1) }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 * (delay + 1) }}
      viewport={{ amount: 1, once: true }}
    >
      <CustomIcon name={iconName} size={36} />
    </motion.a>
  );
}
