import { IconName } from "../custom-icon/type";

export type SocialLinkProps = {
  href: string;
  iconName: IconName;
  label: string;
  delay?: number;
  size?: number;
  light?: boolean;
  disabledAnimation?: boolean;
  target?: "_blank" | "_self";
};
