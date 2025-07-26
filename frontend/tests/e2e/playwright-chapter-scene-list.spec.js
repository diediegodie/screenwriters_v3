import { test, expect } from '@playwright/test';

// E2E tests for <ChapterList /> and <SceneList /> drag-and-drop functionality
// Covers: basic DnD, edge cases, state persistence, and invalid drops

test.describe('Chapter/Scene List DnD', () => {
  // Runs before each test to ensure isolation and a clean state
  test.beforeEach(async ({ page }) => {
    await page.goto('/mock-dnd-test'); // Assumes this route renders mock DnD lists
  });

  test('drag chapter into scene list', async ({ page }) => {
    // Purpose: Verify a chapter can be dragged into the scene list
    const chapter = page.getByTestId('chapter-1');
    const sceneList = page.getByTestId('scene-list');
    await chapter.dragTo(sceneList);
    await expect(sceneList).toContainText('Chapter 1');
    // Debug log for drop location
    console.log('Dropped at:', await sceneList.boundingBox());
  });

  test('drag scene into another chapter', async ({ page }) => {
    // Purpose: Verify a scene can be moved between chapters
    const scene = page.getByTestId('scene-1');
    const chapterTarget = page.getByTestId('chapter-2');
    await scene.dragTo(chapterTarget);
    await expect(chapterTarget).toContainText('Scene 1');
    console.log('Dropped at:', await chapterTarget.boundingBox());
  });

  test('reject drop on invalid target', async ({ page }) => {
    // Purpose: Ensure items cannot be dropped on non-dropzones
    const chapter = page.getByTestId('chapter-1');
    const invalidTarget = page.getByTestId('non-dropzone');
    await chapter.dragTo(invalidTarget);
    await expect(invalidTarget).not.toContainText('Chapter 1');
    console.log('Attempted drop at:', await invalidTarget.boundingBox());
  });

  test('drag from empty list does nothing', async ({ page }) => {
    // Purpose: Edge case - dragging from an empty list should not break UI
    const emptyList = page.getByTestId('empty-chapter-list');
    const sceneList = page.getByTestId('scene-list');
    // Try to drag a non-existent item
    const nonExistent = emptyList.getByTestId('chapter-ghost');
    // Should not throw, and sceneList should remain unchanged
    try {
      await nonExistent.dragTo(sceneList);
    } catch (e) {
      console.log('Expected error for non-existent drag:', e.message);
    }
    await expect(sceneList).not.toContainText('chapter-ghost');
  });

  test('state persists after drag-and-drop', async ({ page }) => {
    // Purpose: Ensure DnD changes persist after reload (if app supports persistence)
    const chapter = page.getByTestId('chapter-1');
    const sceneList = page.getByTestId('scene-list');
    await chapter.dragTo(sceneList);
    await page.reload();
    await expect(sceneList).toContainText('Chapter 1');
  });

  test('visual feedback on drag', async ({ page }) => {
    // Purpose: Check for visual feedback (e.g., highlight) during drag
    const chapter = page.getByTestId('chapter-1');
    const sceneList = page.getByTestId('scene-list');
    await chapter.hover();
    // Example: check for a highlight class or style
    const isHighlighted = await sceneList.evaluate(el => el.classList.contains('drop-highlight'));
    expect(isHighlighted).toBe(true);
  });
});
