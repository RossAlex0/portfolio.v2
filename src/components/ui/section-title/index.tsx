import CustomText from "../custom-text";
import "./section-title.css";

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="section_title_container flex_row_center_center">
      <span className="section_title_line" />
      <CustomText isTitle>{children}</CustomText>
      <span className="section_title_line" />
    </div>
  );
}
