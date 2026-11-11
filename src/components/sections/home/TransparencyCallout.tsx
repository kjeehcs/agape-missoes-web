import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import type { HomeContent } from '@/types'

interface TransparencyCalloutProps {
  content: HomeContent['transparency']
}

export function TransparencyCallout({ content }: TransparencyCalloutProps) {
  return (
    <Container as="section" aria-labelledby="transparencia-titulo" className="pb-16 sm:pb-20">
      <div className="flex flex-wrap items-center justify-between gap-6 rounded-hero bg-primary p-8 sm:p-12">
        <div className="flex max-w-[620px] flex-col gap-2.5">
          <h2 id="transparencia-titulo" className="text-[28px] font-extrabold leading-tight text-surface sm:text-[32px]">
            {content.title}
          </h2>
          <p className="text-[17px] leading-relaxed text-primary-soft">{content.description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink to={content.primaryAction.path} variant="accent">
            {content.primaryAction.label}
          </ButtonLink>
          <ButtonLink to={content.secondaryAction.path} variant="outline-inverse">
            {content.secondaryAction.label}
          </ButtonLink>
        </div>
      </div>
    </Container>
  )
}
