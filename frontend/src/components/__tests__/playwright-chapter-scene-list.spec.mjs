// playwright-chapter-scene-list.spec.mjs
// E2E test for ChapterList and SceneList drag-and-drop using Playwright (ESM)
// # Reason: Simulate real drag-and-drop, which is not supported in jsdom/Jest

import { test, expect } from '@playwright/test';

test.describe('ChapterList & SceneList Drag-and-Drop', () => {
  test('should reorder chapters via drag-and-drop', async ({ page }) => {
    await page.goto('http://localhost:5174/project'); // Adjust route as needed
    await page.waitForSelector('[data-draggable-list="chapter"] li');
    const items = await page.$$('[data-draggable-list="chapter"] li');
    const firstText = await items[0].textContent();
    const secondText = await items[1].textContent();
    await items[0].dragTo(items[1]);
    await page.waitForTimeout(300);
    const newItems = await page.$$('[data-draggable-list="chapter"] li');
    const newFirstText = await newItems[0].textContent();
    const newSecondText = await newItems[1].textContent();
    expect(newFirstText).toBe(secondText);
    expect(newSecondText).toBe(firstText);
  });

  test('should reorder scenes via drag-and-drop', async ({ page }) => {
    await page.goto('http://localhost:5174/project'); // Adjust route as needed
    await page.waitForSelector('[data-draggable-list="scene"] li');
    const items = await page.$$('[data-draggable-list="scene"] li');
    const firstText = await items[0].textContent();
    const lastText = await items[items.length - 1].textContent();
    await items[items.length - 1].dragTo(items[0]);
    await page.waitForTimeout(300);
    const newItems = await page.$$('[data-draggable-list="scene"] li');
    const newFirstText = await newItems[0].textContent();
    expect(newFirstText).toBe(lastText);
  });
});
