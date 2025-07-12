import CustomText from "@/components/ui/custom-text";
import { ReactNode } from "react";
import "./custom-button.css";

export default function CustomButton({
  children,
  callback,
}: {
  children?: ReactNode;
  callback?: () => void;
}) {
  return (
    <button type="button" onClick={callback} className="button_custom">
      <CustomText style={{ color: "#fffcee" }}>
        {children ? (
          children
        ) : (
          <>
            Contact Me <span className="text_arrow">&#10132;</span>
          </>
        )}
      </CustomText>
      <div className="button_overlay"></div>
    </button>
  );
}
