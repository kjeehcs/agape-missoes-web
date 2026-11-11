import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'
import type { NavigationLink } from '@/types'

interface NavigationItemProps {
  link: NavigationLink
  layout: 'desktop' | 'mobile'
}

const layoutClasses = {
  desktop:
    'relative py-3 after:absolute after:inset-x-0 after:bottom-1.5 after:h-0.5 after:rounded-full after:bg-accent after:opacity-0 aria-[current=page]:after:opacity-100',
  mobile: 'flex min-h-12 items-center border-b border-line py-3 text-lg',
}

/** Router link that marks the current page with aria-current. */
export function NavigationItem({ link, layout }: NavigationItemProps) {
  return (
    <NavLink
      to={link.path}
      end={link.path === '/'}
      className={cn(
        'font-medium text-ink no-underline transition-colors hover:text-primary aria-[current=page]:font-semibold aria-[current=page]:text-primary',
        layoutClasses[layout],
      )}
    >
      {link.label}
    </NavLink>
  )
}
