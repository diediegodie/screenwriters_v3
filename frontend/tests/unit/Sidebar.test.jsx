// Sidebar.test.js
// Tests for Sidebar component: normal, edge, and failure cases
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Sidebar from '../../src/components/Sidebar.jsx';

describe('Sidebar', () => {
  it('renders navigation links and project list (normal case)', () => {
    const projects = [
      { id: '1', title: 'Project One' },
      { id: '2', title: 'Project Two' },
    ];
    render(
      <MemoryRouter>
        <Sidebar projects={projects} currentProjectId="1" />
      </MemoryRouter>
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Export')).toBeInTheDocument();
    expect(screen.getByText('Project One')).toBeInTheDocument();
    expect(screen.getByText('Project Two')).toBeInTheDocument();
  });

  it('shows message when no projects exist (edge case)', () => {
    render(
      <MemoryRouter>
        <Sidebar projects={[]} />
      </MemoryRouter>
    );
    expect(screen.getByText('No projects yet')).toBeInTheDocument();
  });

  it('renders without crashing if projects prop is missing (failure case)', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(screen.getByText('No projects yet')).toBeInTheDocument();
  });
});
