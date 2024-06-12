import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { renderWithTheme } from '../../utils/testUtils';

import Introduction from './Introduction';

function renderComponent(themeState = 'light') {
  renderWithTheme(
    <MemoryRouter>
      <Introduction />
    </MemoryRouter>,
    { theme: themeState }
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
