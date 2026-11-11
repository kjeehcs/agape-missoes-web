/** Builders for dynamic routes, so URL shapes live in one place. */
export const paths = {
  program: (slug: string) => `/programas/${slug}`,
  newsPost: (slug: string) => `/noticias/${slug}`,
}
