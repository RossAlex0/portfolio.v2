import type { Metadata, Viewport } from "next";
import { absoluteUrl, OWNER, ROUTES, SITE_URL } from "@/services/data/site";

const TITLE = `${OWNER.name} – ${OWNER.jobTitle}`;
const DESCRIPTION =
  "Développeur web et mobile situé à Toulouse, découvrez son portfolio, ses sites web et applications mobiles développés. Ainsi qu'une description de son profil.";
const OG_IMAGE = absoluteUrl("/meta/web.webp");
const FAVICONS = [
  { url: "/meta/logoOff.webp", type: "image/webp" },
  { url: "/meta/logoOff.png", type: "image/png" },
];

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0f0f",
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: `${TITLE} à ${OWNER.city}`,
    description: DESCRIPTION,
    locale: "fr_FR",
    type: "website",
    siteName: TITLE,
    url: SITE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 720,
        height: 345,
        alt: `Portfolio d'${OWNER.name} – ${OWNER.jobTitle}`,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: `Portfolio d'${OWNER.name}, découvrez ses créations et réalisations, ainsi qu'une description de son profil.`,
    images: [OG_IMAGE],
  },
  icons: { icon: FAVICONS, apple: FAVICONS, shortcut: FAVICONS },
  robots: { index: true, follow: true, nocache: false },
  authors: [{ name: OWNER.name, url: SITE_URL }],
  alternates: { canonical: SITE_URL, languages: { "fr-FR": SITE_URL } },
  keywords: [
    OWNER.name,
    "Site web",
    "Software engineer",
    "développement web",
    "app",
    "mobile",
    "javascript",
    "react",
    "toulouse",
    "react-native",
    "application",
    "portfolio",
    "typescript",
    "node",
    "site vitrine",
    "web app",
    "fullstack",
    "React Native Toulouse",
    "front end",
    "back end",
    "api",
  ],
  creator: OWNER.name,
  category: "software engineer",
  other: {
    legal: absoluteUrl(ROUTES.legal),
    privacyPolicy: absoluteUrl(ROUTES.privacy),
  },
};
