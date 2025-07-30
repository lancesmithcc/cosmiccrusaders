import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 888
  },
  build: {
    outDir: 'dist',
    target: 'es2015',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  publicDir: 'public',
  base: '/',
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
});