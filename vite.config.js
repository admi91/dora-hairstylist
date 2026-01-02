import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Con dominio custom (dorahairstylist.com), usa sempre base: '/'
  base: '/',
})
