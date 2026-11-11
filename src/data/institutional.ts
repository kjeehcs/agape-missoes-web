import type { ImpactStat, InstitutionalContent } from '@/types'

/** Texts migrated from agapemissoesurbanas.org (home and /sobre). */
export const institutional: InstitutionalContent = {
  mission: {
    title: 'Nossa missão',
    statement:
      'Promover o desenvolvimento integral de crianças e adolescentes por meio de ações socioeducativas, culturais, esportivas e de cuidado, fundamentadas no amor cristão, fortalecendo vínculos familiares e comunitários e contribuindo para a transformação da cidade.',
    details:
      'Nossa missão orienta cada projeto, atividade e relacionamento, buscando oferecer oportunidades que gerem crescimento, dignidade, pertencimento e esperança para crianças, adolescentes e suas famílias.',
  },
  vision: {
    title: 'Nossa visão',
    statement:
      'Queremos ser reconhecidos como uma organização de referência em impacto social urbano, destacando-nos pela excelência, transparência e compromisso cristão.',
    details:
      'Nossa visão é ampliar continuamente nossa capacidade de transformar vidas, fortalecendo comunidades, influenciando positivamente políticas públicas e construindo parcerias que promovam desenvolvimento social sustentável. Permanecemos comprometidos em integrar fé, responsabilidade social e gestão profissional para gerar impacto duradouro nas comunidades onde atuamos.',
  },
  // O site atual mostra só as descrições; os nomes vêm da notícia "14 anos de história". TODO: confirmar nomes.
  values: [
    {
      id: 'amor',
      name: 'Amor ao próximo',
      summary: 'Cada pessoa no centro do cuidado.',
      description:
        'Servimos com amor genuíno, responsável e comprometido, colocando cada pessoa no centro do cuidado e da nossa atuação.',
    },
    {
      id: 'dignidade',
      name: 'Dignidade humana',
      summary: 'O valor único de cada pessoa.',
      description:
        'Acreditamos que toda pessoa possui valor único e merece respeito, acolhimento e oportunidades para desenvolver plenamente seu potencial.',
    },
    {
      id: 'transparencia',
      name: 'Transparência',
      summary: 'Responsabilidade e prestação de contas.',
      description:
        'Atuamos com responsabilidade, legalidade e prestação de contas, construindo relações baseadas na confiança e na integridade.',
    },
    {
      id: 'excelencia',
      name: 'Excelência',
      summary: 'Qualidade e melhoria contínua.',
      description:
        'Buscamos qualidade, profissionalismo e melhoria contínua em todos os projetos, processos e serviços oferecidos.',
    },
    {
      id: 'compromisso-cidade',
      name: 'Compromisso com a cidade',
      summary: 'Junto à rede de proteção de Iracemápolis.',
      description:
        'Trabalhamos de forma colaborativa para contribuir com o desenvolvimento social de Iracemápolis, fortalecendo famílias, comunidades e redes de proteção.',
    },
    {
      id: 'fe',
      name: 'Fé cristã',
      summary: 'Fé expressa em serviço e justiça social.',
      description:
        'Expressamos nossa fé cristã por meio do serviço, da justiça social, do cuidado ao próximo e da transformação de realidades.',
    },
  ],
  history: {
    title: 'Somos Ágape!',
    paragraphs: [
      'A Ágape Missões Urbanas é uma Organização da Sociedade Civil sediada em Iracemápolis (SP), que há 14 anos promove o desenvolvimento integral de crianças e adolescentes.',
      'Nossa história começou a partir da percepção de uma necessidade concreta da cidade: a ausência de atividades estruturadas para crianças e adolescentes no contraturno escolar e a falta de um serviço organizado de convivência e fortalecimento de vínculos. Diante dessa realidade, assumimos o compromisso de oferecer um ambiente seguro, acolhedor e transformador, proporcionando oportunidades reais de desenvolvimento para aqueles que mais precisam.',
      'Desenvolvemos crianças, adolescentes, famílias e comunidades por meio de ações nas áreas da educação, convivência, cultura, esporte, fortalecimento de vínculos e desenvolvimento humano, unindo fé cristã, excelência técnica, ética e compromisso social.',
      'Nossa atuação é fundamentada na convicção de que o cuidado tem um efeito multiplicador: quando uma pessoa começa a servir, cuidar e transformar sua própria realidade, outras são inspiradas a fazer o mesmo. Assim, vidas transformadas fortalecem famílias, famílias fortalecem comunidades, comunidades fortalecem cidades e cidades mais fortes contribuem para políticas públicas mais humanas e eficazes.',
      'Trabalhamos em rede com famílias, voluntários, empresas, igrejas e poder público, construindo soluções sustentáveis para os desafios do território e promovendo oportunidades para que cada pessoa descubra seu potencial e se torne protagonista da mudança.',
    ],
    highlight: 'Mais do que executar projetos sociais, desenvolvemos pessoas para gerar movimentos de transformação social.',
    slogans: ['Se você começar, outros vão te acompanhar.', 'E juntos vamos mais longe.'],
  },
  team: {
    title: 'Time Ágape',
    paragraphs: [
      'A transformação que buscamos é resultado do trabalho conjunto de uma equipe comprometida com a excelência, o cuidado e o serviço ao próximo. Nossa equipe é formada por profissionais, educadores, técnicos, colaboradores, voluntários e lideranças que compartilham o propósito de promover o desenvolvimento integral de crianças e adolescentes. Cada integrante atua com responsabilidade, competência e sensibilidade, respeitando as políticas públicas de proteção social e os princípios cristãos que orientam nossa missão.',
      'Valorizamos a formação contínua, a atuação colaborativa e uma cultura organizacional baseada na ética, na transparência e no compromisso com as pessoas. Acreditamos que equipes preparadas e alinhadas aos nossos valores são essenciais para gerar impacto social duradouro e oferecer um atendimento cada vez mais qualificado às famílias e à comunidade.',
    ],
  },
}

/** Figures from the news post "14 anos de história" (18/07/2026). */
export const impactStats: ImpactStat[] = [
  { id: 'anos', value: '14', label: 'anos de história em Iracemápolis' },
  { id: 'atendidos', value: '≈300', label: 'crianças e adolescentes atendidos' },
  { id: 'idades', value: '3 a 18', label: 'anos de idade, da primeira infância à juventude' },
  { id: 'programas', value: '4', label: 'programas com parcerias públicas e privadas' },
]
