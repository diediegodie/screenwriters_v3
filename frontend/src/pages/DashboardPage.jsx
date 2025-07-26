import React from 'react'

function DashboardPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Your Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage and organize your writing projects
        </p>
      </div>
      
      <div className="mb-6">
        <button className="btn btn-primary">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          New Project
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder project cards */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="card card-hover p-6">
            <h3 className="text-xl font-semibold mb-2">Sample Project {i}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A placeholder project for demonstration purposes.
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>5 chapters</span>
              <span>Last edited 2 days ago</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
