"use client";

import CustomInput from "@/components/ui/custom-input";
import CustomButton from "@/components/ui/custom-button";
import { useRouter } from "next/navigation";
import SectionTitle from "@/components/ui/section-title";
import { motion } from "framer-motion";
import CustomText from "@/components/ui/custom-text";
import React from "react";

import "./contact.css";

export default function Contact() {
  const router = useRouter();

  const [formContact, setFormContact] = React.useState({
    email: "",
    subject: "",
    name: "",
    message: "",
  });

  const buttonStyle = {
    style: {
      width: "fit-content",
      border: "1px solid #fffcee",
    },
    textStyle: {
      fontFamily: "Rubik-bold",
    },
  } as const;

  const isDisabled = Object.values(formContact).some((v) => !v);

  return (
    <section className="contact_container flex_row_center_center">
      <CustomButton className="contact_back_button" onClick={router.back}>
        Retour
      </CustomButton>
      <CustomText isTitle className="contact_text_background">
        Formulaire de contact
      </CustomText>
      <motion.div
        className="contact_block flex_column"
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0, once: true }}
      >
        <SectionTitle containerStyle={{ marginBottom: 0 }} color="#fffcee">
          Contactez moi
        </SectionTitle>
        <div className="flex_row" style={{ width: "100%", gap: "2rem" }}>
          <CustomInput
            label="Nom / Entreprise"
            inputWidth={"50%"}
            value={formContact.name}
            setValue={(v: string) =>
              setFormContact({ ...formContact, name: v })
            }
          />
          <CustomInput
            label="Email"
            inputWidth={"50%"}
            value={formContact.email}
            setValue={(v: string) =>
              setFormContact({ ...formContact, email: v })
            }
          />
        </div>
        <CustomInput
          label="Objet"
          value={formContact.subject}
          setValue={(v: string) =>
            setFormContact({ ...formContact, subject: v })
          }
        />
        <CustomInput
          label="Message"
          isTextArea
          value={formContact.message}
          setValue={(v: string) =>
            setFormContact({ ...formContact, message: v })
          }
        />

        <div className="contact_button flex_row">
          <CustomButton onClick={router.back} {...buttonStyle}>
            Fermer
          </CustomButton>
          <CustomButton
            disabled={isDisabled}
            onClick={() => console.info("TODO")}
            {...buttonStyle}
          >
            Envoyer
          </CustomButton>
        </div>
      </motion.div>
    </section>
  );
}
