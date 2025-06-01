"use client";

import { ReactNode } from "react";
import "./bubbleOverlay.css";

export default function BubbleOverlay({ children }: { children: ReactNode }) {
  const HandlePressBubble = () => {
    console.info("ca marhce");
  };

  return (
    <button type="button" onClick={HandlePressBubble} className="bubbleButton">
      {children}
    </button>
  );
}
