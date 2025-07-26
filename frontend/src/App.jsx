import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Import pages (to be created)
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import ProjectPage from './pages/ProjectPage'
import EditorPage from './pages/EditorPage'
import ExportPage from './pages/ExportPage'

// Import components
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'

// Import toast notifications
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Protected routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Layout>
              <DashboardPage />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/project/:projectId" element={
          <ProtectedRoute>
            <Layout>
              <ProjectPage />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/editor/:sceneId" element={
          <ProtectedRoute>
            <Layout>
              <EditorPage />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/export/:projectId" element={
          <ProtectedRoute>
            <Layout>
              <ExportPage />
            </Layout>
          </ProtectedRoute>
        } />
      </Routes>
      
      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default App
