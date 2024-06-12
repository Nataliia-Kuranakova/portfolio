import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonLink from './ButtonLink';

// import { ThemeContext } from '../context/ThemeContext';
import { renderWithTheme } from '../../testUtils';

// const MockThemeProvider = ({ children, theme = 'light' }) => {
//   return (
//     <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
//   );
// };

function renderComponent(themeState = 'light', icon = false, margin = false) {
  renderWithTheme(
    <ButtonLink
      href="https://example.com"
      buttonStyle="btn-style"
      arialLabel="example"
      icon={icon}
      margin={margin}
    >
      Click
    </ButtonLink>,
    { theme: themeState }
  );
}

describe('ButtonLink component', () => {
  test('renders correctly with required props', () => {
    renderComponent();

    const linkElement = screen.getByRole('link', { name: /example/i });
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
    expect(linkElement).toHaveClass('btn-style btn-style--dark');
    expect(linkElement).toBeInTheDocument();
  });

  test('applies the correct theme class based on context', () => {
    renderComponent('dark');
    const linkElement = screen.getByRole('link', { name: /example/i });
    expect(linkElement).toHaveClass('btn-style btn-style--light');
  });

  test('renders icon when icon prop is provided', () => {
    renderComponent('light', true, false);

    const iconElement = screen.getByTestId('link-button-icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('applies margin class when margin prop is true', () => {
    renderComponent('light', false, true);
    const margin = screen.getByRole('link', { name: /example/i });
    expect(margin).toHaveClass('space');
  });
});
