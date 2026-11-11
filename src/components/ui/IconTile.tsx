import { cn } from '@/lib/cn'
import type { ColorTone, IconName } from '@/types'
import { Icon } from './Icon'

interface IconTileProps {
  icon: IconName
  tone?: ColorTone
  className?: string
}

const toneClasses: Record<ColorTone, string> = {
  primary: 'bg-primary-soft text-primary',
  accent: 'bg-accent-soft text-accent-text',
}

/** 48px rounded square holding a decorative icon. */
export function IconTile({ icon, tone = 'primary', className }: IconTileProps) {
  return (
    <span className={cn('inline-flex size-12 items-center justify-center rounded-icon', toneClasses[tone], className)}>
      <Icon name={icon} />
    </span>
  )
}
