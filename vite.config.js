import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react': 'react',
    }
  },
  optimizeDeps: {
    include: ['react-pdf', 'react-icons']
  },
  build: {
    commonjsOptions: {
      include: [/react-pdf/, /pdfjs-dist/, /react-icons/, /node_modules/],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
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