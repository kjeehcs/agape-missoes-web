import type { HomeContent } from '@/types'
import { images } from './images'
import { institutional } from './institutional'

export const homeContent: HomeContent = {
  hero: {
    badge: 'Iracemápolis · SP',
    titleLines: ['Somos Ágape,', 'somos um.'],
    description: institutional.mission.statement,
    primaryAction: { label: 'Quero apoiar', path: '/contato' },
    secondaryAction: { label: 'Conheça nossa história', path: '/quem-somos' },
    image: images.home.hero,
  },
  impactLabel: 'Nosso impacto',
  programs: {
    eyebrow: 'O que fazemos',
    title: 'Nossos programas',
    viewAll: { label: 'Ver todos', path: '/programas' },
    cardActionLabel: 'Saiba mais',
  },
  about: {
    eyebrow: 'Quem somos',
    title: 'Fortalecendo vínculos familiares e comunitários',
    description: institutional.vision.statement,
    link: { label: 'Missão, visão e valores', path: '/quem-somos' },
    valuesLabel: 'Nossos valores',
  },
  transparency: {
    title: 'Transparência é compromisso',
    description: 'Prestação de contas de todos os programas e parcerias, organizada por ano.',
    primaryAction: { label: 'Transparência 2026', path: '/transparencia#ano-2026' },
    secondaryAction: { label: 'Anos anteriores', path: '/transparencia#anos-anteriores' },
  },
}
