import type { Organization } from '@/types'

export const organization: Organization = {
  name: 'Associação Ágape Missões Urbanas',
  shortName: 'Ágape',
  tagline: 'Somos Ágape, somos um.',
  description:
    'Organização da Sociedade Civil sediada em Iracemápolis (SP) que promove o desenvolvimento integral de crianças e adolescentes.',
  foundingYear: 2012,
  taxId: '18.301.446/0001-11',
  address: {
    street: 'Rua Jerônimo Ometto, 901',
    district: 'Primeiro Distrito Industrial',
    city: 'Iracemápolis',
    state: 'SP',
  },
  // TODO: confirmar — no site atual aparece com acento ("iracemápolis").
  email: 'agapeiracemapolis@gmail.com',
  phones: [
    { label: 'Secretaria (fixo)', display: '(19) 3456-1881', international: '+551934561881' },
    { label: 'WhatsApp Secretaria', display: '(19) 98415-6396', international: '+5519984156396' },
  ],
  // TODO: adicionar Instagram/Facebook quando os perfis oficiais forem informados.
  socialLinks: [
    { network: 'whatsapp', label: 'WhatsApp', url: 'https://wa.me/5519984156396' },
  ],
}
