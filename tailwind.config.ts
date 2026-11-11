import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

/** Reads an RGB-channel CSS variable so Tailwind opacity modifiers keep working (e.g. bg-primary/80). */
const token = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: token('primary'),
          dark: token('primary-dark'),
          soft: token('primary-soft'),
          line: token('primary-line'),
        },
        accent: {
          DEFAULT: token('accent'),
          text: token('accent-text'),
          soft: token('accent-soft'),
          strong: token('accent-strong'),
        },
        ink: {
          DEFAULT: token('ink'),
          soft: token('ink-soft'),
          muted: token('ink-muted'),
          inverse: token('ink-inverse'),
        },
        sand: token('sand'),
        surface: token('surface'),
        line: token('line'),
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        icon: 'var(--radius-icon)',
        card: 'var(--radius-card)',
        hero: 'var(--radius-hero)',
      },
      maxWidth: {
        content: 'var(--max-width-content)',
      },
      letterSpacing: {
        eyebrow: '0.12em',
        brand: '0.3em',
      },
    },
  },
  plugins: [],
} satisfies Config
