import type { ImageAsset } from './media'

export interface GalleryAlbum {
  id: string
  slug: string
  title: string
  /** ISO date (YYYY-MM-DD). */
  date: string
  description: string
  cover: ImageAsset
  images: ImageAsset[]
}
