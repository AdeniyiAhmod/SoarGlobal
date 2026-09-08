import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/services",
  "/industries",
  "/business-solutions",
  "/resources",
  "/contact",
  "/quote",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://soarglobals.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
