import type { NewsPost } from '@/types'
import { images } from './images'

/**
 * Posts migrated from the current "Notícias" page, newest first.
 * TODO: the old site has no dates for most posts — dates marked "aproximada" come from the photos.
 */
export const newsPosts: NewsPost[] = [
  {
    id: 'programa-raizes',
    slug: 'conheca-o-programa-raizes',
    title: 'Conheça o Programa Raízes',
    publishedAt: '2026-08-25', // aproximada
    excerpt:
      'O Programa Raízes atende crianças de 3 a 5 anos, na primeira infância, promovendo o desenvolvimento integral por meio de atividades lúdicas e educativas.',
    body: [
      'O Programa Raízes atende crianças de 3 a 5 anos, na primeira infância, promovendo o desenvolvimento integral por meio de atividades lúdicas e educativas.',
      'A proposta trabalha aspectos como emoções, autoestima, convivência, empatia, linguagem, criatividade, atenção, coordenação motora e habilidades cognitivas, utilizando recursos como contação de histórias, brincadeiras, arte e atividades psicomotoras.',
      'A implementação teve início em agosto, com planejamento da equipe, elaboração de materiais, orientação psicopedagógica, divulgação e inscrições.',
      'As famílias também participaram de um momento especial de acolhimento, com apresentação da equipe e da metodologia do projeto.',
      'O desenvolvimento de cada criança será acompanhado continuamente, valorizando suas particularidades e fortalecendo também os vínculos familiares.',
    ],
    coverImage: images.news.raizes,
    tags: ['Primeira infância'],
    relatedProgramIds: ['raizes'],
  },
  {
    id: 'copa-apajul-judo',
    slug: '1-copa-apajul-de-judo',
    title: '1ª Copa ApaJul de Judô',
    publishedAt: '2026-08-10', // aproximada
    excerpt: 'Nossos judocas participaram da 1ª Copa ApaJul de Judô, realizada na cidade de Limeira.',
    body: [
      'Nossos judocas participaram da 1ª Copa ApaJul de Judô, realizada na cidade de Limeira.',
      'Foi um momento especial de aprendizado, superação e convivência, no qual nossos alunos tiveram a oportunidade de vivenciar o ambiente de uma competição e colocar em prática tudo aquilo que vêm desenvolvendo durante as aulas.',
      'Também participamos da categoria Inclusão, levando dois judocas para representar nosso projeto. Essa participação reforça o nosso compromisso com uma prática esportiva que valoriza as potencialidades de cada criança e adolescente, promovendo inclusão, respeito, igualdade de oportunidades e pertencimento.',
      'Participar de campeonatos vai muito além de ganhar ou perder. Essas experiências ajudam nossos alunos a desenvolver disciplina, concentração, confiança, responsabilidade, perseverança e capacidade de lidar com desafios e frustrações. Também proporcionam a oportunidade de conhecer novos espaços, fazer amizades, respeitar adversários e aprender a valorizar o esforço próprio e o do outro.',
      'Cada campeonato se torna, assim, uma oportunidade de crescimento dentro e fora do tatame. Mais do que formar bons judocas, queremos contribuir para a formação de crianças e adolescentes mais confiantes, determinados, respeitosos e preparados para enfrentar os desafios da vida.',
    ],
    coverImage: images.news.copaJudo,
    tags: ['Esporte'],
    relatedProgramIds: ['scfv'],
  },
  {
    id: 'festival-ginastica-danca',
    slug: '1-festival-de-ginastica-e-danca',
    title: '1º Festival de Ginástica e Dança',
    publishedAt: '2026-08-02',
    excerpt:
      'No Teatro Municipal Prefeito Virgínio Ometto, o primeiro Festival de Ginástica e Dança da Ágape celebrou a arte, o esporte e a evolução de nossos alunos.',
    body: [
      'Aconteceu, no dia 2 de agosto, no Teatro Municipal Prefeito Virgínio Ometto, o primeiro Festival de Ginástica e Dança da Ágape, um momento especial de celebração da arte, do esporte, da dedicação e da evolução de nossos alunos.',
      'Inspirado no filme “O Rei do Show”, o evento teve como propósito não apenas apresentar o desenvolvimento dos alunos nas modalidades de Ginástica Artística, Ginástica Rítmica, Ballet e Jazz, mas também proporcionar uma reflexão sobre a mensagem do musical: reconhecer o valor e a singularidade de cada pessoa, superar desafios e descobrir o potencial que existe em cada um.',
      'O festival também contou com a participação especial de atletas profissionais, que trouxeram inspiração e referências para nossas crianças e adolescentes. Sob treinamento de Laís Nascimento, a atleta de Ginástica Rítmica Emanuelle Volpini, representando a Associação Limeirense de Ginástica, realizou uma apresentação, assim como Giovana da Silva Lima, atleta de Ginástica Artística, também representando a Associação Limeirense de Ginástica.',
      'Um dos momentos mais especiais da noite foi a apresentação conjunta das três educadoras da Ágape, que também se colocaram em cena para inspirar seus alunos: Damaris e Giovana, educadoras de Ginástica Rítmica e Artística, e Adriele, educadora de Jazz e Ballet.',
      'Foi uma noite que mostrou que a cultura, a arte e o esporte podem caminhar juntos na formação de crianças e adolescentes, oferecendo oportunidades de desenvolvimento, inspiração e expressão.',
      'Mais do que um espetáculo, o festival foi uma celebração de talentos, conquistas e possibilidades — e um passo importante no compromisso da Ágape de promover uma cultura de qualidade que gere impacto positivo em nossa cidade.',
    ],
    coverImage: images.news.festival,
    tags: ['Cultura', 'Esporte'],
    relatedProgramIds: ['construindo-futuro'],
  },
  {
    id: 'projeto-saber-mais',
    slug: 'conheca-o-projeto-saber-mais',
    title: 'Conheça o Projeto Saber +',
    publishedAt: '2026-07-20', // aproximada
    excerpt:
      'O Projeto Saber Mais atende crianças de 6 a 8 anos que apresentam dificuldades no processo de alfabetização e letramento.',
    body: [
      'O Projeto Saber Mais atende crianças de 6 a 8 anos que apresentam dificuldades no processo de alfabetização e letramento, oferecendo uma abordagem complementar e intencional às experiências vivenciadas no ambiente escolar.',
      'O projeto atua por meio de três oficinas integradas: Português, com abordagem fonética; Matemática, utilizando recursos lúdicos e concretos; e Sociopedagógica, que trabalha aspectos emocionais e relacionais que podem interferir no desenvolvimento cognitivo e no processo de aprendizagem.',
      'A primeira turma é composta por 10 crianças, acompanhadas de forma individualizada e coletiva de acordo com a demanda, com propostas planejadas para estimular habilidades essenciais e favorecer avanços no processo de alfabetização, especialmente entre aquelas que apresentam dificuldades ou defasagens em relação à etapa escolar que frequentam.',
      'Iniciado há alguns meses, o Projeto Saber Mais segue em pleno desenvolvimento, promovendo aprendizagem, fortalecimento de habilidades e novas possibilidades para que cada criança avance em seu processo de desenvolvimento.',
    ],
    coverImage: images.news.saberMais,
    tags: ['Educação'],
    relatedProgramIds: ['saber-mais'],
  },
  {
    id: '14-anos',
    slug: '14-anos-de-historia',
    title: '14 anos de história!',
    subtitle: 'Fortalecendo famílias e construindo um futuro melhor',
    publishedAt: '2026-07-18',
    excerpt:
      'Dia 18 de julho de 2026, a Ágape Missões Urbanas celebrou 14 anos de uma história construída com amor, serviço e compromisso com a transformação da nossa cidade.',
    body: [
      'Dia 18 de julho de 2026, a Ágape Missões Urbanas celebrou 14 anos de uma história construída com amor, serviço e compromisso com a transformação da nossa cidade.',
      'Essa trajetória nasceu do coração dos pastores Paulo e Patrícia Lima. Como líderes da Ágape Comunidade Cristã, compreenderam que a fé cristã também se expressa por meio da justiça social. Assim, a igreja passou a desenvolver esse trabalho por meio da Ágape Missões Urbanas, Organização da Sociedade Civil que se tornou seu braço de atuação social, levando cuidado, proteção e oportunidades para crianças, adolescentes e suas famílias.',
      'No início dessa caminhada, havia uma realidade que não podia ser ignorada. Muitas crianças permaneciam nas ruas durante o contraturno escolar, expostas a situações de vulnerabilidade e sem acesso a atividades que contribuíssem para seu desenvolvimento.',
      'Diante dessa necessidade, nasceu o propósito da Ágape: oferecer projetos gratuitos e de qualidade para toda a população, promovendo o desenvolvimento integral por meio da educação, do esporte, da cultura, das artes, da música, do artesanato, do ensino da língua inglesa e de outras ações que despertam potencialidades e transformam histórias.',
      'Ao longo desses 14 anos, a organização cresceu, ampliou sua estrutura e fortaleceu sua atuação. Hoje atende cerca de 300 crianças e adolescentes, de 3 a 18 anos, por meio de projetos sociais, desenvolvidos diariamente nas áreas de educação, esporte, cultura, saúde e meio ambiente.',
      'Além disso, atua em parceria com o poder público por meio do Serviço de Convivência e Fortalecimento de Vínculos (SCFV) e mantém uma rede de colaboração com escolas, unidades de saúde, assistência social, conselhos e diversos órgãos da cidade, que encaminham crianças e adolescentes para serem acompanhados pela instituição.',
      'A Ágape também desenvolve projetos pioneiros em Iracemápolis, como o Projeto Saber +, voltado ao fortalecimento da alfabetização, e o Projeto Raízes, dedicado ao desenvolvimento motor, cognitivo e socioemocional na primeira infância.',
      'Mais do que executar projetos, a organização busca influenciar positivamente a cidade, promovendo festivais de dança e ginástica, apresentações culturais no Teatro Municipal, fóruns sobre vulnerabilidade social e primeira infância, além de ações que fortalecem a ética, a cidadania e a participação comunitária.',
      'Guiada por valores como amor ao próximo, dignidade humana, excelência, transparência e compromisso com a cidade, a Ágape Missões Urbanas une profissionalismo, responsabilidade técnica e fé cristã para construir oportunidades e gerar esperança. Com governança sólida, certificações, parcerias públicas e privadas e articulação nacional e internacional, a organização segue crescendo sem perder sua essência: servir pessoas.',
      'Celebrar 14 anos é olhar para trás com gratidão por cada criança alcançada, cada família fortalecida, cada colaborador, voluntário, parceiro e mantenedor que acreditou nesse sonho. Mas é, acima de tudo, renovar o compromisso de continuar transformando vidas e contribuindo para que Iracemápolis seja uma cidade cada vez mais justa, acolhedora e cheia de esperança.',
      'Porque quando uma criança encontra oportunidades para crescer, toda a cidade cresce com ela.',
    ],
    coverImage: images.news.aniversario,
    tags: ['Institucional'],
    relatedProgramIds: [],
  },
  {
    id: 'agape-nas-escolas',
    slug: 'agape-nas-escolas',
    title: 'Ágape nas Escolas',
    publishedAt: '2025-09-15', // aproximada (setembro/2025)
    excerpt:
      'A convite da Coordenadoria de Educação Especial, estivemos nas creches e escolas municipais falando sobre inclusão.',
    body: [
      'Recebemos o convite da Coordenadoria de Educação Especial para estar nas creches e escolas municipais falando sobre INCLUSÃO.',
      'Tivemos um tempo bom com as crianças, em que pudemos conversar sobre inclusão, sua importância e o quanto faz parte de todos nós saber incluir e respeitar. Encerramos com música e interação.',
      'O objetivo da Ágape é realizar essas mobilizações levando nossos alunos para ter e viver essa inclusão com outras crianças.',
      'Fica aqui nosso agradecimento aos pais pela confiança e à coordenadora da Educação Especial do Município de Iracemápolis, Virgínia Frasson Sena.',
    ],
    coverImage: images.news.escolas,
    tags: ['Inclusão'],
    relatedProgramIds: [],
  },
  {
    id: 'forum-vulnerabilidade',
    slug: '1-forum-de-vulnerabilidade',
    title: '1º Fórum de Vulnerabilidade',
    subtitle: 'Marcando uma nova era na história da Ágape!',
    publishedAt: '2025-06-01', // aproximada (2025)
    excerpt:
      'Realizamos o primeiro Fórum Municipal sobre Vulnerabilidade de Crianças e Adolescentes, reunindo os poderes Executivo, Legislativo e Judiciário.',
    body: [
      'Realizamos nosso primeiro Fórum Municipal sobre Vulnerabilidade de Crianças e Adolescentes: “Público prioritário, crianças e adolescentes: quem são e como podemos ajudar?”. Reunimos pessoas dos poderes Executivo, Legislativo e Judiciário, Conselho Tutelar, além de organizações sociais e civis.',
      'Foi um sonho realizado ver a Ágape Missões Urbanas influenciando além de seus muros e ganhando dimensão municipal.',
      'O Fórum foi idealizado, pensado e executado por nossa Equipe Técnica, e não poderíamos estar mais realizados. Foi mais um passo dado para discutir e pensar juntos sobre as ações que podemos realizar daqui pra frente em nossa cidade, a fim de continuar a garantir um serviço de excelência às nossas crianças e adolescentes.',
    ],
    coverImage: images.news.forum,
    tags: ['Institucional'],
    relatedProgramIds: [],
  },
]
