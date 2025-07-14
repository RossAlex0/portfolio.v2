"use client";

import CustomText from "@/components/ui/custom-text";
import CustomButton from "@/components/ui/custom-button";
import { useRouter } from "next/navigation";

import "./confidentialite.css";

export default function Confidentialite() {
  const router = useRouter();

  return (
    <section className="conf_container">
      <h1 className="conf_title">Politique de confidentialité</h1>
      <CustomText>Dernière mise à jour : juillet 2025</CustomText>

      <CustomText isTitle>1. Données collectées</CustomText>
      <CustomText>
        Ce site ne collecte aucune donnée personnelle automatiquement. Les
        seules données collectées sont celles que vous renseignez volontairement
        via le formulaire de contact (nom, adresse e-mail, message).
      </CustomText>

      <CustomText isTitle>2. Utilisation des données</CustomText>
      <CustomText>
        Ces informations sont utilisées uniquement pour répondre à votre
        demande. Elles ne sont ni stockées, ni exploitées à des fins
        commerciales ou publicitaires.
      </CustomText>

      <CustomText isTitle>3. Conservation</CustomText>
      <CustomText>
        Les messages sont transmis par e-mail au propriétaire du site et
        conservés uniquement dans sa boîte mail personnelle. Ils peuvent être
        supprimés à votre demande.
      </CustomText>

      <CustomText isTitle>4. Vos droits</CustomText>
      <CustomText>
        Conformément au RGPD, vous pouvez demander à accéder, modifier ou
        supprimer vos données en envoyant un message à :{" "}
        <strong>alexnw33910@gmail.com</strong>
      </CustomText>
      <CustomButton
        onClick={() => router.push("/")}
        style={{ width: "fit-content", marginTop: "5rem" }}
      >
        Retour
      </CustomButton>
    </section>
  );
}
