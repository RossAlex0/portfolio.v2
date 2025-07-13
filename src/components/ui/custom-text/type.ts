import React from "react";

export type CustomTextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
  isTitle?: boolean;
  className?: string;
};
