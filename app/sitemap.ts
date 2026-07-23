import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://aurastore.ng";

  return [
    {
      url: baseUrl,
      priority: 1,
      changeFrequency: "weekly",
    },

    {
      url: `${baseUrl}/shop`,
      priority: 0.9,
      changeFrequency: "daily",
    },

    {
      url: `${baseUrl}/collections`,
      priority: 0.9,
      changeFrequency: "weekly",
    },

    {
      url: `${baseUrl}/faq`,
      priority: 0.7,
      changeFrequency: "monthly",
    },

    {
      url: `${baseUrl}/shipping`,
      priority: 0.7,
      changeFrequency: "monthly",
    },

    {
      url: `${baseUrl}/returns`,
      priority: 0.7,
      changeFrequency: "monthly",
    },

    {
      url: `${baseUrl}/privacy`,
      priority: 0.5,
      changeFrequency: "yearly",
    },

    {
      url: `${baseUrl}/terms`,
      priority: 0.5,
      changeFrequency: "yearly",
    },

    {
      url: `${baseUrl}/contact`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
  ];
}