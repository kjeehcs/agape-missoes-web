import { Container } from '@/components/ui/Container'
import type { ImpactStat } from '@/types'

interface ImpactStatsProps {
  label: string
  stats: ImpactStat[]
}

export function ImpactStats({ label, stats }: ImpactStatsProps) {
  return (
    <Container as="section" aria-labelledby="impacto-titulo" className="pb-14 sm:pb-20">
      <h2 id="impacto-titulo" className="sr-only">
        {label}
      </h2>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col gap-1">
            <dt className="order-2 text-sm leading-snug text-ink-muted sm:text-[15px]">{stat.label}</dt>
            <dd className="order-1 font-display text-4xl font-black text-primary sm:text-5xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </Container>
  )
}
