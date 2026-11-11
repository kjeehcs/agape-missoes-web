import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Eyebrow } from './Eyebrow'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  /** Id for the heading, so the section can use aria-labelledby. */
  titleId: string
  action?: ReactNode
  className?: string
}

export function SectionHeader({ eyebrow, title, titleId, action, className }: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-wrap items-end justify-between gap-4', className)}>
      <div className="flex flex-col gap-2">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={titleId} className="text-3xl font-extrabold leading-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      {action}
    </div>
  )
}
