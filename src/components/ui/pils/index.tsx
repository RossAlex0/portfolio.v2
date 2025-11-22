import CustomText from "../custom-text";
import { PilsProps } from "./type";

import "./pils.css";

export default function Pils({
  containerStyle,
  textStyle,
  dark,
  ...props
}: PilsProps) {
  const accentStyleText = dark
    ? {
        color: "#fffcee",
      }
    : {
        color: "#171717",
      };
  const accentStyleContainer = dark
    ? {
        backgroundColor: "#0a1117dd",
      }
    : {
        backgroundColor: "#e0e0e0b5",
      };

  return (
    <div
      {...props}
      className="pils_container"
      style={{ ...accentStyleContainer, ...containerStyle }}
    >
      <CustomText
        className="pils_content"
        style={{ ...accentStyleText, ...textStyle }}
      >
        {props.children}
      </CustomText>
    </div>
  );
}
