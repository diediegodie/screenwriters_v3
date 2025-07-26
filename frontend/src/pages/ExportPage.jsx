import React from 'react'

function ExportPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Export Project
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Export your project in various formats
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Export options */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Export Formats</h2>
          
          <div className="space-y-4">
            {[
              { name: 'PDF', description: 'Portable Document Format', icon: '📄' },
              { name: 'DOCX', description: 'Microsoft Word Document', icon: '📝' },
              { name: 'Markdown', description: 'Plain text with formatting', icon: '📋' },
              { name: 'Fountain', description: 'Screenwriting format', icon: '🎬' },
            ].map((format) => (
              <div key={format.name} className="card p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{format.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{format.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {format.description}
                    </p>
                  </div>
                  <button className="btn btn-primary btn-sm">
                    Export
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Export settings */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Export Settings</h2>
          
          <div className="card p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Include Chapters</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Chapter 1
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Chapter 2
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Chapter 3
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Font Size</label>
              <select className="input">
                <option>12pt</option>
                <option>14pt</option>
                <option>16pt</option>
              </select>
            </div>
            
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Include title page
              </label>
            </div>
            
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Include table of contents
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExportPage
