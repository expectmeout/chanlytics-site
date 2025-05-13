import { MetadataRoute } from 'next'
import { blocks, categories } from '@/data/blocks'

import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tailark.com' 
  
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changefrequency: 'daily',
      priority: 1,
    },
  ]
  
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/${category}`,
    lastModified: new Date(),
    changefrequency: 'weekly',
    priority: 0.8,
  }))
  
  // Only include block routes where the file actually exists
  const blockRoutes = blocks
    .filter(block => {
      const filePath = path.join(process.cwd(), `app/preview/${block.category}/${block.title}/page.tsx`)
      return fs.existsSync(filePath)
    })
    .map((block) => ({
      url: `${baseUrl}/preview/${block.category}/${block.title}`,
      lastModified: new Date(),
      changefrequency: 'monthly',
      priority: 0.5,
    }))
  
  return [...routes, ...categoryRoutes, ...blockRoutes]
}