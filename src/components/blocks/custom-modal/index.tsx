"use client";

import { motion } from "framer-motion";
import CustomButton from "@/components/ui/custom-button";
import CustomText from "@/components/ui/custom-text";
import { ComponentProps } from "react";
import { CustomModalPageProps } from "./type";

import "./custom-modal.css";

export default function CustomModalPage({
  children,
  backgroundText,
  ...props
}: CustomModalPageProps & ComponentProps<typeof motion.div>) {
  return (
    <section className={"custom_modal_container flex_row_center_center"}>
      <CustomButton className={"custom_modal_back_button"} theme="light">
        Retour
      </CustomButton>
      <CustomText isTitle className="custom_modal_text_background">
        {backgroundText}
      </CustomText>
      <motion.div
        {...props}
        className="custom_modal_block flex_column"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
