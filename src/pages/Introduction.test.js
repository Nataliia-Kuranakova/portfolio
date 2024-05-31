import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Introduction from './Introduction';

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
        <Introduction />
      </MemoryRouter>
    </MockThemeProvider>
  );
}

describe('Inroduction component', () => {
  test('renders subtitle with default (light) theme', () => {
    renderComponent();

    const subtitle = screen.getByText('developer');

    expect(subtitle).toHaveClass('dark-text-span');
    expect(subtitle).not.toHaveClass('light-text-span');
    expect(subtitle).toBeInTheDocument();
  });
  test('renders subtitle with dark theme', () => {
    renderComponent('dark');

    const subtitle = screen.getByText('developer');

    expect(subtitle).toHaveClass('light-text-span');
    expect(subtitle).not.toHaveClass('dark-text-span');
    expect(subtitle).toBeInTheDocument();
  });
});
