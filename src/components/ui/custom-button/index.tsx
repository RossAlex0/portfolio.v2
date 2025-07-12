import Text from "@/components/ui/Text";
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
      <Text style={{ color: "#fffcee" }}>
        {children ? (
          children
        ) : (
          <>
            Contact Me <span className="text_arrow">&#10132;</span>
          </>
        )}
      </Text>
      <div className="button_overlay"></div>
    </button>
  );
}
