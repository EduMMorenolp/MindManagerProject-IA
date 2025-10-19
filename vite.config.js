import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/MindManagerProject-IA/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000, // Aumentar el límite a 1MB
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          
          // Librerías de gráficos pesadas (solo si existen)
          charts: ['mermaid'],
          
          // Utilerías que realmente tenemos
          utils: ['axios', 'marked'],
          pdf: ['jspdf', 'html2canvas'],
        },
      },
    },
  },
}))
