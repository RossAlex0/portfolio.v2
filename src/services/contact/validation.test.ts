import { describe, expect, it } from "vitest";
import {
  CONTACT_MAX_LENGTH,
  EMPTY_CONTACT_FORM,
  parseContactForm,
} from "./validation";

const validForm = {
  name: "Cercle des Vignerons",
  email: "contact@example.com",
  subject: "Création de site",
  message: "Bonjour, nous aimerions refaire notre site.",
};

describe("defaults", () => {
  it("rejects the empty initial form", () => {
    expect(parseContactForm(EMPTY_CONTACT_FORM)).toBeNull();
  });

  it("caps the subject at 80 characters", () => {
    expect(CONTACT_MAX_LENGTH.subject).toBe(80);
  });
});

describe("usage", () => {
  it("returns the form when every field is valid", () => {
    expect(parseContactForm(validForm)).toEqual(validForm);
  });

  it("trims surrounding whitespace", () => {
    const parsed = parseContactForm({ ...validForm, name: "  Alex  " });
    expect(parsed?.name).toBe("Alex");
  });
});

describe("edge cases", () => {
  it.each([null, undefined, "text", 42, []])(
    "rejects non-object %p",
    (input) => {
      expect(parseContactForm(input)).toBeNull();
    }
  );

  it("rejects a missing or non-string field", () => {
    const withoutMessage: Partial<typeof validForm> = { ...validForm };
    delete withoutMessage.message;
    expect(parseContactForm(withoutMessage)).toBeNull();
    expect(parseContactForm({ ...validForm, name: 123 })).toBeNull();
  });

  it("rejects whitespace-only values", () => {
    expect(parseContactForm({ ...validForm, message: "   " })).toBeNull();
  });

  it.each(["no-at.com", "a@b", "a @b.fr", "@example.com"])(
    "rejects invalid email %s",
    (email) => {
      expect(parseContactForm({ ...validForm, email })).toBeNull();
    }
  );

  it("accepts a value exactly at the max length and rejects one above", () => {
    const max = CONTACT_MAX_LENGTH.subject;
    expect(
      parseContactForm({ ...validForm, subject: "a".repeat(max) })
    ).not.toBeNull();
    expect(
      parseContactForm({ ...validForm, subject: "a".repeat(max + 1) })
    ).toBeNull();
  });

  it("drops unexpected extra keys", () => {
    const parsed = parseContactForm({ ...validForm, isAdmin: true });
    expect(parsed).toEqual(validForm);
  });
});
