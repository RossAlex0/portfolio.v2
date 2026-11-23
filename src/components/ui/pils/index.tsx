import CustomText from "../custom-text";
import { PilsProps } from "./type";

import "./pils.css";

export default function Pils({
  containerStyle,
  textStyle,
  dark,
  children,
  ...props
}: PilsProps) {
  return (
    <div
      {...props}
      className={`pils_container ${dark ? "pils_dark" : "pils_light"}`}
      style={containerStyle}
    >
      <CustomText className="pils_content" style={textStyle}>
        {children}
      </CustomText>
    </div>
  );
}
