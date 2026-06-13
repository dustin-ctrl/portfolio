import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://k-takahashi.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://k-takahashi.vercel.app/clipgym/privacy',
      lastModified: new Date(),
    },
    {
      url: 'https://k-takahashi.vercel.app/clipgym/terms',
      lastModified: new Date(),
    },
  ]
}