import type { LayoutText, NotFoundText, PlaceholderText } from '@/types'

export const layoutText: LayoutText = {
  skipToContent: 'Pular para o conteúdo',
  homeLinkLabel: 'Ágape Missões Urbanas — início',
  mainNavigationLabel: 'Principal',
  openMenu: 'Abrir menu',
  closeMenu: 'Fechar menu',
  footerNavigationLabel: 'Rodapé',
  contactTitle: 'Contato',
  socialTitle: 'Redes',
  copyright: (year, organizationName) => `© ${year} ${organizationName}`,
  taxIdLabel: 'CNPJ',
}

export const placeholderText: PlaceholderText = {
  eyebrow: 'Em construção',
  description: 'Esta página faz parte do novo site e será publicada nas próximas etapas.',
  backToHome: 'Voltar ao início',
}

export const notFoundText: NotFoundText = {
  title: 'Página não encontrada',
  description: 'O endereço que você procurou não existe ou foi movido.',
  backToHome: 'Voltar ao início',
}
