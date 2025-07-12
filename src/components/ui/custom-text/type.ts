import React from "react";

export type CustomTextProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  isTitle?: boolean;
  className?: string;
};
