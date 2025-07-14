import React from "react";
import { motion } from "framer-motion";
import { CustomInputProps } from "./type";

import "./custom-input.css";

export default function CustomInput({
  label,
  inputWidth,
  isTextArea,
  ...props
}: CustomInputProps) {
  const [isFocused, setIsFocused] = React.useState(false);

  const topLabelFocus = isTextArea ? "-16px" : "-12px";
  return (
    <motion.div
      className="input_container"
      style={inputWidth ? { width: `${inputWidth}` } : undefined}
    >
      {isTextArea ? (
        <textarea
          className={`custom_input ${isFocused ? "focus" : "not_focus"}`}
          style={{ resize: "vertical" }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={`custom_input ${isFocused ? "focus" : "not_focus"}`}
          type="text"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      <motion.p
        className="input_label"
        initial={{ top: "50%", left: "0.5rem", scale: 1, y: "-50%" }}
        animate={
          isFocused
            ? {
                top: topLabelFocus,
                left: 0,
                scale: 0.7,
                y: 0,
              }
            : { top: "50%", left: "0.5rem", scale: 1, y: "-50%" }
        }
        transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}
