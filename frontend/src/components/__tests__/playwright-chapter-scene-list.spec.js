// playwright-chapter-scene-list.spec.js
// E2E test for ChapterList and SceneList drag-and-drop using Playwright
// # Reason: Simulate real drag-and-drop, which is not supported in jsdom/Jest


import { test, expect } from '@playwright/test';

test.describe('ChapterList & SceneList Drag-and-Drop', () => {
  test('should reorder chapters via drag-and-drop', async ({ page }) => {
    await page.goto('http://localhost:5173/mock-dnd-test'); // Use dedicated mock test page
    // Wait for ChapterList to render
    const chapterList = page.locator('[data-draggable-list="chapter"] li');
    await expect(chapterList).toHaveCount(3);
    const firstText = await chapterList.nth(0).textContent();
    const secondText = await chapterList.nth(1).textContent();
    // Drag first to second position
    await chapterList.nth(0).dragTo(chapterList.nth(1));
    // Wait for reorder effect
    await page.waitForTimeout(300);
    const newFirstText = await chapterList.nth(0).textContent();
    const newSecondText = await chapterList.nth(1).textContent();
    expect(newFirstText).toBe(secondText);
    expect(newSecondText).toBe(firstText);
  });

  test('should reorder scenes via drag-and-drop', async ({ page }) => {
    await page.goto('http://localhost:5173/mock-dnd-test'); // Use dedicated mock test page
    const sceneList = page.locator('[data-draggable-list="scene"] li');
    await expect(sceneList).toHaveCount(3);
    const firstText = await sceneList.nth(0).textContent();
    const lastText = await sceneList.nth(2).textContent();
    // Drag last to first position
    await sceneList.nth(2).dragTo(sceneList.nth(0));
    await page.waitForTimeout(300);
    const newFirstText = await sceneList.nth(0).textContent();
    expect(newFirstText).toBe(lastText);
  });
});
