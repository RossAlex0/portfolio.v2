import CustomText from "../custom-text";
import "./section-title.css";

export default function SectionTitle({
  children,
  containerStyle = {},
  textStyle = {},
  color,
}: {
  children: React.ReactNode;
  containerStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  color?: string;
}) {
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
        style={{
          ...textStyle,
          ...(color ? { color } : {}),
        }}
        isTitle
      >
        {children}
      </CustomText>
      <span
        className="section_title_line"
        style={color ? { backgroundColor: `${color}` } : {}}
      />
    </div>
  );
}
