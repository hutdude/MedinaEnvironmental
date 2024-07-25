import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    commonjs()
  ],
  
  optimizeDeps: {
    include: ['react-pdf']
  },
  build: {
    commonjsOptions: {
      include: [/react-pdf/, /pdfjs-dist/, /react-icons/]
    },
    rollupOptions: {
      input: 'index.html',
      output: {
        dir: 'dist',
        format: 'es'
      },
      plugins: [
        commonjs()
      ]
    }
  },
  base: '/',
  server: {
    proxy: {
      '/api': {
        target: "https://axv.0f8.myftpupload.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
