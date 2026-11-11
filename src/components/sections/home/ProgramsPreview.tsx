import { ProgramCard } from '@/components/sections/ProgramCard'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TextLink } from '@/components/ui/TextLink'
import type { HomeContent, Program } from '@/types'

interface ProgramsPreviewProps {
  content: HomeContent['programs']
  programs: Program[]
}

export function ProgramsPreview({ content, programs }: ProgramsPreviewProps) {
  return (
    <section aria-labelledby="programas-titulo" className="border-y border-line bg-surface">
      <Container className="flex flex-col gap-10 py-16 sm:py-20">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          titleId="programas-titulo"
          action={<TextLink to={content.viewAll.path}>{content.viewAll.label}</TextLink>}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <li key={program.id}>
              <ProgramCard program={program} actionLabel={content.cardActionLabel} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
