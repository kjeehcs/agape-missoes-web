import type { ImageAsset } from './media'

export type PartnerCategory = 'public' | 'private' | 'supplier'

export interface Partner {
  id: string
  name: string
  category: PartnerCategory
  description: string
  relatedProgramIds: string[]
  logo?: ImageAsset
  websiteUrl?: string
}
