import { describe, expect, it } from "vitest";
import { getSocialLinkAnimation, IN_VIEW_AMOUNT } from "./animation";

describe("defaults", () => {
  it("animates when scrolled into view, once, at half visibility", () => {
    const animation = getSocialLinkAnimation({ delay: 0 });
    expect(animation.whileInView).toEqual({ opacity: 1, x: 0 });
    expect(animation.viewport).toEqual({ amount: IN_VIEW_AMOUNT, once: true });
    expect(animation.animate).toBeUndefined();
  });
});

describe("usage", () => {
  it("plays on page load for the hero (mount trigger)", () => {
    const animation = getSocialLinkAnimation({ delay: 1, trigger: "mount" });
    expect(animation.initial).toEqual({ opacity: 0, x: -50 });
    expect(animation.animate).toEqual({ opacity: 1, x: 0 });
    expect(animation.whileInView).toBeUndefined();
  });

  it("staggers offset and duration with the delay index", () => {
    const first = getSocialLinkAnimation({ delay: 0 });
    const third = getSocialLinkAnimation({ delay: 2 });
    expect(first.initial).toEqual({ opacity: 0, x: -25 });
    expect(third.initial).toEqual({ opacity: 0, x: -75 });
    expect(third.transition?.duration).toBeCloseTo(0.6);
  });
});

describe("edge cases", () => {
  it("stays visible when disabled, whatever the trigger", () => {
    for (const trigger of ["inView", "mount"] as const) {
      const animation = getSocialLinkAnimation({
        delay: 3,
        disabled: true,
        trigger,
      });
      expect(animation.initial).toBeUndefined();
      expect(animation.animate).toEqual({ opacity: 1, x: 0 });
      expect(animation.whileHover).toBeUndefined();
    }
  });

  it("never requires the icon to be fully visible (mobile toolbars)", () => {
    expect(IN_VIEW_AMOUNT).toBeLessThan(1);
  });
});
