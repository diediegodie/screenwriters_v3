// playwright.config.js
// Playwright config to auto-start Vite dev server for E2E tests

import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173/project',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
  testDir: './src/components/__tests__',
  use: {
    headless: true,
  },
});
