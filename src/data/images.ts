import type { ImageAsset } from '@/types'

/**
 * Every image on the site is declared here.
 * Photos were migrated from agapemissoesurbanas.org, converted to WebP (max 1600px) with EXIF/GPS removed,
 * and live in /public/images. To swap a photo, replace the file and update its width/height.
 */
type Size = readonly [width: number, height: number]

const BASE = '/images'

function photo(path: string, [width, height]: Size, alt: string): ImageAsset {
  return { src: `${BASE}/${path}.webp`, alt, width, height }
}

/** Builds an album from galeria/<slug>/01.webp, 02.webp… */
function album(slug: string, sizes: readonly Size[], alt: string): ImageAsset[] {
  return sizes.map((size, index) =>
    photo(`galeria/${slug}/${String(index + 1).padStart(2, '0')}`, size, `${alt} — foto ${index + 1}`),
  )
}

const PORTRAIT: Size = [960, 1280]
const PORTRAIT_LARGE: Size = [1200, 1600]
const LANDSCAPE_OLD: Size = [960, 720]
const FESTIVAL: Size = [1086, 1448]

// TODO: descrever melhor cada foto (alt) quando a equipe revisar os álbuns.
const albums = {
  saberMais: album('saber-mais', [PORTRAIT, PORTRAIT, PORTRAIT, PORTRAIT], 'Projeto Saber +'),
  raizes: album(
    'raizes',
    [PORTRAIT_LARGE, PORTRAIT_LARGE, PORTRAIT, PORTRAIT_LARGE, PORTRAIT, PORTRAIT_LARGE, PORTRAIT_LARGE, PORTRAIT_LARGE],
    'Programa Raízes',
  ),
  copaJudo: album('copa-judo', [[1022, 1538], [912, 1600], [1204, 1600], [1204, 1600]], '1ª Copa ApaJul de Judô'),
  festival: album(
    'festival',
    [
      PORTRAIT, PORTRAIT, FESTIVAL, PORTRAIT, PORTRAIT, PORTRAIT, PORTRAIT, FESTIVAL, FESTIVAL,
      FESTIVAL, PORTRAIT, [1086, 1449], PORTRAIT, FESTIVAL, FESTIVAL, FESTIVAL, [1085, 1450],
    ],
    '1º Festival de Ginástica e Dança',
  ),
  primeirosAnos: album(
    'primeiros-anos',
    [LANDSCAPE_OLD, [720, 540], [800, 600], LANDSCAPE_OLD, LANDSCAPE_OLD, LANDSCAPE_OLD, LANDSCAPE_OLD, LANDSCAPE_OLD, LANDSCAPE_OLD],
    'Primeiros anos da Ágape (2012)',
  ),
  momentos: album(
    'momentos',
    [
      PORTRAIT, [720, 1280], PORTRAIT, PORTRAIT_LARGE, PORTRAIT_LARGE, [720, 1280], PORTRAIT, [780, 1040],
      PORTRAIT, PORTRAIT, [720, 1280], PORTRAIT, PORTRAIT, PORTRAIT, PORTRAIT, PORTRAIT, PORTRAIT, PORTRAIT,
      PORTRAIT, PORTRAIT, PORTRAIT, PORTRAIT, PORTRAIT, PORTRAIT, [1600, 1200], [1156, 867], [1280, 960],
      [1600, 1200], PORTRAIT, [780, 1040], PORTRAIT, PORTRAIT, PORTRAIT, PORTRAIT_LARGE, PORTRAIT_LARGE,
      PORTRAIT_LARGE, PORTRAIT_LARGE, PORTRAIT,
    ],
    'Atividades na Ágape',
  ),
}

export const images = {
  home: {
    hero: photo(
      'institucional/vem-ser-feliz',
      [1600, 1280],
      'Crianças, adolescentes e educadores da Ágape reunidos no palco após a apresentação "Vem ser Feliz"',
    ),
  },
  programs: {
    scfv: { ...albums.momentos[0], alt: 'Educador conduz aula de violão com crianças do SCFV' },
    saberMais: { ...albums.saberMais[2], alt: 'Educadora do Projeto Saber + explica atividade no quadro' },
    construindoFuturo: { ...albums.festival[4], alt: 'Alunos de Ginástica Artística se apresentando no palco' },
    raizes: { ...albums.raizes[0], alt: 'Famílias e crianças pequenas no acolhimento do Programa Raízes' },
  },
  news: {
    saberMais: { ...albums.saberMais[2], alt: 'Educadora do Projeto Saber + em sala de aula' },
    raizes: { ...albums.raizes[1], alt: 'Famílias reunidas no encontro de acolhimento do Programa Raízes' },
    copaJudo: { ...albums.copaJudo[0], alt: 'Dois judocas da Ágape em luta na 1ª Copa ApaJul de Judô' },
    festival: { ...albums.festival[0], alt: 'As três educadoras da Ágape dançando no 1º Festival de Ginástica e Dança' },
    aniversario: photo(
      'institucional/apresentacao-teatro',
      [1280, 960],
      'Crianças, adolescentes, famílias e equipe da Ágape reunidos no palco do teatro',
    ),
    forum: photo(
      'noticias/forum-vulnerabilidade',
      [1600, 1499],
      'Participantes do 1º Fórum de Vulnerabilidade na Câmara Municipal de Iracemápolis',
    ),
    escolas: photo('noticias/agape-nas-escolas', [1600, 1529], 'Equipe da Ágape conversando sobre inclusão com alunos de escolas municipais'),
  },
  about: {
    founders: photo('institucional/fundadores', [1280, 1600], 'Patrícia e Paulo Lima, fundadores da Ágape, com suas filhas'),
    presentation: photo(
      'institucional/vem-ser-feliz',
      [1600, 1280],
      'Apresentação "Vem ser Feliz com a Gente" com crianças e adolescentes atendidos',
    ),
    team: photo('institucional/time-agape', [1600, 1280], 'Educadores e equipe da Ágape Missões Urbanas'),
    partnersAndSuppliers: photo('institucional/parceiros-e-fornecedores', [1058, 592], 'Parceiros e fornecedores da Ágape'),
  },
  gallery: albums,
  social: {
    /** Default Open Graph image. TODO: gerar versão 1200×630. */
    openGraph: photo('institucional/vem-ser-feliz', [1600, 1280], 'Ágape Missões Urbanas'),
  },
}
