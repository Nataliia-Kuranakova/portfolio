import { screen, within } from '@testing-library/react';
import TableList from './TableList';
import '@testing-library/jest-dom/extend-expect';
import { portfolioGoals, journayCastGoals } from '../../data/goals-list';

import { renderWithTheme } from '../../testUtils';

function renderComponent(themeState = 'light', list) {
  renderWithTheme(<TableList list={list} />, { theme: themeState });
}

describe('TableList component', () => {
  test('renders portfolio goals correctly', () => {
    renderComponent('light', portfolioGoals);

    for (let title of portfolioGoals.titles) {
      const heading = screen.getByText(title);
      expect(heading).toBeInTheDocument();
    }

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(
      portfolioGoals.lists.flat().length / portfolioGoals.titles.length
    );

    listItems.forEach((listItem) => {
      const paragraphs = within(listItem).getAllByTestId('paragraph');
      expect(paragraphs).toHaveLength(portfolioGoals.titles.length);
    });
  });

  test('renders journayCastGoals goals correctly', () => {
    renderComponent('light', journayCastGoals);

    for (let title of journayCastGoals.titles) {
      const heading = screen.getByText(title);
      expect(heading).toBeInTheDocument();
    }

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(
      journayCastGoals.lists.flat().length / journayCastGoals.titles.length
    );

    listItems.forEach((listItem) => {
      const paragraphs = within(listItem).getAllByTestId('paragraph');
      expect(paragraphs).toHaveLength(journayCastGoals.titles.length);
    });
  });

  test('applies correct classes based on default (light) theme', () => {
    renderComponent('light', portfolioGoals);

    const backgroundGoals = screen.getByText(portfolioGoals.lists[0][0]);
    expect(backgroundGoals).toHaveClass('project-goals-item-dark-bg');
    expect(backgroundGoals).not.toHaveClass('project-goals-item-light-bg');
  });

  test('applies correct classes based on dark theme', () => {
    renderComponent('dark', portfolioGoals);

    const backgroundGoals = screen.getByText(portfolioGoals.lists[0][0]);
    expect(backgroundGoals).toHaveClass('project-goals-item-light-bg');
    expect(backgroundGoals).not.toHaveClass('project-goals-item-dark-bg');
  });
});
