import type { MotionProps } from "motion/react";

export type AnimationTrigger = "inView" | "mount";

type AnimationOptions = {
  delay: number;
  disabled?: boolean;
  trigger?: AnimationTrigger;
};

/** Share of the icon that must be visible before it animates in. */
export const IN_VIEW_AMOUNT = 0.5;

/**
 * Motion props for a social icon.
 * - `mount`: plays on page load (above-the-fold content, e.g. the hero).
 * - `inView`: plays when scrolled into view.
 * - `disabled`: always visible; uses `animate` (not only `initial`) so the
 *   icon stays visible when animations get disabled after hydration.
 */
export function getSocialLinkAnimation({
  delay,
  disabled = false,
  trigger = "inView",
}: AnimationOptions): MotionProps {
  if (disabled) {
    return { animate: { opacity: 1, x: 0 }, transition: { duration: 0 } };
  }

  const visible = { opacity: 1, x: 0 };

  return {
    initial: { opacity: 0, x: -25 * (delay + 1) },
    transition: { duration: 0.2 * (delay + 1) },
    whileHover: { scale: 1.2 },
    ...(trigger === "mount"
      ? { animate: visible }
      : {
          whileInView: visible,
          viewport: { amount: IN_VIEW_AMOUNT, once: true },
        }),
  };
}
