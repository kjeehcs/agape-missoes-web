import type { Partner } from '@/types'

export const partners: Partner[] = [
  {
    id: 'prefeitura-iracemapolis',
    name: 'Prefeitura Municipal de Iracemápolis',
    category: 'public',
    description: 'Termo de Fomento nº 001/2026 — Subvenção Municipal + Emenda Impositiva (Termo Aditivo).',
    relatedProgramIds: ['scfv'],
  },
  {
    id: 'fmdca',
    name: 'Fundo Municipal dos Direitos da Criança e do Adolescente (FMDCA)',
    category: 'public',
    description: 'Termo de Fomento nº 014/2026 — Projeto Saber Mais.',
    relatedProgramIds: ['saber-mais'],
  },
  {
    id: 'deputado-miguel-lombardi',
    name: 'Deputado Federal Miguel Lombardi',
    category: 'public',
    description: 'Emenda Parlamentar — Programa Raízes, Desenvolvimento na Primeira Infância.',
    relatedProgramIds: ['raizes'],
  },
  {
    id: 'instituto-joao-belinha-ometto',
    name: 'Instituto João e Belinha Ometto',
    category: 'private',
    description: 'Termo de Compromisso — Projeto Construindo Futuro (SCFV).',
    relatedProgramIds: ['construindo-futuro'],
  },
  // TODO: exemplo — os fornecedores reais estão só em imagem no site atual.
  {
    id: 'fornecedor-exemplo',
    name: '[Nome do fornecedor]',
    category: 'supplier',
    description: '[Alimentação / materiais / gráfica]',
    relatedProgramIds: [],
  },
]
