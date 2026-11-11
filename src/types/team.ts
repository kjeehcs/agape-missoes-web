import type { ImageAsset } from './media'

export type TeamGroup = 'founders' | 'board' | 'technical' | 'educators'

export interface TeamMember {
  id: string
  name: string
  role: string
  group: TeamGroup
  photo?: ImageAsset
}
