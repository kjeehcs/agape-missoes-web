import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import type { HomeContent } from '@/types'

interface HeroSectionProps {
  content: HomeContent['hero']
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <Container as="section" className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2">
      <div className="flex flex-col items-start gap-6">
        <Badge tone="accent">{content.badge}</Badge>
        <h1 className="text-[40px] font-black leading-[1.05] sm:text-[56px]">
          {content.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="max-w-[520px] text-lg leading-relaxed text-ink-soft sm:text-[19px]">{content.description}</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink to={content.primaryAction.path}>{content.primaryAction.label}</ButtonLink>
          <ButtonLink to={content.secondaryAction.path} variant="outline">
            {content.secondaryAction.label}
          </ButtonLink>
        </div>
      </div>

      <div className="relative">
        <ResponsiveImage
          image={content.image}
          priority
          className="h-80 w-full rounded-hero bg-primary-soft sm:h-[440px]"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-5 left-5 inline-flex size-[72px] items-center justify-center rounded-card bg-accent text-ink"
        >
          <Icon name="heart" size={32} />
        </span>
      </div>
    </Container>
  )
}
