import { ButtonLink } from '@/components/ui/ButtonLink'
import { mainNavigation } from '@/data/navigation'
import { layoutText } from '@/data/ui-text'
import { NavigationItem } from './NavigationItem'

export const MOBILE_NAVIGATION_ID = 'menu-mobile'

interface MobileNavigationProps {
  isOpen: boolean
}

/** Full-height panel below the header, used under the lg breakpoint. */
export function MobileNavigation({ isOpen }: MobileNavigationProps) {
  const links = [mainNavigation.home, ...mainNavigation.sections]

  return (
    <nav
      id={MOBILE_NAVIGATION_ID}
      aria-label={layoutText.mainNavigationLabel}
      hidden={!isOpen}
      className="fixed inset-x-0 bottom-0 top-[var(--header-height)] overflow-y-auto bg-surface lg:hidden"
    >
      <div className="mx-auto flex max-w-content flex-col gap-6 px-4 py-4 sm:px-6">
        <ul>
          {links.map((link) => (
            <li key={link.path}>
              <NavigationItem link={link} layout="mobile" />
            </li>
          ))}
        </ul>
        <ButtonLink to={mainNavigation.callToAction.path} className="w-full">
          {mainNavigation.callToAction.label}
        </ButtonLink>
      </div>
    </nav>
  )
}
