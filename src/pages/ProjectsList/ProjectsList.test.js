import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { projects } from '../../data/separate-projects';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { renderWithTheme } from '../../testUtils';

import ProjectsList from './ProjectsList';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

function renderComponent(themeState = 'light') {
  renderWithTheme(
    <MemoryRouter>
      <ProjectsList />
    </MemoryRouter>,
    { theme: themeState }
  );
}

const rootPath = '/portfolio/projects/';

describe('ProjectsList component', () => {
  test('renders list of projects with default (light) theme', () => {
    renderComponent();

    const projectsListItem = screen.getAllByRole('listitem');
    expect(projectsListItem).toHaveLength(projects.length);

    for (let item of projectsListItem) {
      expect(item).toHaveClass('projects-list-item--dark');
      expect(item).not.toHaveClass('projects-list-item--light');
    }
  });

  test('navigates to project when list item is clicked', async () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    renderComponent();

    for (let item of projects) {
      const projectItem = screen.getByRole('listitem', {
        name: `View project ${item.project}`,
      });

      expect(projectItem).toBeInTheDocument();

      await userEvent.click(projectItem);

      expect(navigate).toHaveBeenCalled();
      expect(navigate).toHaveBeenCalledWith(`${rootPath}${item.project_path}`);
    }
  });

  test('navigates to project when Enter key is pressed', async () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    renderComponent();

    for (let item of projects) {
      const projectItem = screen.getByRole('listitem', {
        name: `View project ${item.project}`,
      });

      expect(projectItem).toBeInTheDocument();

      projectItem.focus();
      await userEvent.keyboard('{Enter}');

      expect(navigate).toHaveBeenCalled();
      expect(navigate).toHaveBeenCalledWith(`${rootPath}${item.project_path}`);
    }
  });

  test('renders list of projects with dark theme', () => {
    renderComponent('dark');

    const projectsListItem = screen.getAllByRole('listitem');
    expect(projectsListItem).toHaveLength(projects.length);

    for (let item of projectsListItem) {
      expect(item).toHaveClass('projects-list-item--light');
      expect(item).not.toHaveClass('projects-list-item--dark');
    }
  });
});
