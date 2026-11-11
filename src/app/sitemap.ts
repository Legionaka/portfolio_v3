import type { MetadataRoute } from "next";

const siteUrl = "https://portfolio-v3-ochre-rho.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/projects", "/projects/medi-clinic", "/skills", "/contact", "/cv"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : path === "/projects/medi-clinic" ? 0.8 : 0.7,
    }),
  );
}
