import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nahuelcontent.store";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/alpha-studio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/visual`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
