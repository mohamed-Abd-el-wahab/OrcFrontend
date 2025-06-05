import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    hmr: {
      overlay: false
    },
    watch: {
      usePolling: false,
      interval: 100
    }
  },
  build: {
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000
  }
});