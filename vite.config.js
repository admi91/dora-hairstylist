import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Se usi dominio custom (dorahairstylist.com), usa base: '/'
  // Se usi GitHub Pages (admi91.github.io/dora-hairstylist), usa base: '/dora-hairstylist/'
  base: process.env.GITHUB_ACTIONS ? '/dora-hairstylist/' : '/',
})
