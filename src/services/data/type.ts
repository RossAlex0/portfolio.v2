import { IconName } from "@/components/ui/custom-icon/type";

type Techno = {
  name: string;
  icon: IconName;
};

type Description = {
  fr: string;
  en: string | null;
};

export enum FormatProject {
  WEB = "Web",
  MOBILE = "Mobile",
  TABLET = "Tablette",
  IOS = "IOS",
  CP = "Cross-Platforme",
  API = "API",
}
export enum TypeProject {
  FRONT = "Front-end",
  FULL = "Full-stack",
  BACK = "Back-end",
  BACKLESS = "Back-end Serverless",
}
export type Project = {
  id: number;
  name: string;
  year: string;
  techno: Techno[];
  link: string | null;
  github: string | null;
  image: string;
  image_size: { width: number; height: number };
  video: string | null;
  format: FormatProject[];
  type: TypeProject[];
  description: Description;
};

export type SoftSkills = {
  name: string;
  icon: IconName;
  exemple: string;
};
