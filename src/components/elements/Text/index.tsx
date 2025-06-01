"use client";

import { ReactNode, CSSProperties } from "react";
import "./text.css";

type CustomTextProps = {
  children: ReactNode;
  title?: boolean;
  style?: CSSProperties;
};

export default function Text({ children, title, style }: CustomTextProps) {
  if (title) {
    return (
      <h1 className="customTitle" style={style}>
        {children}
      </h1>
    );
  }
  return (
    <p className="customText" style={style}>
      {children}
    </p>
  );
}
