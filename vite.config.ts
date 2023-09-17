// import { defineConfig } from 'vite/';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts', 'vitest-localstorage-mock'],
    mockReset: false,
  },
});
