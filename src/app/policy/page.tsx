"use client";

import CustomText from "@/components/ui/custom-text";
import CustomButton from "@/components/ui/custom-button";

import "./policy.css";

export default function Policy() {
  return (
    <section className="policy_container">
      <h1 className="policy_title">Mentions légales</h1>
      <CustomText>Dernière mise à jour : Janvier 2026</CustomText>

      <CustomText isTitle>Éditeur du site</CustomText>
      <CustomText>
        Ce site est édité par :<br />
        <strong>Alex Rossignol</strong>
        <br />
        Contact :{" "}
        <a href="mailto:alexnw33910@gmail.com">alexnw33910@gmail.com</a>
      </CustomText>

      <CustomText isTitle>Hébergement</CustomText>
      <CustomText>
        Le site est hébergé par :<br />
        <strong>Vercel Inc.</strong>
        <br />
        440 N Barranca Ave #4133, Covina, CA 91723, USA
        <br />
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          https://vercel.com
        </a>
      </CustomText>
      <CustomButton style={{ width: "fit-content", marginTop: "5rem" }}>
        Retour
      </CustomButton>
    </section>
  );
}
