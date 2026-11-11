import { IconTile } from '@/components/ui/IconTile'
import { TextLink } from '@/components/ui/TextLink'
import { paths } from '@/lib/paths'
import type { Program } from '@/types'

interface ProgramCardProps {
  program: Program
  actionLabel: string
}

export function ProgramCard({ program, actionLabel }: ProgramCardProps) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-card border border-line bg-sand p-6">
      <IconTile icon={program.icon} tone={program.tone} />
      <h3 className="text-xl font-extrabold text-ink">{program.name}</h3>
      <p className="text-[15px] leading-relaxed text-ink-muted">{program.summary}</p>
      <TextLink to={paths.program(program.slug)} srContext={program.name} className="mt-auto self-start">
        {actionLabel}
      </TextLink>
    </article>
  )
}
