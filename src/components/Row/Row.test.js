import { screen, render } from "@testing-library/react";
import Row from "./Row";

test('renders 16 <span> on page', () => {
  render(<Row/>);

  const skillsString = screen.getAllByTitle('skills string');
  expect(skillsString).toHaveLength(16);
})