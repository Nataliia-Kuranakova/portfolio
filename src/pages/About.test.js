import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from './About';
import { ThemeContext } from '../context/ThemeContext';

const MockThemeProvider = ({ children, theme = 'light' }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

function renderComponent(themeState = 'light') {
  render(
    <MockThemeProvider theme={themeState}>
      <About />
    </MockThemeProvider>
  );
}

describe('About component', () => {
  afterEach(() => {
    cleanup();
    document.body.style.overflow = 'auto';
  });

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
    expect(document.body.style.overflow).toBe('auto');
    renderComponent();
    expect(document.body.style.overflow).toBe('hidden');
  });

  test('reenables scrolling when component unmounts', () => {
    const { unmount } = render(
      <MockThemeProvider theme="light">
        <About />
      </MockThemeProvider>
    );

    expect(document.body.style.overflow).toBe('hidden');

    unmount();

    expect(document.body.style.overflow).toBe('auto');
  });
});
