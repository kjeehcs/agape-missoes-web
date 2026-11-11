import type { ImageAsset } from './media'

export interface NewsPost {
  id: string
  slug: string
  title: string
  subtitle?: string
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string
  excerpt: string
  body: string[]
  coverImage: ImageAsset
  tags: string[]
  relatedProgramIds: string[]
}
