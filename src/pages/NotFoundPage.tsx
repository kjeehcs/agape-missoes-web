import { PageMeta } from '@/components/layout/PageMeta'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { mainNavigation } from '@/data/navigation'
import { notFoundText } from '@/data/ui-text'

export function Component() {
  return (
    <>
      <PageMeta title={notFoundText.title} />
      <Container as="section" className="flex flex-col items-start gap-6 py-20 sm:py-28">
        <h1 className="text-4xl font-black sm:text-5xl">{notFoundText.title}</h1>
        <p className="max-w-xl text-lg leading-relaxed text-ink-soft">{notFoundText.description}</p>
        <ButtonLink to={mainNavigation.home.path}>{notFoundText.backToHome}</ButtonLink>
      </Container>
    </>
  )
}
