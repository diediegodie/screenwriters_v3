import React from 'react'

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Writer & Screenwriter
            <span className="text-primary-600 dark:text-primary-400"> Assistant</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            A modern, offline-first tool for writers, screenwriters, and content creators. 
            Organize your projects, write with an advanced editor, and export in multiple formats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="/register" 
              className="btn btn-primary text-lg px-8 py-3"
            >
              Get Started Free
            </a>
            <a 
              href="/login" 
              className="btn btn-secondary text-lg px-8 py-3"
            >
              Sign In
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rich Text Editor</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced editor with autosave, version control, and formatting options.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Project Organization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Organize your work into projects, chapters, and scenes with drag-and-drop.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Offline First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Work offline with automatic sync when you're back online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
