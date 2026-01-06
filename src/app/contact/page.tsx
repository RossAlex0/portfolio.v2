"use client";

import CustomInput from "@/components/ui/custom-input";
import CustomButton from "@/components/ui/custom-button";
import { useRouter } from "next/navigation";
import SectionTitle from "@/components/ui/section-title";
import { motion } from "framer-motion";
import CustomText from "@/components/ui/custom-text";
import React from "react";

import "./contact.css";
import usePostMail from "@/services/hook/usePostMail";

export default function Contact() {
  const router = useRouter();
  const sendMail = usePostMail();

  const [resAppi, setResApi] = React.useState<boolean | null>(null);

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

  const isDisabled = React.useMemo(() => {
    if (
      !formContact.name ||
      !formContact.email ||
      !formContact.subject ||
      !formContact.message
    ) {
      return true;
    }

    if (formContact.email.length < 6 || !formContact.email.includes("@")) {
      return true;
    }

    if (formContact.subject.length > 80) {
      return true;
    }

    return false;
  }, [formContact]);

  const responseApiComponent = React.useCallback(
    () => (
      <div className="res_api flex_column_center_center">
        <CustomText
          isTitle
          style={{ color: "#fffcee", margin: "auto", fontSize: "1.8rem" }}
        >
          {resAppi
            ? "- Votre message a bien été envoyé ✅ -"
            : "- Une erreur s'est produite lors de l'envoi de votre message ❌ -"}
        </CustomText>
        <CustomText
          isTitle
          style={{ color: "#fffcee", margin: "auto", fontSize: "1.8rem" }}
        >
          – Vous allez être redirigé vers la page d’accueil –
        </CustomText>
      </div>
    ),
    [resAppi]
  );

  const handleClickSendButton = () => {
    if (!isDisabled) {
      sendMail(formContact)
        .then((e) => {
          if ("error" in e) {
            setResApi(false);
          } else {
            setResApi(!!e);
          }
        })
        .catch(() => setResApi(false));

      setTimeout(() => {
        setResApi(null);
        router.back();
      }, 3500);
    }
  };

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
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {resAppi === null ? (
          <>
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
                onClick={handleClickSendButton}
                {...buttonStyle}
              >
                Envoyer
              </CustomButton>
            </div>
          </>
        ) : (
          responseApiComponent()
        )}
      </motion.div>
    </section>
  );
}
