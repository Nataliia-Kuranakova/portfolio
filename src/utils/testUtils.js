import { ThemeContext } from '../context/ThemeContext';
import { render } from '@testing-library/react';

export const MockThemeProvider = ({
  children,
  theme = 'light',
  setTheme = jest.fn(),
  isHeaderFixed = false,
}) => {
  return (
    <ThemeContext.Provider value={{ theme, setTheme, isHeaderFixed }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const renderWithTheme = (
  ui,
  { theme = 'light', setTheme = jest.fn(), isHeaderFixed = false, ...options }
) => {
  return render(
    <MockThemeProvider
      theme={theme}
      setTheme={setTheme}
      isHeaderFixed={isHeaderFixed}
    >
      {ui}
    </MockThemeProvider>,
    options
  );
};
