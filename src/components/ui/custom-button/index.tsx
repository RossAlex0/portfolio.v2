import CustomText from "@/components/ui/custom-text";
import { CustomButtonProps } from "./type";

import "./custom-button.css";

export default function CustomButton({
  children,
  textStyle,
  ...props
}: CustomButtonProps) {
  const buttonClass = `button_custom${props.disabled ? "_disabled" : ""}`;

  return (
    <button
      type="button"
      {...props}
      className={`${buttonClass} ${props.className}`}
      aria-label="button"
    >
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
