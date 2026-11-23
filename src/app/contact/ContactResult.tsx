import CustomText from "@/components/ui/custom-text";
import { COLORS } from "@/services/data/site";

const MESSAGE_STYLE = {
  color: COLORS.primary,
  margin: "auto",
  fontSize: "1.8rem",
};

export default function ContactResult({ success }: { success: boolean }) {
  return (
    <div className="res_api flex_column_center_center">
      <CustomText isTitle style={MESSAGE_STYLE}>
        {success
          ? "- Votre message a bien été envoyé ✅ -"
          : "- Une erreur s'est produite lors de l'envoi de votre message ❌ -"}
      </CustomText>
      <CustomText isTitle style={MESSAGE_STYLE}>
        – Vous allez être redirigé vers la page d’accueil –
      </CustomText>
    </div>
  );
}
