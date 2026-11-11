import { Helmet } from 'react-helmet-async'
import { organization } from '@/data/organization'

interface PageMetaProps {
  title: string
  description?: string
}

/** Per-page <title> and description. Open Graph and structured data arrive in Part 5. */
export function PageMeta({ title, description = organization.description }: PageMetaProps) {
  const fullTitle = `${title} | ${organization.name}`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
