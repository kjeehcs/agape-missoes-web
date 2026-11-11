import type { Program } from '@/types'
import { images } from './images'

export const programs: Program[] = [
  {
    id: 'scfv',
    slug: 'scfv',
    name: 'SCFV',
    summary:
      'Serviço de Convivência e Fortalecimento de Vínculos: práticas socioeducativas, arte, cultura, esporte e lazer no contraturno escolar.',
    description: [
      'Este projeto instigará a convivência social e comunitária de crianças e adolescentes, por meio de práticas socioeducativas, arte, cultura, esporte e lazer.',
      'Valoriza a pluralidade e a singularidade de cada pessoa, fortalece os vínculos familiares e comunitários, previne situações de risco pessoal e social e amplia o sentimento de pertencimento e identidade.',
    ],
    audience: 'Crianças e adolescentes',
    // TODO: confirmar faixa etária, vagas e horários.
    ageRange: { min: 6, max: 17 },
    schedule: 'Segunda a sexta, no contraturno escolar',
    funding: {
      instrument: 'Termo de Fomento nº 001/2026',
      source: 'Prefeitura de Iracemápolis — Subvenção Municipal + Emenda Impositiva (Termo Aditivo)',
      year: 2026,
      amount: 385755.64,
    },
    partnerIds: ['prefeitura-iracemapolis'],
    icon: 'users',
    tone: 'primary',
    image: images.programs.scfv,
  },
  {
    id: 'saber-mais',
    slug: 'saber-mais',
    name: 'Saber +',
    summary:
      'Apoio sociopedagógico em Português e Matemática para crianças de 6 a 8 anos com dificuldades na alfabetização.',
    description: [
      'O Projeto Saber Mais atende crianças de 6 a 8 anos que apresentam dificuldades no processo de alfabetização e letramento, oferecendo uma abordagem complementar e intencional às experiências vivenciadas no ambiente escolar.',
      'O projeto atua por meio de três oficinas integradas: Português, com abordagem fonética; Matemática, utilizando recursos lúdicos e concretos; e Sociopedagógica, que trabalha aspectos emocionais e relacionais que podem interferir no desenvolvimento cognitivo e no processo de aprendizagem.',
      'O atendimento é gratuito e destinado a crianças encaminhadas pela rede educacional parceira.',
    ],
    audience: 'Crianças com dificuldades de aprendizagem, encaminhadas pela rede escolar',
    ageRange: { min: 6, max: 8 },
    capacity: 'Primeira turma com 10 crianças',
    startDate: '2026-06-01',
    funding: {
      instrument: 'Termo de Fomento nº 014/2026',
      source: 'Fundo Municipal dos Direitos da Criança e do Adolescente (FMDCA)',
      year: 2026,
      amount: 120000,
    },
    partnerIds: ['fmdca'],
    icon: 'book',
    tone: 'primary',
    image: images.programs.saberMais,
  },
  {
    id: 'construindo-futuro',
    slug: 'construindo-futuro',
    name: 'Construindo Futuro',
    summary:
      'Amplia o SCFV e atende a demanda reprimida de Ginástica Artística e Ginástica Rítmica, com alimentação e materiais.',
    description: [
      'O plano de trabalho "Construindo Futuro: Serviço de Convivência e Fortalecimento de Vínculos" amplia o atendimento da Ágape, especialmente nas demandas reprimidas dos projetos de Ginástica Artística e Ginástica Rítmica.',
      'A parceria também custeia alimentação, materiais de consumo, materiais de limpeza e materiais esportivos.',
    ],
    audience: 'Crianças e adolescentes',
    funding: {
      instrument: 'Termo de Compromisso',
      source: 'Instituto João e Belinha Ometto',
      year: 2026,
    },
    partnerIds: ['instituto-joao-belinha-ometto'],
    icon: 'house',
    tone: 'accent',
    image: images.programs.construindoFuturo,
  },
  {
    id: 'raizes',
    slug: 'raizes',
    name: 'Programa Raízes',
    summary:
      'Desenvolvimento integral na primeira infância (3 a 5 anos) com brincadeiras, histórias, arte e psicomotricidade.',
    description: [
      'O Programa Raízes é voltado ao desenvolvimento integral de crianças de 3 a 5 anos, reconhecendo a primeira infância como uma fase decisiva.',
      'A proposta trabalha aspectos como emoções, autoestima, convivência, empatia, linguagem, criatividade, atenção, coordenação motora e habilidades cognitivas, utilizando recursos como contação de histórias, brincadeiras, arte e atividades psicomotoras.',
      'As famílias participam de encontros periódicos de orientação, e o desenvolvimento de cada criança é acompanhado continuamente.',
    ],
    audience: 'Crianças na primeira infância, com prioridade para as mais vulneráveis',
    ageRange: { min: 3, max: 5 },
    capacity: 'Projeto piloto com até 12 crianças',
    startDate: '2026-08-01',
    funding: {
      instrument: 'Emenda Parlamentar',
      source: 'Deputado Federal Miguel Lombardi',
      year: 2026,
      amount: 50000,
    },
    partnerIds: ['deputado-miguel-lombardi'],
    icon: 'sprout',
    tone: 'accent',
    image: images.programs.raizes,
  },
]
