import { brand } from '@/data/brand'
import { cn } from '@/lib/cn'
import { BrandSymbol } from './BrandSymbol'

interface LogoProps {
  tone?: 'default' | 'inverse'
  showDescriptor?: boolean
  className?: string
}

export function Logo({ tone = 'default', showDescriptor = true, className }: LogoProps) {
  const isInverse = tone === 'inverse'
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <BrandSymbol size={44} tone={tone} />
      <span className="flex flex-col gap-px">
        <span
          className={cn(
            'font-display text-[26px] font-black leading-none',
            isInverse ? 'text-surface' : 'text-primary',
          )}
        >
          {brand.wordmark}
        </span>
        {showDescriptor && (
          <span
            className={cn(
              'text-[9px] font-semibold uppercase tracking-brand',
              isInverse ? 'text-primary-soft' : 'text-ink',
            )}
          >
            {brand.descriptor}
          </span>
        )}
      </span>
    </span>
  )
}
