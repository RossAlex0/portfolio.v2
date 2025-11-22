import { iconMap, CustomIconProps } from "./type";

export default function CustomIcon({
  name,
  size = 24,
  color = "black",
  ...props
}: CustomIconProps) {
  const IconComponent = iconMap[name] ?? iconMap.FaCode;

  return <IconComponent {...props} size={size} color={color} />;
}
