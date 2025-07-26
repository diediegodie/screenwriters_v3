// ChapterList.jsx
// React functional component for listing and reordering chapters with drag-and-drop
// # Reason: React compatibility, Playwright E2E, TailwindCSS

import React, { useRef } from 'react';

function ChapterList({ chapters, onReorder }) {
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
    e.currentTarget.classList.add('bg-blue-100');
  };
  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('bg-blue-100');
  };
  const handleDrop = (idx) => (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-blue-100');
    if (dragSrcIdx.current !== null && dragSrcIdx.current !== idx) {
      const reordered = [...chapters];
      const [moved] = reordered.splice(dragSrcIdx.current, 1);
      reordered.splice(idx, 0, moved);
      if (typeof onReorder === 'function') onReorder(reordered);
    }
    dragSrcIdx.current = null;
  };

  return (
    <ul className="divide-y divide-gray-200 bg-white rounded shadow" data-draggable-list="chapter">
      {chapters.map((chapter, idx) => (
        <li
          key={idx}
          className="p-4 cursor-move hover:bg-gray-50 flex items-center"
          draggable
          onDragStart={handleDragStart(idx)}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver(idx)}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop(idx)}
          data-idx={idx}
        >
          {chapter.title || `Chapter ${idx + 1}`}
        </li>
      ))}
    </ul>
  );
}

export default ChapterList;
