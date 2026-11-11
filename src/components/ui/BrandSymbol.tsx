import { cn } from '@/lib/cn'

type BrandSymbolTone = 'default' | 'inverse'

interface BrandSymbolProps {
  size?: number
  tone?: BrandSymbolTone
  className?: string
}

const toneColors: Record<BrandSymbolTone, { tile: string; roof: string }> = {
  default: { tile: 'rgb(var(--color-primary))', roof: 'rgb(var(--color-surface))' },
  inverse: { tile: 'rgb(var(--color-surface))', roof: 'rgb(var(--color-primary))' },
}

/** Roof (shelter, the city) over a heart (agape love). Decorative: pair it with visible text. */
export function BrandSymbol({ size = 44, tone = 'default', className }: BrandSymbolProps) {
  const colors = toneColors[tone]
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" className={cn('shrink-0', className)}>
      <rect width="64" height="64" rx="16" fill={colors.tile} />
      <path
        d="M14 30 L32 15 L50 30"
        fill="none"
        stroke={colors.roof}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 51 C 22 44, 18 39.5, 18 34.5 C 18 30.5, 21 28, 24.5 28 C 27.5 28, 30 29.8, 32 32.5 C 34 29.8, 36.5 28, 39.5 28 C 43 28, 46 30.5, 46 34.5 C 46 39.5, 42 44, 32 51 Z"
        fill="rgb(var(--color-accent))"
      />
    </svg>
  )
}
