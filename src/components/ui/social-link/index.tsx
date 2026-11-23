"use client";

import { motion } from "motion/react";
import CustomIcon from "@/components/ui/custom-icon";
import { SocialLinkProps } from "./type";
import { getSocialLinkAnimation } from "./animation";
import Link from "next/link";
import React from "react";
import { COLORS } from "@/services/data/site";

export default function SocialLink({
  href,
  iconName,
  label,
  delay = 0,
  size = 36,
  light,
  disabledAnimation,
  target = "_blank",
  trigger,
}: SocialLinkProps) {
  const animation = React.useMemo(
    () =>
      getSocialLinkAnimation({ delay, disabled: disabledAnimation, trigger }),
    [delay, disabledAnimation, trigger]
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
          color={light ? COLORS.primary : COLORS.secondary}
        />
      </motion.div>
    </Link>
  );
}
