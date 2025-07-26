// SceneList.test.js
// Jest tests for SceneList.js (normal, edge, failure cases)
import SceneList from '../SceneList.jsx';

describe('SceneList', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
  });

  it('renders scenes and allows reordering (normal case)', () => {
    const scenes = [
      { title: 'Scene 1' },
      { title: 'Scene 2' },
      { title: 'Scene 3' },
    ];
    let reordered = null;
    SceneList(container, scenes, (newOrder) => { reordered = newOrder; });
    const items = container.querySelectorAll('li');
    expect(items.length).toBe(3);
    // Simulate drag-and-drop: move 3rd to 1st
    items[2].dispatchEvent(new DragEvent('dragstart', { bubbles: true }));
    items[0].dispatchEvent(new DragEvent('dragover', { bubbles: true }));
    items[0].dispatchEvent(new DragEvent('drop', { bubbles: true }));
    expect(reordered[0].title).toBe('Scene 3');
    expect(reordered[1].title).toBe('Scene 1');
  });

  it('handles empty scene list (edge case)', () => {
    SceneList(container, [], () => {});
    expect(container.querySelectorAll('li').length).toBe(0);
  });

  it('does not reorder if dropped on same index (failure case)', () => {
    const scenes = [{ title: 'A' }, { title: 'B' }];
    let reordered = null;
    SceneList(container, scenes, (newOrder) => { reordered = newOrder; });
    const items = container.querySelectorAll('li');
    items[1].dispatchEvent(new DragEvent('dragstart', { bubbles: true }));
    items[1].dispatchEvent(new DragEvent('drop', { bubbles: true }));
    expect(reordered).toBe(null);
  });
});
