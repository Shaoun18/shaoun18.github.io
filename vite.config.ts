import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps the build working on GitHub Pages (user site or project site).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { target: 'es2020', cssCodeSplit: true },
});
