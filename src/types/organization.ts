export interface PostalAddress {
  street: string
  district: string
  city: string
  state: string
  postalCode?: string
}

export interface PhoneContact {
  label: string
  /** Number as shown to visitors. */
  display: string
  /** E.164 format, used in tel: and WhatsApp links. */
  international: string
}

export type SocialNetwork = 'instagram' | 'facebook' | 'youtube' | 'whatsapp'

export interface SocialLink {
  network: SocialNetwork
  label: string
  url: string
}

export interface Organization {
  name: string
  shortName: string
  tagline: string
  description: string
  foundingYear?: number
  /** Registration number (CNPJ). Optional until confirmed. */
  taxId?: string
  address: PostalAddress
  email: string
  phones: PhoneContact[]
  socialLinks: SocialLink[]
}
