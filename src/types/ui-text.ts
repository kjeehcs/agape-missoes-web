/** Interface copy that is not page content (labels, aria texts, fallbacks). */
export interface LayoutText {
  skipToContent: string
  homeLinkLabel: string
  mainNavigationLabel: string
  openMenu: string
  closeMenu: string
  footerNavigationLabel: string
  contactTitle: string
  socialTitle: string
  copyright: (year: number, organizationName: string) => string
  taxIdLabel: string
}

export interface PlaceholderText {
  eyebrow: string
  description: string
  backToHome: string
}

export interface NotFoundText {
  title: string
  description: string
  backToHome: string
}
