import { MetadataRoute } from "next";
import { projects } from "@/services/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.alex-rossignol.fr";

  const staticPages = [
    { url: "/", changefreq: "weekly", priority: 1.0 },
    { url: "/contact", changefreq: "monthly", priority: 0.8 },
    { url: "/confidentialite", changefreq: "yearly", priority: 0.5 },
    { url: "/policy", changefreq: "yearly", priority: 0.5 },
  ];

  const projectPages = projects.map((p) => ({
    url: `/project/${p.id}`,
    changefreq: "monthly",
    priority: 0.9,
  }));

  return [...staticPages, ...projectPages].map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date().toISOString(),
    changefreq: page.changefreq,
    priority: page.priority,
  }));
}
