import { IconName } from "../custom-icon/type";

export type SocialLinkProps = {
  href: string;
  iconName: IconName;
  delay: number;
  label: string;
  size?: number;
  target?: "_blank" | "_self";
};
