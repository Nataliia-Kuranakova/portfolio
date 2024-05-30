import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from './About';
import { ThemeContext } from '../context/ThemeContext';
import { MemoryRouter, useLocation } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

const MockThemeProvider = ({ children, theme = 'light' }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

function renderComponent(themeState = 'light', pathname = '/') {
  useLocation.mockReturnValue({ pathname });
  render(
    <MockThemeProvider theme={themeState}>
      <MemoryRouter>
        <About />
      </MemoryRouter>
    </MockThemeProvider>
  );
}

describe('About component', () => {
  test('renders title with default (light) theme', () => {
    renderComponent();

    const title = screen.getByRole('heading');

    expect(title).toHaveClass(' about-title--light');
    expect(title).not.toHaveClass('about-title--dark');
    expect(title).toBeInTheDocument();
  });

  test('renders title with dark theme', () => {
    renderComponent('dark');

    const title = screen.getByRole('heading');

    expect(title).toHaveClass(' about-title--dark');
    expect(title).not.toHaveClass('about-title--light');
    expect(title).toBeInTheDocument();
  });

  test('disables scrolling on the page', () => {
    renderComponent('light', '/portfolio');
    expect(document.body).toHaveClass('scroll-hidden');
  });

  test('does not disable scrolling on the page when location does not match', () => {
    renderComponent('light', '/home');

    expect(document.body).not.toHaveClass('scroll-hidden');
  });
});
