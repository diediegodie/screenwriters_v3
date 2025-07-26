// MockDndTest.jsx
// Dedicated page for Playwright E2E drag-and-drop tests
// Renders ChapterList and SceneList with static sample data

import React, { useState } from 'react';
import ChapterList from '../components/ChapterList.jsx';
import SceneList from '../components/SceneList.jsx';

const initialChapters = [
  { title: 'Chapter 1' },
  { title: 'Chapter 2' },
  { title: 'Chapter 3' },
];
const initialScenes = [
  { title: 'Scene A' },
  { title: 'Scene B' },
  { title: 'Scene C' },
];

export default function MockDndTest() {
  const [chapters, setChapters] = useState(initialChapters);
  const [scenes, setScenes] = useState(initialScenes);

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-xl font-bold">Mock ChapterList</h2>
      <div className="max-w-md mx-auto">
        <ChapterList chapters={chapters} onReorder={setChapters} />
      </div>
      <h2 className="text-xl font-bold">Mock SceneList</h2>
      <div className="max-w-md mx-auto">
        <SceneList scenes={scenes} onReorder={setScenes} />
      </div>
    </div>
  );
}
