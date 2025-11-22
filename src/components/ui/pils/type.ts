import React from "react";

export type PilsProps = React.HTMLAttributes<HTMLDivElement> & {
  containerStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  dark?: boolean;
};
