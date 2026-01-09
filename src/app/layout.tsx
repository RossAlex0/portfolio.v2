import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";

import "@/styles/globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0f0f",
};
export const metadata: Metadata = {
  title: "Alex Rossignol – Développeur Web & Mobile",
  description:
    "Développeur web et mobile situé à Toulouse, découvrez son portfolio, ses sites web et applications mobiles développés. Ainsi qu'une description de son profil.",
  openGraph: {
    title: "Alex Rossignol – Développeur Web & Mobile à Toulouse",
    description:
      "Développeur web et mobile situé à Toulouse, découvrez son portfolio, ses sites web et applications mobiles développés. Ainsi qu'une description de son profil.",
    locale: "fr_FR",
    type: "website",
    siteName: "Alex Rossignol – Développeur Web & Mobile",
    url: "https://www.alex-rossignol.fr",
    images: [
      {
        url: "https://www.alex-rossignol.fr/meta/web.webp",
        width: 720,
        height: 345,
        alt: "Portfolio d'Alex Rossignol – Développeur Web & Mobile",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Rossignol – Développeur Web & Mobile",
    description:
      "Portfolio d'Alex Rossignol, découvrez ses créations et réalisations, ainsi qu'une description de son profil.",
    images: ["https://www.alex-rossignol.fr/meta/web.webp"],
  },
  icons: {
    icon: [
      { url: "/meta/logoOff.webp", type: "image/webp" },
      { url: "/meta/logoOff.png", type: "image/png" },
    ],
    apple: [
      { url: "/meta/logoOff.webp", type: "image/webp" },
      { url: "/meta/logoOff.png", type: "image/png" },
    ],
    shortcut: [
      { url: "/meta/logoOff.webp", type: "image/webp" },
      { url: "/meta/logoOff.png", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  authors: [{ name: "Alex Rossignol", url: "https://www.alex-rossignol.fr" }],
  alternates: {
    canonical: "https://www.alex-rossignol.fr",
    languages: {
      "fr-FR": "https://www.alex-rossignol.fr",
    },
  },
  keywords: [
    "Alex Rossignol",
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
  creator: "Rossignol Alex",
  category: "software engineer",
  other: {
    legal: "https://www.alex-rossignol.fr/confidentialite",
    privacyPolicy: "https://www.alex-rossignol.fr/policy",
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          name: "Alex Rossignol",
          jobTitle: "Développeur Web & Mobile",
          email: "mailto:alexnw33910@gmail.com",
          telephone: "+33666447169",
          sameAs: [
            "https://github.com/RossAlex0",
            "https://linkedin.com/in/rossignolalex",
            "https://gitlab.com/alex.rossignol",
            "https://www.alex-rossignol.fr",
            "https://alex-rossignol.fr",
          ],
          jobLocation: "Toulouse, France",
          award: [
            "Développeur web et web mobile",
            "Vice champion de france handball -18ans",
          ],
          alumniOf: [
            {
              "@type": "EducationalOrganization",
              name: "OpenClassrooms",
              description: "Formation Développeur web",
            },
            {
              "@type": "EducationalOrganization",
              name: "OpenClassrooms",
              description: "Formation Développeur SwiftUI",
            },
            {
              "@type": "EducationalOrganization",
              name: "Wild Code School",
              description: "Formation Développeur web et web mobile",
            },
            {
              "@type": "EducationalOrganization",
              name: "O'Clock",
              description: "Formation Concepteur et développeur d'applications",
            },
            {
              "@type": "EducationalOrganization",
              name: "Lycée Max Linder",
            },
          ],
          knowsAbout: [
            "react",
            "react-native",
            "html",
            "css",
            "javascript",
            "typescript",
            "swiftui",
            "docker",
            "express.js",
            "node.js",
            "mongodb",
            "mysql",
            "prisma",
            "sequelize",
            "postgresql",
            "directus",
            "next.js",
            "vite.js",
            "vercel",
            "aws",
            "SEO",
            "vue.js",
            "graphql",
            "API rest",
            "UI/UX",
            "MVC",
            "JSON",
            "YAML",
          ],
        },
      ],
    }),
  },
};

export const dmBold = localFont({
  src: "../../public/fonts/DMSans-Bold.ttf",
  variable: "--font-title-bold",
  display: "swap",
});
export const rubikRegular = localFont({
  src: "../../public/fonts/Rubik-Regular.ttf",
  variable: "--font-text-regular",
  display: "swap",
});
export const rubikMedium = localFont({
  src: "../../public/fonts/Rubik-Medium.ttf",
  variable: "--font-text-medium",
  display: "swap",
});
export const rubikBold = localFont({
  src: "../../public/fonts/Rubik-Bold.ttf",
  variable: "--font-text-bold",
  display: "swap",
});
export const rubikLight = localFont({
  src: "../../public/fonts/Rubik-Light.ttf",
  variable: "--font-text-light",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`
    ${rubikRegular.variable} 
    ${rubikMedium.variable}  
    ${rubikBold.variable} 
    ${rubikLight.variable} 
    ${dmBold.variable} 
  `}
    >
      <body>{children}</body>
      <Analytics mode="production" />
    </html>
  );
}
