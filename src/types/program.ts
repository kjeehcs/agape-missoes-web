import type { ColorTone, IconName, ImageAsset } from './media'

export interface ProgramFunding {
  /** Legal instrument, e.g. "Termo de Fomento nº 001/2026". */
  instrument: string
  source: string
  year: number
  /** Amount in BRL for the year, when public. */
  amount?: number
}

export interface Program {
  id: string
  slug: string
  name: string
  summary: string
  description: string[]
  audience: string
  ageRange?: { min: number; max: number }
  capacity?: string
  schedule?: string
  /** ISO date (YYYY-MM-DD). */
  startDate?: string
  funding: ProgramFunding
  partnerIds: string[]
  icon: IconName
  tone: ColorTone
  image: ImageAsset
}
