import { IconName, IconPackKey } from "@/components/ui/custom-icon/type";

type Icon<T extends IconPackKey = IconPackKey> = {
  type: T;
  name: IconName<T>;
};

type Techno = {
  name: string;
  icon: Icon;
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

export type SoftSkills<T extends IconPackKey = IconPackKey> = {
  name: string;
  icon: {
    name: IconName<T>;
    pack: T;
  };
  exemple: string;
};
