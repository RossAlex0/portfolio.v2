import React from "react";

export type CustomButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  textStyle?: React.CSSProperties;
};
