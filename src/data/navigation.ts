import type { MainNavigation, NavigationGroup } from '@/types'

export const mainNavigation: MainNavigation = {
  home: { label: 'Início', path: '/' },
  sections: [
    { label: 'Quem somos', path: '/quem-somos' },
    { label: 'Programas', path: '/programas' },
    { label: 'Notícias', path: '/noticias' },
    { label: 'Transparência', path: '/transparencia' },
    { label: 'Parceiros', path: '/parceiros' },
    { label: 'Galeria', path: '/galeria' },
    { label: 'Contato', path: '/contato' },
  ],
  callToAction: { label: 'Apoie', path: '/contato' },
}

export const footerNavigation: NavigationGroup[] = [
  {
    title: 'Institucional',
    links: [
      { label: 'Quem somos', path: '/quem-somos' },
      { label: 'Programas', path: '/programas' },
      { label: 'Parceiros', path: '/parceiros' },
      { label: 'Notícias', path: '/noticias' },
      { label: 'Galeria', path: '/galeria' },
    ],
  },
  {
    title: 'Transparência',
    links: [
      { label: '2026', path: '/transparencia#ano-2026' },
      { label: '2025', path: '/transparencia#ano-2025' },
      { label: 'Anos anteriores', path: '/transparencia#anos-anteriores' },
    ],
  },
]
