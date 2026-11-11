import type { RouteRecord } from 'vite-react-ssg'
import { RootLayout } from '@/components/layout/RootLayout'
import { mainNavigation } from '@/data/navigation'

/** Each page is its own chunk: lazy modules export `Component`. */
const placeholderPage = () => import('@/pages/PlaceholderPage')

const sectionRoutes: RouteRecord[] = mainNavigation.sections.map((link) => ({
  path: link.path.slice(1),
  lazy: placeholderPage,
}))

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    entry: 'src/components/layout/RootLayout.tsx',
    children: [
      { index: true, lazy: () => import('@/pages/HomePage') },
      ...sectionRoutes,
      // Program detail pages arrive in Part 3.
      { path: 'programas/:slug', lazy: placeholderPage },
      { path: '*', lazy: () => import('@/pages/NotFoundPage') },
    ],
  },
]
