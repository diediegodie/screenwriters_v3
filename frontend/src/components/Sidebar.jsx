// Sidebar.jsx
// Sidebar component for user/project navigation
// TailwindCSS for styling, modular, no business logic

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Projects', to: '/projects' },
  { label: 'Export', to: '/export' },
];

export default function Sidebar({ projects = [], currentProjectId }) {
  const location = useLocation();
  return (
    <aside className="h-full w-64 bg-gray-900 text-white flex flex-col border-r border-gray-800">
      <div className="p-4 text-2xl font-bold tracking-tight border-b border-gray-800">Writer Assistant</div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="mt-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`block px-4 py-2 rounded hover:bg-gray-800 transition-colors ${location.pathname.startsWith(item.to) ? 'bg-gray-800 font-semibold' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 px-4 text-xs uppercase tracking-wider text-gray-400">Your Projects</div>
        <ul className="mt-2 space-y-1 px-2">
          {projects.length === 0 ? (
            <li className="text-gray-500 px-2 py-1">No projects yet</li>
          ) : (
            projects.map((project) => (
              <li key={project.id}>
                <Link
                  to={`/projects/${project.id}`}
                  className={`block px-3 py-1 rounded hover:bg-gray-800 transition-colors ${currentProjectId === project.id ? 'bg-gray-800 font-semibold' : ''}`}
                >
                  {project.title}
                </Link>
              </li>
            ))
          )}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-800 text-sm text-gray-400">Logged in as <span className="font-semibold text-white">User</span></div>
    </aside>
  );
}
