import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Logo } from '@/components/ui/Logo'
import { layoutText } from '@/data/ui-text'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import { DesktopNavigation } from './DesktopNavigation'
import { MOBILE_NAVIGATION_ID, MobileNavigation } from './MobileNavigation'

export function Header() {
  const menu = useMobileMenu()

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-4">
        <Link to="/" aria-label={layoutText.homeLinkLabel} className="rounded-icon no-underline">
          <Logo />
        </Link>

        <DesktopNavigation />

        <button
          type="button"
          onClick={menu.toggle}
          aria-expanded={menu.isOpen}
          aria-controls={MOBILE_NAVIGATION_ID}
          aria-label={menu.isOpen ? layoutText.closeMenu : layoutText.openMenu}
          className="-mr-2 inline-flex size-12 items-center justify-center rounded-full text-primary-dark hover:bg-primary-soft lg:hidden"
        >
          <Icon name={menu.isOpen ? 'close' : 'menu'} size={26} />
        </button>
      </Container>

      <MobileNavigation isOpen={menu.isOpen} />
    </header>
  )
}
