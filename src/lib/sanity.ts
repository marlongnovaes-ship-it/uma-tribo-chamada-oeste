import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '8bmpz2jt',
  dataset: 'production',
  useCdn: true, // usar CDN para performance
  apiVersion: '2024-01-01',
})

// Helper para gerar URLs de imagens
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Tipos
export interface SanityPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  image: any
  excerpt: string
  content: any[]
  publishedAt: string
}
