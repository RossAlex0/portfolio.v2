import { EXTERNAL_LINKS, OWNER, SITE_URL } from "@/services/data/site";

const school = (name: string, description?: string) => ({
  "@type": "EducationalOrganization",
  name,
  ...(description && { description }),
});

export const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: OWNER.name,
      jobTitle: OWNER.jobTitle,
      email: `mailto:${OWNER.email}`,
      telephone: OWNER.phone,
      url: SITE_URL,
      sameAs: [
        EXTERNAL_LINKS.github,
        EXTERNAL_LINKS.linkedin,
        EXTERNAL_LINKS.gitlab,
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: OWNER.city,
        addressCountry: OWNER.country,
      },
      award: [
        "Développeur web et web mobile",
        "Vice champion de france handball -18ans",
      ],
      alumniOf: [
        school("OpenClassrooms", "Formation Développeur web"),
        school("OpenClassrooms", "Formation Développeur SwiftUI"),
        school("Wild Code School", "Formation Développeur web et web mobile"),
        school("O'Clock", "Formation Concepteur et développeur d'applications"),
        school("Lycée Max Linder"),
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
};
