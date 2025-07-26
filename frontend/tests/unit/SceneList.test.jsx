// SceneList.test.js
// Jest tests for SceneList.jsx using @testing-library/react
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SceneList from '../../src/components/SceneList.jsx';

describe('SceneList', () => {
  it('renders scenes and allows reordering (normal case)', () => {
    const scenes = [
      { title: 'Scene 1' },
      { title: 'Scene 2' },
      { title: 'Scene 3' },
    ];
    let reordered = null;
    const { getAllByRole } = render(
      <SceneList scenes={scenes} onReorder={(newOrder) => { reordered = newOrder; }} />
    );
    const items = getAllByRole('listitem');
    expect(items.length).toBe(3);
    // Simulate drag-and-drop: move 3rd to 1st
    fireEvent.dragStart(items[2], { dataTransfer: { effectAllowed: 'move', setData: jest.fn(), getData: jest.fn() } });
    fireEvent.dragOver(items[0], { dataTransfer: { effectAllowed: 'move', setData: jest.fn(), getData: jest.fn() } });
    fireEvent.drop(items[0], { dataTransfer: { effectAllowed: 'move', setData: jest.fn(), getData: jest.fn() } });
    expect(reordered[0].title).toBe('Scene 3');
    expect(reordered[1].title).toBe('Scene 1');
  });

  it('handles empty scene list (edge case)', () => {
    const { queryAllByRole } = render(
      <SceneList scenes={[]} onReorder={() => {}} />
    );
    expect(queryAllByRole('listitem').length).toBe(0);
  });

  it('does not reorder if dropped on same index (failure case)', () => {
    const scenes = [{ title: 'A' }, { title: 'B' }];
    let reordered = null;
    const { getAllByRole } = render(
      <SceneList scenes={scenes} onReorder={(newOrder) => { reordered = newOrder; }} />
    );
    const items = getAllByRole('listitem');
    fireEvent.dragStart(items[0], { dataTransfer: { effectAllowed: 'move', setData: jest.fn(), getData: jest.fn() } });
    fireEvent.dragOver(items[0], { dataTransfer: { effectAllowed: 'move', setData: jest.fn(), getData: jest.fn() } });
    fireEvent.drop(items[0], { dataTransfer: { effectAllowed: 'move', setData: jest.fn(), getData: jest.fn() } });
    expect(reordered).toBeNull();
  });
});
