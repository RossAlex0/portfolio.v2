"use client";

import CustomInput from "@/components/ui/custom-input";
import CustomButton from "@/components/ui/custom-button";
import { useRouter } from "next/navigation";

import "./contact.css";
import SectionTitle from "@/components/ui/section-title";
import { motion } from "framer-motion";

export default function Contact() {
  const router = useRouter();

  const buttonStyle = {
    style: {
      width: "fit-content",
      border: "1px solid #fffcee",
    },
    textStyle: {
      fontFamily: "Rubik-bold",
    },
  } as const;

  return (
    <section className="contact_container flex_row_center_center">
      <motion.div
        className="contact_block flex_column"
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.8, once: true }}
      >
        <SectionTitle containerStyle={{ marginBottom: 0 }} color="#fffcee">
          Contactez moi
        </SectionTitle>
        <div className="flex_row" style={{ width: "100%", gap: "2rem" }}>
          <CustomInput label="Nom / Entreprise" inputWidth={"50%"} />
          <CustomInput label="Email" inputWidth={"50%"} />
        </div>
        <CustomInput label="Objet" />
        <CustomInput label="Message" isTextArea />

        <div className="contact_button flex_row">
          <CustomButton onClick={() => router.push("/")} {...buttonStyle}>
            Fermer
          </CustomButton>
          <CustomButton onClick={() => router.push("/")} {...buttonStyle}>
            Envoyer
          </CustomButton>
        </div>
      </motion.div>
    </section>
  );
}
