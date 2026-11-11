import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import type { ViteReactSSGOptions } from 'vite-react-ssg'

const ssgOptions: Partial<ViteReactSSGOptions> = {
  script: 'async',
  dirStyle: 'nested',
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Pre-bundle together with vite-react-ssg so both share one HelmetProvider context.
  optimizeDeps: {
    include: ['vite-react-ssg', 'react-helmet-async', 'react-router-dom'],
  },
  server: {
    port: Number(process.env.PORT) || 5173,
  },
  ssgOptions,
})
