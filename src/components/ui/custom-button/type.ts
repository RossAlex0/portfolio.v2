import React from "react";

export type CustomButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    textStyle?: React.CSSProperties;
    theme?: "light" | "dark";
    href?: string;
  };
