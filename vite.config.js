import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5200,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});