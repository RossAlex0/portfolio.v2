"use client";

import Text from "@/components/elements/Text";
import "./button.css";

export default function ButtonContact() {
  const handleClick = () => {
    return;
  };
  return (
    <button type="button" onClick={handleClick} className="button_custom">
      <Text style={{ color: "#fffcee" }}>
        Contact Me <span className="text_arrow">&#10132;</span>
      </Text>
      <div className="button_overlay"></div>
    </button>
  );
}
