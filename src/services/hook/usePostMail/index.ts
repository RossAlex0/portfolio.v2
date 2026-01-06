import React from "react";
import type { EmailBody, ResponseServer } from "./type";

export default function usePostMail() {
  return React.useCallback(
    async (emailBody: EmailBody): Promise<ResponseServer> => {
      return fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailBody),
      }).then((res) => res.json());
    },
    []
  );
}
