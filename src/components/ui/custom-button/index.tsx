import CustomText from "@/components/ui/custom-text";
import { CustomButtonProps } from "./type";

import "./custom-button.css";

export default function CustomButton({
  children,
  textStyle,
  ...props
}: CustomButtonProps) {
  return (
    <button type="button" className="button_custom" {...props}>
      <CustomText style={{ color: "#fffcee", ...textStyle }}>
        {children ? (
          children
        ) : (
          <>
            Contact Me <span className="text_arrow">&#10132;</span>
          </>
        )}
      </CustomText>
      <div className="button_overlay"></div>
    </button>
  );
}
