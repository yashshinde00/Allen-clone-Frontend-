import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,  // Enables polling-based file watching
      interval: 1000,    // Polling interval (1 second)
    },
  },
})

