import { IconName } from "@/components/ui/custom-icon/type";

type Techno = {
  name: string;
  icon: IconName;
};

type Description = {
  fr: string;
  en: string;
};

export enum FormatProject {
  web = "Web",
  mobile = "Mobile",
  tablet = "Tablette",
  server = "Server",
  api = "API",
}
export enum TypeProject {
  Landing = "Landing Page",
  WebFull = "Application Web full stack",
  MobileFull = "Application Mobile full stack",
  MobileIosFull = "Application Ios full stack",
  Back = "Backend",
  BackServerless = "Backend Serverless",
}
export type Project = {
  id: number;
  name: string;
  year: string;
  techno: Techno[];
  link: string | null;
  github: string | null;
  image: string;
  video: string | null;
  format: FormatProject;
  type: TypeProject;
  description: Description;
};

export type SoftSkills = {
  name: string;
  icon: IconName;
  exemple: string;
};
