import React from 'react'

function ProtectedRoute({ children }) {
  // For now, this is just a placeholder that renders children
  // In a complete implementation, this would check authentication status
  // and redirect to login if not authenticated
  
  const isAuthenticated = true // Placeholder - would check actual auth state
  
  if (!isAuthenticated) {
    // In a real app, redirect to login
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please sign in</h2>
          <a href="/login" className="btn btn-primary">
            Go to Login
          </a>
        </div>
      </div>
    )
  }
  
  return children
}

export default ProtectedRoute
