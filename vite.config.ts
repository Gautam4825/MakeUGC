import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Make sure it's relative if needed
  build: {
    rollupOptions: {
      external: [],
    }
  },
});
