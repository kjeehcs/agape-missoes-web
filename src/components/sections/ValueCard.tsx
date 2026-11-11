import type { OrganizationValue } from '@/types'

interface ValueCardProps {
  value: OrganizationValue
}

export function ValueCard({ value }: ValueCardProps) {
  return (
    <div className="flex h-full flex-col gap-1.5 rounded-card border border-line bg-surface p-5">
      <h3 className="text-lg font-extrabold text-primary">{value.name}</h3>
      <p className="text-sm leading-normal text-ink-muted">{value.summary}</p>
    </div>
  )
}
