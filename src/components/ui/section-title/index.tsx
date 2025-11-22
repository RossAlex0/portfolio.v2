import CustomText from "../custom-text";
import { SectionTitleProps } from "./type";

import "./section-title.css";

export default function SectionTitle({
  containerStyle = {},
  textStyle = {},
  color,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className="section_title_container flex_row_center_center"
      style={containerStyle}
    >
      <span
        className="section_title_line"
        style={color ? { backgroundColor: `${color}` } : {}}
      />
      <CustomText
        {...props}
        style={{
          ...textStyle,
          ...(color ? { color } : {}),
        }}
        isTitle
      />
      <span
        className="section_title_line"
        style={color ? { backgroundColor: `${color}` } : {}}
      />
    </div>
  );
}
