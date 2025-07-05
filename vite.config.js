import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 10000,
    strictPort: true,
    // Add this:
    allowedHosts: [
      'rachit-portfolio-rpy1.onrender.com'
    ]
  },
  preview: {
    port: 10000,
    strictPort: true,
    // Add this too for preview mode:
    allowedHosts: [
      'rachit-portfolio-rpy1.onrender.com',
    ]
  }
})