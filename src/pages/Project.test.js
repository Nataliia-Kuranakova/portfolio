import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Project from './Project';

import { ThemeContext } from '../context/ThemeContext';
import { MemoryRouter } from 'react-router-dom';

const MockThemeProvider = ({ children, theme = 'light' }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

function renderComponent(themeState = 'light') {
  const projectContent =  {
    id: '01',
    project: 'Portfolio',
    project_path: 'Portfolio',
    // descr: <PortfolioProject />,
  }

  render(
    <MockThemeProvider theme={themeState}>
      <MemoryRouter>
        <Project projectContent={projectContent}/>
      </MemoryRouter>
    </MockThemeProvider>
  );
}

describe('Project component', () => {
  test('renders number of project with default (light) theme', () => {
    renderComponent();

    const projectNumber = screen.getByTestId('project-number');
    expect(projectNumber).toHaveClass('number--light number-dark')
    expect(projectNumber).not.toHaveClass('number--dark number-light')
    expect(projectNumber).toBeInTheDocument();
  });

  test('renders number of project with dark theme', () => {
    renderComponent('dark');

    const projectNumber = screen.getByTestId('project-number');
    expect(projectNumber).toHaveClass('number--dark number-light')
    expect(projectNumber).not.toHaveClass('number--light number-dark')
    expect(projectNumber).toBeInTheDocument();
  });
});
