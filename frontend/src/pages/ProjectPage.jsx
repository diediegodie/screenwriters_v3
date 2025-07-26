import React from 'react'

function ProjectPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Project Title
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Organize your chapters and scenes
        </p>
      </div>
      
      <div className="mb-6 flex gap-4">
        <button className="btn btn-primary">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          New Chapter
        </button>
        <button className="btn btn-secondary">
          Export Project
        </button>
      </div>
      
      <div className="space-y-6">
        {/* Placeholder chapters */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Chapter {i}</h2>
              <button className="btn btn-ghost btn-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((j) => (
                <div key={j} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Scene {j}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Brief scene description goes here...
                  </p>
                  <div className="text-xs text-gray-500">
                    Last edited 1 hour ago
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectPage
