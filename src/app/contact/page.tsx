"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CustomInput from "@/components/ui/custom-input";
import CustomButton from "@/components/ui/custom-button";
import CustomText from "@/components/ui/custom-text";
import CustomModalPage from "@/components/blocks/custom-modal";
import { ROUTES } from "@/services/data/site";
import {
  ContactForm,
  CONTACT_MAX_LENGTH,
  EMPTY_CONTACT_FORM,
  parseContactForm,
} from "@/services/contact/validation";
import { sendContactMessage } from "./actions";
import ContactResult from "./ContactResult";

import "./contact.css";

const FORM_ID = "contact-form";
const REDIRECT_DELAY_MS = 3000;

export default function Contact() {
  const router = useRouter();
  const [form, setForm] = React.useState<ContactForm>(EMPTY_CONTACT_FORM);
  const [honeypot, setHoneypot] = React.useState("");
  const [success, setSuccess] = React.useState<boolean | null>(null);
  const [isSending, startSending] = React.useTransition();

  const isValid = parseContactForm(form) !== null;

  React.useEffect(() => {
    if (success === null) return;
    const timeout = setTimeout(
      () => router.push(ROUTES.home),
      REDIRECT_DELAY_MS
    );
    return () => clearTimeout(timeout);
  }, [success, router]);

  const fieldProps = (field: keyof ContactForm) => ({
    value: form[field],
    maxLength: CONTACT_MAX_LENGTH[field],
    setValue: (value: string) =>
      setForm((prev) => ({ ...prev, [field]: value })),
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid || isSending) return;

    startSending(async () => {
      const { ok } = await sendContactMessage(form, honeypot);
      setSuccess(ok);
    });
  };

  if (success !== null) {
    return (
      <CustomModalPage backgroundText="Contact" style={{ gap: "4rem" }}>
        <ContactResult success={success} />
      </CustomModalPage>
    );
  }

  return (
    <CustomModalPage backgroundText="Contact" style={{ gap: "4rem" }}>
      <CustomText as="h1" isTitle className="title_as_h2">
        Contactez moi
      </CustomText>

      <form
        id={FORM_ID}
        className="contact_form flex_column"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="contact_name_email flex_row">
          <CustomInput
            label="Nom / Entreprise"
            autoComplete="name"
            {...fieldProps("name")}
          />
          <CustomInput
            label="Email"
            type="email"
            autoComplete="email"
            {...fieldProps("email")}
          />
        </div>
        <CustomInput label="Objet" {...fieldProps("subject")} />
        <CustomInput label="Message" isTextArea {...fieldProps("message")} />
        <input
          className="contact_honeypot"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </form>
      <div className="contact_button flex_row">
        <CustomButton href={ROUTES.home} theme="light">
          Fermer
        </CustomButton>
        <CustomButton
          type="submit"
          form={FORM_ID}
          disabled={!isValid || isSending}
        >
          Envoyer
        </CustomButton>
      </div>
    </CustomModalPage>
  );
}
