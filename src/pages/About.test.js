import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from './About';
import { ThemeContext } from '../context/ThemeContext';
import { MemoryRouter } from 'react-router-dom';

const MockThemeProvider = ({ children, theme = 'light' }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

function renderComponent(themeState = 'light') {
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

    expect(title).toHaveClass('about-title--dark');
    expect(title).not.toHaveClass('about-title--light');
    expect(title).toBeInTheDocument();
  });
});
