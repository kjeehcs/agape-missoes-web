import type { TeamMember } from '@/types'
import { images } from './images'

/** Only founders and educators are named on the current site. TODO: complete diretoria and equipe técnica. */
export const teamMembers: TeamMember[] = [
  {
    id: 'patricia-lima',
    name: 'Patrícia Lima',
    role: 'Fundadora',
    group: 'founders',
    photo: images.about.founders,
  },
  {
    id: 'paulo-lima',
    name: 'Paulo Lima',
    role: 'Fundador',
    group: 'founders',
    photo: images.about.founders,
  },
  {
    id: 'diretoria-exemplo',
    name: '[Nome]',
    role: '[Presidente]',
    group: 'board',
  },
  {
    id: 'tecnico-exemplo',
    name: '[Nome]',
    role: '[Coordenação técnica]',
    group: 'technical',
  },
  {
    id: 'damaris',
    name: 'Damaris',
    role: 'Educadora de Ginástica Rítmica e Artística',
    group: 'educators',
  },
  {
    id: 'giovana',
    name: 'Giovana',
    role: 'Educadora de Ginástica Rítmica e Artística',
    group: 'educators',
  },
  {
    id: 'adriele',
    name: 'Adriele',
    role: 'Educadora de Jazz e Ballet',
    group: 'educators',
  },
]
