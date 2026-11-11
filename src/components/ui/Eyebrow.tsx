import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface EyebrowProps {
  children: ReactNode
  className?: string
}

/** Small uppercase label above a section title. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={cn('text-[13px] font-semibold uppercase tracking-eyebrow text-accent-text', className)}>{children}</p>
  )
}
