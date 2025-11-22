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
  FaPiedPiperSquare,
  FaYoutube,
} from "react-icons/fa";
import {
  SiGitlab,
  SiLinkedin,
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
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import {
  TbMail,
  TbBrain,
  TbBrandGithub,
  TbBrandGitlab,
  TbBrandLinkedin,
  TbFileCv,
  TbWorld,
  TbBrandReactNative,
  TbHeartRateMonitor,
  TbRocket,
  TbBulb,
  TbBug,
  TbCircle,
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
  FaPiedPiperSquare,
  FaYoutube,
};

const iconSi = {
  SiGitlab,
  SiLinkedin,
  SiTypescript,
  SiJavascript,
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

const iconTb = {
  TbMail,
  TbBrandGithub,
  TbBrandGitlab,
  TbBrandLinkedin,
  TbFileCv,
  TbWorld,
  TbBrain,
  TbBrandReactNative,
  TbHeartRateMonitor,
  TbRocket,
  TbBulb,
  TbBug,
  TbCircle,
};

export const iconMap = {
  ...iconFa,
  ...iconSi,
  ...iconTb,
};
