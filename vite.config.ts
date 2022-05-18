import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  plugins: [react()],
  build: {
    outDir: '../public',
  },
  server: {
    host: '0.0.0.0',
    port: 8888
  },
})
