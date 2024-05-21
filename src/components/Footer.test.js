import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { ThemeContext } from '../context/ThemeContext';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';
import { githubLink, linkedinLink } from '../data/links';

const MockThemeProvider = ({
  children,
  theme = 'light',
  setTheme = jest.fn(),
}) => {
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function renderComponent(themeState = 'light', setTheme) {
  render(
    <MockThemeProvider theme={themeState} setTheme={setTheme}>
      <Footer />
    </MockThemeProvider>
  );
}

describe('Footer component', () => {
  test('renders Footer with default theme', () => {
    renderComponent();

    const themeButton = screen.getByLabelText('change theme');
    expect(themeButton).toHaveClass('footer-mode--dark');
    expect(themeButton).not.toHaveClass('footer-mode--light');

    const links = [
      { name: 'github', path: githubLink },
      { name: 'linkedin', path: linkedinLink },
    ];

    for (let link of links) {
      const socialLinks = screen.getByRole('link', {
        name: new RegExp(link.name, 'i'),
      });

      expect(socialLinks).toBeInTheDocument();
      expect(socialLinks).toHaveAttribute('href', link.path);
    }
  });

  test('it changes theme when the button mode is clicked', async () => {
    const setTheme = jest.fn();
    renderComponent('light', setTheme);

    const themeButton = screen.getByLabelText('change theme');
    expect(themeButton).toHaveClass('footer-mode--dark');
    expect(themeButton).not.toHaveClass('footer-mode--light');

    user.click(themeButton);

    expect(setTheme).toHaveBeenCalled();
    expect(setTheme).toHaveBeenCalledWith('dark');
  });
});
