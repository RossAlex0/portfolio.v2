import CustomText from "@/components/ui/custom-text";
import { CustomButtonProps } from "./type";
import Link from "next/link";

import "./custom-button.css";

export default function CustomButton({
  children,
  textStyle,
  theme = "dark",
  href = "/",
  ...props
}: CustomButtonProps) {
  const buttonClass = props.disabled
    ? "button_custom_disabled"
    : `button_custom ${theme}`;

  return (
    <Link href={href}>
      <button
        type="button"
        {...props}
        className={`${buttonClass} ${props.className}`}
        aria-label="button"
      >
        <CustomText style={{ ...textStyle }}>
          {children ? (
            children
          ) : (
            <>
              Contact Me <span className="text_arrow">&#10132;</span>
            </>
          )}
        </CustomText>
        <div className={`button_overlay_${theme}`} />
      </button>
    </Link>
  );
}
