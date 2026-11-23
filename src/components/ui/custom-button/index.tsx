import Link from "next/link";
import CustomText from "@/components/ui/custom-text";
import { classNames } from "@/services/utils/classNames";
import { CustomButtonProps } from "./type";

import "./custom-button.css";

function DefaultLabel() {
  return (
    <>
      Contact Me <span className="text_arrow">&#10132;</span>
    </>
  );
}

export default function CustomButton({
  children,
  textStyle,
  theme = "dark",
  href,
  className,
  style,
  disabled,
  type = "button",
  ...props
}: CustomButtonProps) {
  const classes = classNames(
    disabled ? "button_custom_disabled" : `button_custom ${theme}`,
    className
  );

  const content = (
    <>
      <CustomText style={textStyle}>{children ?? <DefaultLabel />}</CustomText>
      <div className={`button_overlay_${theme}`} />
    </>
  );

  if (href !== undefined && !disabled) {
    return (
      <Link href={href} className={classes} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      className={classes}
      style={style}
    >
      {content}
    </button>
  );
}
