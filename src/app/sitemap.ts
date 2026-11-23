import { MetadataRoute } from "next";
import { projects } from "@/services/data";
import { absoluteUrl, ROUTES } from "@/services/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((project) => ({
    url: absoluteUrl(ROUTES.project(project.id)),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: absoluteUrl(ROUTES.home), changeFrequency: "monthly", priority: 1 },
    {
      url: absoluteUrl(ROUTES.contact),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: absoluteUrl(ROUTES.legal), priority: 0.3 },
    { url: absoluteUrl(ROUTES.privacy), priority: 0.3 },
    ...projectUrls,
  ];
}
