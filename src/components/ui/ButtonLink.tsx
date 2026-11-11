import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'accent' | 'outline' | 'outline-inverse'
type ButtonSize = 'md' | 'sm'

interface ButtonLinkProps {
  to: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-surface hover:bg-primary-dark',
  accent: 'bg-accent text-ink hover:bg-accent/90',
  outline: 'border-2 border-primary text-primary hover:bg-primary-soft',
  'outline-inverse': 'border-2 border-surface text-surface hover:bg-surface/10',
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'min-h-12 px-7 text-base',
  sm: 'min-h-11 px-[22px] text-[15px]',
}

/** Pill-shaped call to action rendered as a router link. */
export function ButtonLink({ to, variant = 'primary', size = 'md', className, children }: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-semibold no-underline transition-colors',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Link>
  )
}
