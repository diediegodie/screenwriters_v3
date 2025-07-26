
import Sidebar from './Sidebar';

function Layout({ children }) {
  // Placeholder: projects and currentProjectId would come from context or props in a real app
  const projects = [
    { id: '1', title: 'Sample Project 1' },
    { id: '2', title: 'Sample Project 2' },
  ];
  const currentProjectId = '1';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <Sidebar projects={projects} currentProjectId={currentProjectId} />
      <div className="flex-1 flex flex-col">
        {/* Optionally, keep header here if needed */}
        {/* <header>...</header> */}
        <main className="flex-1 py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
