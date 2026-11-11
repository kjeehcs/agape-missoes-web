import { layoutText } from '@/data/ui-text'

export const MAIN_CONTENT_ID = 'conteudo'

export function SkipLink() {
  return (
    <a
      href={`#${MAIN_CONTENT_ID}`}
      className="sr-only rounded-full bg-primary px-5 py-3 font-semibold text-surface focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
    >
      {layoutText.skipToContent}
    </a>
  )
}
