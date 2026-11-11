import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { Icon } from './Icon'

interface TextLinkProps {
  to: string
  children: ReactNode
  /** Extra context for screen readers when the visible label repeats (e.g. "Saiba mais"). */
  srContext?: string
  className?: string
}

/** Inline link with a trailing arrow, sized as a 44px touch target. */
export function TextLink({ to, children, srContext, className }: TextLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        'group inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold text-primary underline-offset-4 hover:text-primary-dark hover:underline',
        className,
      )}
    >
      {children}
      {srContext && <span className="sr-only"> {srContext}</span>}
      <Icon name="arrow-right" size={18} className="transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}
