import type { MetadataRoute } from "next";

const siteUrl = "https://ergoterapi.dk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/priser", "/about", "/contact", "/privatlivspolitik"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
