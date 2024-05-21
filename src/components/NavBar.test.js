// import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';
import { MemoryRouter } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const MockThemeProvider = ({ children, isHeaderFixed = false }) => {
  return (
    <ThemeContext.Provider value={{ isHeaderFixed }}>
      {children}
    </ThemeContext.Provider>
  );
};

function createComponent(state = false) {
  render(
    <MemoryRouter>
      <MockThemeProvider isHeaderFixed={state}>
        <NavBar />
      </MockThemeProvider>
    </MemoryRouter>
  );
}

describe('NavBar', () => {
  test('renders NavBar with default (non-fixed header)', () => {
    createComponent();

    const header = screen.getByRole('banner');
    expect(header).toHaveClass('header');
    expect(header).not.toHaveClass('fixed');

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('navigation');
    expect(nav).not.toHaveClass('fixed-nav');

    const rootPath = '/portfolio';

    const links = [
      { name: 'home', path: rootPath },
      { name: 'about', path: `${rootPath}/about` },
      { name: 'projects', path: `${rootPath}/projects` },
    ];

    for (let link of links) {
      const navigationLink = screen.getByRole('link', {
        name: new RegExp(link.name, 'i'),
      });

      expect(navigationLink).toBeInTheDocument();
      expect(navigationLink).toHaveAttribute('href', link.path);
    }
  });

  test('renders NavBar with fixed header', () => {
    createComponent(true);

    const header = screen.getByRole('banner');
    expect(header).toHaveClass('header fixed');

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('navigation fixed-nav');
  });
});
