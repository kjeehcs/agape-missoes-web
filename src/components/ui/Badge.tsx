import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import type { ColorTone } from '@/types'

interface BadgeProps {
  tone?: ColorTone
  className?: string
  children: ReactNode
}

const toneClasses: Record<ColorTone, string> = {
  primary: 'bg-primary-soft text-primary-dark',
  accent: 'bg-accent-soft text-accent-strong',
}

export function Badge({ tone = 'primary', className, children }: BadgeProps) {
  return (
    <span
      className={cn('inline-flex rounded-full px-3.5 py-1.5 text-[13px] font-semibold', toneClasses[tone], className)}
    >
      {children}
    </span>
  )
}
