#!/usr/bin/env node
const { spawn } = require('child_process');

function run(cmd, args, label) {
  return new Promise((resolve, reject) => {
    console.log(`> Running ${label}...`);
    const proc = spawn(cmd, args, { stdio: 'inherit', shell: true });
    proc.on('close', (code) => {
      if (code === 0) {
        console.log(`✓ ${label} passed.`);
        resolve();
      } else {
        console.error(`✗ ${label} failed.`);
        reject(new Error(`${label} failed`));
      }
    });
  });
}

(async () => {
  try {
    await run('npx', ['jest', '--config', 'jest.config.js', 'frontend/tests/unit'], 'frontend unit tests (Jest)');
    await run('npx', ['playwright', 'test', 'frontend/tests/e2e'], 'frontend E2E tests (Playwright)');
    console.log('All tests passed! ✅');
    process.exit(0);
  } catch (e) {
    process.exit(1);
  }
})();
