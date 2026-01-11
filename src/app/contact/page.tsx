"use client";

import CustomInput from "@/components/ui/custom-input";
import CustomButton from "@/components/ui/custom-button";
import { useRouter } from "next/navigation";
import CustomText from "@/components/ui/custom-text";
import React from "react";
import usePostMail from "@/services/hook/usePostMail";
import CustomModalPage from "@/components/blocks/custom-modal";
import { useWindowSize } from "@/services/hook/useWindowSize";
import Loading from "../loading";
import { mobileWidth } from "@/services/const";

import "./contact.css";

export default function Contact() {
  const router = useRouter();
  const sendMail = usePostMail();
  const { width } = useWindowSize();

  const [resAppi, setResApi] = React.useState<boolean | null>(null);

  const [formContact, setFormContact] = React.useState({
    email: "",
    subject: "",
    name: "",
    message: "",
  });

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

  if (!width) return <Loading />;

  const firstANdSecondInputWidth = width <= mobileWidth ? "100%" : "50%";
  return (
    <CustomModalPage backgroundText="Contact" style={{ gap: "4rem" }}>
      {resAppi === null ? (
        <>
          <CustomText isTitle>Contactez moi</CustomText>

          <div className="contact_form flex_column">
            <div
              className={`contact_name_email flex_${width <= mobileWidth ? "column" : "row"}`}
            >
              <CustomInput
                label="Nom / Entreprise"
                inputWidth={firstANdSecondInputWidth}
                value={formContact.name}
                setValue={(v: string) =>
                  setFormContact({ ...formContact, name: v })
                }
              />
              <CustomInput
                label="Email"
                inputWidth={firstANdSecondInputWidth}
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
          </div>
          <div className="contact_button flex_row">
            <CustomButton theme="light">Fermer</CustomButton>
            <CustomButton
              disabled={isDisabled}
              onClick={handleClickSendButton}
              href="#"
            >
              Envoyer
            </CustomButton>
          </div>
        </>
      ) : (
        responseApiComponent()
      )}
    </CustomModalPage>
  );
}
