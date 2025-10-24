import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración básica de Vite
export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  }
})
