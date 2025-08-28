import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: ['5173-is8d6g5fe7rdpzv23kp7t-104b2fbc.manusvm.computer', '5175-is8d6g5fe7rdpzv23kp7t-104b2fbc.manusvm.computer'],
    proxy: {
      '/api': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: ['5173-is8d6g5fe7rdpzv23kp7t-104b2fbc.manusvm.computer', '5175-is8d6g5fe7rdpzv23kp7t-104b2fbc.manusvm.computer']
  }
})
