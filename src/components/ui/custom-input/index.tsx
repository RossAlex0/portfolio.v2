import React from "react";
import { motion } from "motion/react";
import { CustomInputProps } from "./type";
import "./custom-input.css";
import CustomIcon from "../custom-icon";
import { COLORS } from "@/services/data/site";

export default function CustomInput({
  label,
  isTextArea,
  value,
  setValue,
  ...props
}: CustomInputProps) {
  const [isFocused, setIsFocused] = React.useState(false);

  const topLabelFocus = isTextArea ? "-18px" : "-12px";

  const isFilled = value !== "" && !!value;

  const openInput = (value !== "" && !!value) || isFocused;

  const focusCircle = React.useCallback(
    () => (
      <div className="custom_input_chevron">
        <CustomIcon name="TbCircle" color={COLORS.secondary} size={8} />
      </div>
    ),
    []
  );
  return (
    <motion.div className="input_container">
      {isTextArea ? (
        <>
          <textarea
            id={label}
            className={`custom_input ${openInput ? "focus" : "not_focus"}`}
            style={{ resize: isFocused || isFilled ? "vertical" : "none" }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            {...props}
          />
          {isFocused ? focusCircle() : undefined}
        </>
      ) : (
        <>
          <input
            id={label}
            className={`custom_input ${openInput ? "focus" : "not_focus"}`}
            type="text"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            {...props}
          />{" "}
          {isFocused ? focusCircle() : undefined}
        </>
      )}

      <motion.label
        htmlFor={label}
        className="input_label"
        initial={{ top: "50%", left: "0.5rem", scale: 1, y: "-50%" }}
        animate={
          isFocused || isFilled
            ? {
                top: topLabelFocus,
                left: 0,
                scale: 0.7,
                y: 0,
                // Literal: motion cannot interpolate CSS variables.
                color: "#171717",
              }
            : {
                top: "50%",
                left: "0.5rem",
                scale: 1,
                y: "-50%",
              }
        }
        transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
      >
        {label}
      </motion.label>
    </motion.div>
  );
}
