import CustomText from "../custom-text";
import { PilsProps } from "./type";

import "./pils.css";

export default function Pils({
  children,
  containerStyle,
  textStyle,
}: PilsProps) {
  return (
    <div className="pils_container" style={containerStyle}>
      <CustomText className="pils_content" style={textStyle}>
        {children}
      </CustomText>
    </div>
  );
}
