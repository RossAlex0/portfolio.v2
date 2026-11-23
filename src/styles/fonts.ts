import localFont from "next/font/local";

const dmBold = localFont({
  src: "../../public/fonts/DMSans-Bold.ttf",
  variable: "--font-title-bold",
  display: "swap",
});
const rubikRegular = localFont({
  src: "../../public/fonts/Rubik-Regular.ttf",
  variable: "--font-text-regular",
  display: "swap",
});
const rubikMedium = localFont({
  src: "../../public/fonts/Rubik-Medium.ttf",
  variable: "--font-text-medium",
  display: "swap",
});
const rubikBold = localFont({
  src: "../../public/fonts/Rubik-Bold.ttf",
  variable: "--font-text-bold",
  display: "swap",
});
const rubikLight = localFont({
  src: "../../public/fonts/Rubik-Light.ttf",
  variable: "--font-text-light",
  display: "swap",
});

/** CSS variable classes for every local font, to apply on <html>. */
export const fontVariables = [
  rubikRegular,
  rubikMedium,
  rubikBold,
  rubikLight,
  dmBold,
]
  .map((font) => font.variable)
  .join(" ");
