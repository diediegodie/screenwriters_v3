
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChapterList from '../../src/components/ChapterList.jsx';
// ChapterList.test.js
// Jest tests for ChapterList.jsx using @testing-library/react

describe('ChapterList', () => {
  it('renders chapters and allows reordering (normal case)', () => {
    const chapters = [
      { title: 'Intro' },
      { title: 'Middle' },
      { title: 'End' },
    ];
    let reordered = null;
    const { getAllByRole } = render(
      <ChapterList chapters={chapters} onReorder={(newOrder) => { reordered = newOrder; }} />
    );
    const items = getAllByRole('listitem');
    expect(items.length).toBe(3);
    // Simulate drag-and-drop: move 1st to 2nd
    fireEvent.dragStart(items[0], { dataTransfer: { effectAllowed: 'move', setData: jest.fn(), getData: jest.fn() } });
    fireEvent.dragOver(items[1], { dataTransfer: { effectAllowed: 'move', setData: jest.fn(), getData: jest.fn() } });
    fireEvent.drop(items[1], { dataTransfer: { effectAllowed: 'move', setData: jest.fn(), getData: jest.fn() } });
    expect(reordered[0].title).toBe('Middle');
    expect(reordered[1].title).toBe('Intro');
  });

  it('handles empty chapter list (edge case)', () => {
    const { queryAllByRole } = render(
      <ChapterList chapters={[]} onReorder={() => {}} />
    );
    expect(queryAllByRole('listitem').length).toBe(0);
  });

  it('does not reorder if dropped on same index (failure case)', () => {
    const chapters = [{ title: 'A' }, { title: 'B' }];
    let reordered = null;
    const { getAllByRole } = render(
      <ChapterList chapters={chapters} onReorder={(newOrder) => { reordered = newOrder; }} />
    );
    const items = getAllByRole('listitem');
    fireEvent.dragStart(items[0], { dataTransfer: { effectAllowed: 'move', setData: jest.fn(), getData: jest.fn() } });
    fireEvent.dragOver(items[0], { dataTransfer: { effectAllowed: 'move', setData: jest.fn(), getData: jest.fn() } });
    fireEvent.drop(items[0], { dataTransfer: { effectAllowed: 'move', setData: jest.fn(), getData: jest.fn() } });
    expect(reordered).toBeNull();
  });
});
