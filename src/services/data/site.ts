export const SITE_URL = "https://www.alex-rossignol.fr";

export const OWNER = {
  name: "Alex Rossignol",
  jobTitle: "Développeur Web & Mobile",
  email: "alexnw33910@gmail.com",
  phone: "+33666447169",
  phoneDisplay: "06 66 44 71 69",
  city: "Toulouse",
  country: "FR",
} as const;

export const EXTERNAL_LINKS = {
  github: "https://github.com/RossAlex0",
  gitlab: "https://gitlab.com/alex.rossignol",
  linkedin: "https://linkedin.com/in/rossignolalex",
  cv: "/meta/alex-rossignol-cv.pdf",
} as const;

export const ROUTES = {
  home: "/",
  contact: "/contact",
  privacy: "/confidentialite",
  legal: "/policy",
  project: (id: number | string) => `/project/${id}`,
} as const;

/** Builds an absolute URL from a site path. */
export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path === "/" ? "" : path}`;
