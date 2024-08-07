import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from '@rollup/plugin-commonjs';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import vitePluginImp from 'vite-plugin-imp';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    commonjs(),
    vitePluginImp({
      libList: [
        {
          libName: 'react-icons/fa',
          libDirectory: 'fa',
          camel2DashComponentName: false,
          style: () => {
            return false
          },
        },
        // Add more icon sets here if needed, e.g.:
        // {
        //   libName: 'react-icons/md',
        //   libDirectory: 'md',
        //   camel2DashComponentName: false,
        //   style: () => {
        //     return false
        //   },
        // },
      ],
    }),
    ViteImageOptimizer({
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      },
      webp: {
        lossless: true,
      },
    }),
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
