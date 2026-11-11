export interface Statement {
  title: string
  statement: string
  details: string
}

export interface OrganizationValue {
  id: string
  name: string
  /** One line, used on cards. */
  summary: string
  description: string
}

export interface InstitutionalContent {
  mission: Statement
  vision: Statement
  values: OrganizationValue[]
  history: {
    title: string
    paragraphs: string[]
    highlight: string
    slogans: string[]
  }
  team: {
    title: string
    paragraphs: string[]
  }
}

export interface ImpactStat {
  id: string
  value: string
  label: string
}
