import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Enable Jest-like global APIs
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/test/jest/**', // Exclude the test/jest directory
    ],
  },
});
