import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

/** Open/close state for the mobile menu: closes on navigation and Escape, and locks page scroll while open. */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((current) => !current), [])

  useEffect(close, [pathname, close])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, close])

  return { isOpen, close, toggle }
}
