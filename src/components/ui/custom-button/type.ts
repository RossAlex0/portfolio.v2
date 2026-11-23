import React from "react";

export type CustomButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    textStyle?: React.CSSProperties;
    theme?: "light" | "dark";
    /** Renders a link styled as a button when provided (and not disabled). */
    href?: string;
  };
