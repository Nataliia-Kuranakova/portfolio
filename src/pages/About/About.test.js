import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { renderWithTheme } from '../../utils/testUtils';

import About from './About';

function renderComponent(themeState = 'light') {
  renderWithTheme(
    <MemoryRouter>
      <About />
    </MemoryRouter>,
    { theme: themeState }
  );
}

describe('About component', () => {
  test('renders title with default (light) theme', () => {
    renderComponent();

    const title = screen.getByRole('heading');

    expect(title).toHaveClass('about-title--light');
    expect(title).not.toHaveClass('about-title--dark');
    expect(title).toBeInTheDocument();
  });

  test('renders title with dark theme', () => {
    renderComponent('dark');

    const title = screen.getByRole('heading');

    expect(title).toHaveClass('about-title--dark');
    expect(title).not.toHaveClass('about-title--light');
    expect(title).toBeInTheDocument();
  });
});
