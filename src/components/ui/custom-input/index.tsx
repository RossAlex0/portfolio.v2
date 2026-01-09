import React from "react";
import { motion } from "framer-motion";
import { CustomInputProps } from "./type";
import "./custom-input.css";
import CustomIcon from "../custom-icon";

export default function CustomInput({
  label,
  inputWidth,
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
        <CustomIcon name="TbCircle" color="#171717" size={8} />
      </div>
    ),
    []
  );
  return (
    <motion.div
      className="input_container"
      style={inputWidth ? { width: `${inputWidth}` } : undefined}
    >
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
