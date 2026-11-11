import { ButtonLink } from '@/components/ui/ButtonLink'
import { mainNavigation } from '@/data/navigation'
import { layoutText } from '@/data/ui-text'
import { NavigationItem } from './NavigationItem'

/** Horizontal menu shown from the lg breakpoint; the logo already links home. */
export function DesktopNavigation() {
  return (
    <nav aria-label={layoutText.mainNavigationLabel} className="hidden lg:block">
      <ul className="flex items-center gap-x-5 text-[15px] xl:gap-x-6">
        {mainNavigation.sections.map((link) => (
          <li key={link.path}>
            <NavigationItem link={link} layout="desktop" />
          </li>
        ))}
        <li>
          <ButtonLink to={mainNavigation.callToAction.path} size="sm">
            {mainNavigation.callToAction.label}
          </ButtonLink>
        </li>
      </ul>
    </nav>
  )
}
