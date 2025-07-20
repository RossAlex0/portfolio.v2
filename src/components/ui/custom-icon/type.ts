import {
  FaCode,
  FaGithub,
  FaCss3Alt,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaRetweet,
  FaHandshake,
  FaWrench,
} from "react-icons/fa";
import {
  SiGitlab,
  SiLinkedin,
  SiWelcometothejungle,
  SiVercel,
  SiExpo,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiSentry,
  SiApollographql,
  SiDirectus,
  SiPostgresql,
  SiVite,
  SiOvh,
  SiGmail,
} from "react-icons/si";
import { BiLogoTypescript, BiSearchAlt2 } from "react-icons/bi";
import {
  RiYoutubeLine,
  RiNextjsFill,
  RiJavascriptFill,
  RiBugLine,
} from "react-icons/ri";
import {
  TbMail,
  TbBrandGithub,
  TbBrandGitlab,
  TbBrandLinkedin,
  TbFileCv,
  TbWorld,
  TbFileDescription,
  TbBrandReactNative,
  TbHeartRateMonitor,
  TbRocket,
  TbBulb,
} from "react-icons/tb";

import { IconBaseProps } from "react-icons";

export type IconName = keyof typeof iconMap;

export type CustomIconProps = IconBaseProps & {
  name: IconName;
};

const iconFa = {
  FaCode,
  FaGithub,
  FaCss3Alt,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaRetweet,
  FaHandshake,
  FaWrench,
};

const iconSi = {
  SiGitlab,
  SiLinkedin,
  SiWelcometothejungle,
  SiVercel,
  SiExpo,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiSentry,
  SiApollographql,
  SiDirectus,
  SiPostgresql,
  SiVite,
  SiOvh,
  SiGmail,
};

const iconBi = {
  BiLogoTypescript,
  BiSearchAlt2,
};
const iconRi = {
  RiYoutubeLine,
  RiNextjsFill,
  RiJavascriptFill,
  RiBugLine,
};
const iconTb = {
  TbMail,
  TbBrandGithub,
  TbBrandGitlab,
  TbBrandLinkedin,
  TbFileCv,
  TbWorld,
  TbFileDescription,
  TbBrandReactNative,
  TbHeartRateMonitor,
  TbRocket,
  TbBulb,
};

export const iconMap = {
  ...iconFa,
  ...iconSi,
  ...iconBi,
  ...iconRi,
  ...iconTb,
};
