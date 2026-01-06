import { IconName } from "@/components/ui/custom-icon/type";

export type SkillGroupProps = {
  skills: string[];
};

export type SoftSkillElementProps = {
  name: string;
  icon: IconName;
  description: string;
  index: number;
};
