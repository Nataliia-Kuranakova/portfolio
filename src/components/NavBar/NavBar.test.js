import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { renderWithTheme } from '../../utils/testUtils';

import NavBar from './NavBar';

function renderComponent(scrollState = false) {
  renderWithTheme(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>,
    { isHeaderFixed: scrollState }
  );
}

describe('NavBar component', () => {
  test('renders NavBar with default (non-fixed header)', () => {
    renderComponent();

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
    renderComponent(true);

    const header = screen.getByRole('banner');
    expect(header).toHaveClass('header fixed');

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('navigation fixed-nav');
  });
});
