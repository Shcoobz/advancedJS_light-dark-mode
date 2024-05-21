import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/advancedJS_light-dark-mode/',
  build: {
    outDir: 'build',
  },
});
