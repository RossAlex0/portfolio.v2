"use server";

import { parseContactForm } from "@/services/contact/validation";

export type SendContactResult = { ok: boolean };

const REQUEST_TIMEOUT_MS = 10_000;

/**
 * Forwards a contact message to the mail server.
 * Runs server-side only, so TOKEN_SERVER never reaches the browser.
 * `honeypot` must stay empty: bots filling it get a fake success.
 */
export async function sendContactMessage(
  input: unknown,
  honeypot: unknown
): Promise<SendContactResult> {
  if (typeof honeypot === "string" && honeypot !== "") return { ok: true };

  const form = parseContactForm(input);
  if (!form) return { ok: false };

  const { URL_SERVER, TOKEN_SERVER } = process.env;
  if (!URL_SERVER || !TOKEN_SERVER) {
    console.error("[contact] URL_SERVER or TOKEN_SERVER is not set");
    return { ok: false };
  }

  try {
    const res = await fetch(URL_SERVER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": TOKEN_SERVER,
      },
      body: JSON.stringify(form),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
    if (!res.ok) console.error(`[contact] mail server responded ${res.status}`);
    return { ok: res.ok };
  } catch (error) {
    console.error("[contact] mail server unreachable", error);
    return { ok: false };
  }
}
