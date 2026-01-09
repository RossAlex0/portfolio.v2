import { MetadataRoute } from "next";
import { projects } from "@/services/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.alex-rossignol.fr";
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/project/${project.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${baseUrl}`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/policy`,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/confidentialite`,
      priority: 0.3,
    },
    ...projectUrls,
  ];
}
