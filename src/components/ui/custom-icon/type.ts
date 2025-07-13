import { IconBaseProps } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";

export const iconPacks = {
  Fa: FaIcons,
  Bi: BiIcons,
  Ri: RiIcons,
  Si: SiIcons,
  Tb: TbIcons,
};

export type IconPackKey = keyof typeof iconPacks;

export type IconNamesByPack = {
  Fa: keyof typeof FaIcons;
  Bi: keyof typeof BiIcons;
  Ri: keyof typeof RiIcons;
  Si: keyof typeof SiIcons;
  Tb: keyof typeof TbIcons;
};

export type IconName<T extends IconPackKey> = IconNamesByPack[T];

export type CustomIconProps<T extends IconPackKey = "Fa"> = IconBaseProps & {
  name: IconName<T>; // Le nom de l'icône est lié au pack sélectionné
  pack?: T; // Le pack d'icônes (par défaut 'Fa')
};
