import { useLocation } from 'react-router-dom'
import { PageMeta } from '@/components/layout/PageMeta'
import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { mainNavigation } from '@/data/navigation'
import { organization } from '@/data/organization'
import { placeholderText } from '@/data/ui-text'

/** Temporary page for routes built in later parts. Its title comes from the navigation section the URL belongs to. */
export function Component() {
  const { pathname } = useLocation()
  const section = mainNavigation.sections.find((link) => pathname.startsWith(link.path))
  const title = section?.label ?? organization.shortName

  return (
    <>
      <PageMeta title={title} />
      <Container as="section" className="flex flex-col items-start gap-6 py-20 sm:py-28">
        <Badge tone="accent">{placeholderText.eyebrow}</Badge>
        <h1 className="text-4xl font-black leading-[1.05] sm:text-[56px]">{title}</h1>
        <p className="max-w-xl text-lg leading-relaxed text-ink-soft sm:text-[19px]">{placeholderText.description}</p>
        <ButtonLink to={mainNavigation.home.path} variant="outline">
          {placeholderText.backToHome}
        </ButtonLink>
      </Container>
    </>
  )
}
