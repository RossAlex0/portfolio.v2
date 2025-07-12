"use client";

import { CustomTextProps } from "./type";
import "./text.css";

export default function CustomText({
  children,
  isTitle,
  className,
  ...props
}: CustomTextProps) {
  if (isTitle) {
    return (
      <h2
        className={`custom_title ${className ? className : undefined}`}
        {...props}
      >
        {children}
      </h2>
    );
  }
  return (
    <p
      className={`custom_text ${className ? className : undefined}`}
      {...props}
    >
      {children}
    </p>
  );
}
