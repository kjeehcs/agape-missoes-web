import type { DocumentLink } from './media'

export interface TransparencyDocumentGroup {
  title: string
  documents: DocumentLink[]
}

export interface TransparencyReport {
  programId: string
  /** Legal instrument, e.g. "Termo de Fomento nº 001/2026". */
  instrument: string
  amount?: number
  groups: TransparencyDocumentGroup[]
}

export interface TransparencyYear {
  year: number
  reports: TransparencyReport[]
}
