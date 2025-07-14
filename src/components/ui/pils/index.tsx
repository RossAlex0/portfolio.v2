import CustomText from "../custom-text";
import { PilsProps } from "./type";

import "./pils.css";

export default function Pils({
  children,
  containerStyle,
  textStyle,
  accent,
}: PilsProps) {
  const accentStyleText = accent
    ? {
        color: "#fffcee",
      }
    : {
        color: "#171717",
      };
  const accentStyleContainer = accent
    ? {
        backgroundColor: "#0a1117dd",
      }
    : {
        backgroundColor: "#e0e0e0b5",
      };

  return (
    <div
      className="pils_container"
      style={{ ...accentStyleContainer, ...containerStyle }}
    >
      <CustomText
        className="pils_content"
        style={{ ...accentStyleText, ...textStyle }}
      >
        {children}
      </CustomText>
    </div>
  );
}
