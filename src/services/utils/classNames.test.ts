import { describe, expect, it } from "vitest";
import { classNames } from "./classNames";

describe("defaults", () => {
  it("returns an empty string without arguments", () => {
    expect(classNames()).toBe("");
  });
});

describe("usage", () => {
  it("joins the base class with an optional override", () => {
    expect(classNames("button_custom dark", "custom_modal_back_button")).toBe(
      "button_custom dark custom_modal_back_button"
    );
  });
});

describe("edge cases", () => {
  it("skips falsy values instead of printing 'undefined'", () => {
    expect(classNames("a", undefined, null, false, "", "b")).toBe("a b");
  });
});
