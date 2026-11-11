import { ValueCard } from '@/components/sections/ValueCard'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { TextLink } from '@/components/ui/TextLink'
import type { HomeContent, OrganizationValue } from '@/types'

interface AboutPreviewProps {
  content: HomeContent['about']
  values: OrganizationValue[]
}

export function AboutPreview({ content, values }: AboutPreviewProps) {
  return (
    <Container as="section" aria-labelledby="sobre-titulo" className="grid gap-12 py-16 sm:py-20 lg:grid-cols-2">
      <div className="flex flex-col items-start gap-4">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <h2 id="sobre-titulo" className="text-3xl font-extrabold leading-tight sm:text-4xl">
          {content.title}
        </h2>
        <p className="text-[17px] leading-relaxed text-ink-soft">{content.description}</p>
        <TextLink to={content.link.path}>{content.link.label}</TextLink>
      </div>
      <ul aria-label={content.valuesLabel} className="grid gap-4 sm:grid-cols-2">
        {values.map((value) => (
          <li key={value.id}>
            <ValueCard value={value} />
          </li>
        ))}
      </ul>
    </Container>
  )
}
