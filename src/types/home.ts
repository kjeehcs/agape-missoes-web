import type { ImageAsset } from './media'
import type { NavigationLink } from './navigation'

export interface SectionIntro {
  eyebrow: string
  title: string
}

export interface HomeContent {
  hero: {
    badge: string
    titleLines: string[]
    description: string
    primaryAction: NavigationLink
    secondaryAction: NavigationLink
    image: ImageAsset
  }
  impactLabel: string
  programs: SectionIntro & {
    viewAll: NavigationLink
    cardActionLabel: string
  }
  about: SectionIntro & {
    description: string
    link: NavigationLink
    valuesLabel: string
  }
  transparency: {
    title: string
    description: string
    primaryAction: NavigationLink
    secondaryAction: NavigationLink
  }
}
