export interface ImageAsset {
  src: string
  alt: string
  width: number
  height: number
}

export interface DocumentLink {
  title: string
  url: string
}

export type IconName =
  | 'menu'
  | 'close'
  | 'arrow-right'
  | 'heart'
  | 'users'
  | 'book'
  | 'house'
  | 'sprout'
  | 'whatsapp'
  | 'instagram'
  | 'facebook'
  | 'youtube'
  | 'mail'
  | 'phone'
  | 'map-pin'

/** Brand color family used for icon tiles and tags. */
export type ColorTone = 'primary' | 'accent'
