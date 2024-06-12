import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';
import { githubLink, linkedinLink } from '../../data/links';
import { renderWithTheme } from '../../testUtils';

function renderComponent(themeState = 'light', setTheme = jest.fn()) {
  renderWithTheme(<Footer />, { theme: themeState, setTheme });
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

    await userEvent.click(themeButton);

    expect(setTheme).toHaveBeenCalled();
    expect(setTheme).toHaveBeenCalledWith('dark');
  });
});
