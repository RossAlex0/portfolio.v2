export type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const CONTACT_FIELDS = ["name", "email", "subject", "message"] as const;

export const CONTACT_MAX_LENGTH: Record<keyof ContactForm, number> = {
  name: 100,
  email: 254,
  subject: 80,
  message: 5000,
};

export const EMPTY_CONTACT_FORM: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

/**
 * Validates untrusted input (client state or server action payload).
 * Returns the trimmed form when valid, `null` otherwise.
 */
export function parseContactForm(input: unknown): ContactForm | null {
  if (!isRecord(input)) return null;

  const form = { ...EMPTY_CONTACT_FORM };
  for (const field of CONTACT_FIELDS) {
    const value = input[field];
    if (typeof value !== "string") return null;

    const trimmed = value.trim();
    if (!trimmed || trimmed.length > CONTACT_MAX_LENGTH[field]) return null;
    form[field] = trimmed;
  }

  return EMAIL_PATTERN.test(form.email) ? form : null;
}
