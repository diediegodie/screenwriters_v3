// SceneList.jsx
// React functional component for listing and reordering scenes with drag-and-drop
// # Reason: React compatibility, Playwright E2E, TailwindCSS

import React, { useRef } from 'react';

function SceneList({ scenes, onReorder }) {
  const dragSrcIdx = useRef(null);

  const handleDragStart = (idx) => (e) => {
    dragSrcIdx.current = idx;
    e.currentTarget.classList.add('opacity-50');
    e.dataTransfer.effectAllowed = 'move';
  };
  const handleDragEnd = (e) => {
    e.currentTarget.classList.remove('opacity-50');
  };
  const handleDragOver = (idx) => (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('bg-blue-50');
  };
  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('bg-blue-50');
  };
  const handleDrop = (idx) => (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-blue-50');
    if (dragSrcIdx.current !== null && dragSrcIdx.current !== idx) {
      const reordered = [...scenes];
      const [moved] = reordered.splice(dragSrcIdx.current, 1);
      reordered.splice(idx, 0, moved);
      if (typeof onReorder === 'function') onReorder(reordered);
    }
    dragSrcIdx.current = null;
  };

  return (
    <ul className="divide-y divide-gray-100 bg-gray-50 rounded shadow" data-draggable-list="scene">
      {scenes.map((scene, idx) => (
        <li
          key={idx}
          className="p-3 cursor-move hover:bg-gray-200 flex items-center"
          draggable
          onDragStart={handleDragStart(idx)}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver(idx)}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop(idx)}
          data-idx={idx}
        >
          {scene.title || `Scene ${idx + 1}`}
        </li>
      ))}
    </ul>
  );
}

export default SceneList;
