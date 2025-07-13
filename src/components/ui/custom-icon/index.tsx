import { IconBaseProps } from "react-icons";
import { CustomIconProps, IconPackKey, iconPacks } from "./type";

export default function CustomIcon<T extends IconPackKey = "Fa">({
  name,
  pack = "Fa",
  size = 24,
  color = "black",
  ...props
}: CustomIconProps<T>) {
  const icons = iconPacks[pack];

  const IconComponent = icons[
    name as keyof typeof icons
  ] as React.ComponentType<IconBaseProps>;

  if (!IconComponent) {
    return <iconPacks.Fa.FaCode size={size} color={color} />;
  }

  return <IconComponent size={size} color={color} {...props} />;
}
