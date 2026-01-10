"use client";

import { motion } from "framer-motion";
import CustomIcon from "@/components/ui/custom-icon";
import { SocialLinkProps } from "./type";
import Link from "next/link";
import React from "react";

export default function SocialLink({
  href,
  iconName,
  label,
  delay = 0,
  size = 36,
  light,
  disabledAnimation,
  target = "_blank",
}: SocialLinkProps) {
  const animation = React.useMemo(
    () =>
      disabledAnimation
        ? { initial: { opacity: 1, x: 0 } }
        : {
            initial: { opacity: 0, x: -25 * (delay + 1) },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.2 * (delay + 1) },
            viewport: { amount: 1, once: true },
            whileHover: { scale: 1.2 },
          },
    [disabledAnimation]
  );

  return (
    <Link
      href={href}
      target={target}
      rel="noopener noreferrer"
      aria-label={label}
    >
      <motion.div {...animation}>
        <CustomIcon
          name={iconName}
          size={size}
          color={light ? "#fffcee" : "#171717"}
        />
      </motion.div>
    </Link>
  );
}
