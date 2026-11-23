import { IconName } from "../custom-icon/type";
import { AnimationTrigger } from "./animation";

export type SocialLinkProps = {
  href: string;
  iconName: IconName;
  label: string;
  delay?: number;
  size?: number;
  light?: boolean;
  disabledAnimation?: boolean;
  target?: "_blank" | "_self";
  /** When the entrance animation plays (default: when scrolled into view). */
  trigger?: AnimationTrigger;
};
