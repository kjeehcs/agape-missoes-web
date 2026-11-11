import type { GalleryAlbum, ImageAsset } from '@/types'
import { images } from './images'

function toAlbum(album: Omit<GalleryAlbum, 'cover'>, cover: ImageAsset = album.images[0]): GalleryAlbum {
  return { ...album, cover }
}

/** Albums built from the photos on the current site, newest first. */
export const galleryAlbums: GalleryAlbum[] = [
  toAlbum({
    id: 'programa-raizes-2026',
    slug: 'programa-raizes-2026',
    title: 'Programa Raízes',
    date: '2026-08-25',
    description: 'Planejamento e acolhimento das famílias na implantação do programa.',
    images: images.gallery.raizes,
  }),
  toAlbum({
    id: 'copa-apajul-judo-2026',
    slug: 'copa-apajul-de-judo-2026',
    title: '1ª Copa ApaJul de Judô',
    date: '2026-08-10',
    description: 'Nossos judocas em competição em Limeira (SP).',
    images: images.gallery.copaJudo,
  }),
  toAlbum({
    id: 'festival-ginastica-danca-2026',
    slug: 'festival-ginastica-e-danca-2026',
    title: '1º Festival de Ginástica e Dança',
    date: '2026-08-02',
    description: 'Teatro Municipal Prefeito Virgínio Ometto.',
    images: images.gallery.festival,
  }),
  toAlbum({
    id: 'projeto-saber-mais-2026',
    slug: 'projeto-saber-mais-2026',
    title: 'Projeto Saber +',
    date: '2026-07-18',
    description: 'Oficinas de alfabetização da primeira turma.',
    images: images.gallery.saberMais,
  }),
  toAlbum({
    id: 'momentos',
    slug: 'momentos',
    title: 'Momentos na Ágape',
    // TODO: data aproximada — fotos sem data no site atual.
    date: '2025-12-07',
    description: 'Oficinas, aulas e apresentações do dia a dia.',
    images: images.gallery.momentos,
  }),
  toAlbum({
    id: 'primeiros-anos',
    slug: 'primeiros-anos',
    title: 'Primeiros anos',
    date: '2012-07-18',
    description: 'Registros do início da história da Ágape.',
    images: images.gallery.primeirosAnos,
  }),
]
