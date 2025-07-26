import React from 'react'

function EditorPage() {
  return (
    <div className="h-screen flex flex-col">
      {/* Editor toolbar */}
      <div className="editor-toolbar">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12l6-6m-6 6l6 6" />
            </svg>
          </button>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Chapter 1 / Scene 1
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded font-bold">B</button>
          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded italic">I</button>
          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded underline">U</button>
          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2"></div>
          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Auto-saved</span>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      </div>
      
      {/* Editor content */}
      <div className="flex-1 flex">
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="editor-content">
              <h1 className="text-2xl font-bold mb-4">Scene Title</h1>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  This is where the rich text editor would be rendered. In a complete implementation,
                  this would be powered by Slate.js with full formatting capabilities, real-time
                  autosave, and collaborative editing features.
                </p>
                <p>
                  The editor would support:
                </p>
                <ul>
                  <li>Bold, italic, and underline formatting</li>
                  <li>Headers and paragraph styles</li>
                  <li>Lists and blockquotes</li>
                  <li>Footnotes and annotations</li>
                  <li>Real-time collaboration</li>
                  <li>Version history and restore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="w-80 border-l border-gray-200 dark:border-gray-700 p-4">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Scene Properties</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <label className="block text-gray-600 dark:text-gray-400">Word Count</label>
                  <div className="font-medium">1,247 words</div>
                </div>
                <div>
                  <label className="block text-gray-600 dark:text-gray-400">Last Modified</label>
                  <div className="font-medium">2 minutes ago</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Notes</h3>
              <textarea 
                className="input h-32 text-sm" 
                placeholder="Scene notes and reminders..."
              />
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Characters</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs">
                    J
                  </div>
                  <span>John Doe</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center text-white text-xs">
                    M
                  </div>
                  <span>Mary Smith</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditorPage
