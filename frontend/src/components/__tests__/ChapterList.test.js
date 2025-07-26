// ChapterList.test.js
// Jest tests for ChapterList.js (normal, edge, failure cases)
import ChapterList from '../ChapterList.jsx';

describe('ChapterList', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
  });

  it('renders chapters and allows reordering (normal case)', () => {
    const chapters = [
      { title: 'Intro' },
      { title: 'Middle' },
      { title: 'End' },
    ];
    let reordered = null;
    ChapterList(container, chapters, (newOrder) => { reordered = newOrder; });
    const items = container.querySelectorAll('li');
    expect(items.length).toBe(3);
    // Simulate drag-and-drop: move 1st to 2nd
    items[0].dispatchEvent(new DragEvent('dragstart', { bubbles: true }));
    items[1].dispatchEvent(new DragEvent('dragover', { bubbles: true }));
    items[1].dispatchEvent(new DragEvent('drop', { bubbles: true }));
    expect(reordered[0].title).toBe('Middle');
    expect(reordered[1].title).toBe('Intro');
  });

  it('handles empty chapter list (edge case)', () => {
    ChapterList(container, [], () => {});
    expect(container.querySelectorAll('li').length).toBe(0);
  });

  it('does not reorder if dropped on same index (failure case)', () => {
    const chapters = [{ title: 'A' }, { title: 'B' }];
    let reordered = null;
    ChapterList(container, chapters, (newOrder) => { reordered = newOrder; });
    const items = container.querySelectorAll('li');
    items[0].dispatchEvent(new DragEvent('dragstart', { bubbles: true }));
    items[0].dispatchEvent(new DragEvent('drop', { bubbles: true }));
    expect(reordered).toBe(null);
  });
});
