import { render, screen } from '@testing-library/react';
import { Welcome } from './Welcome';

test('render texst', () => {
  render(<Welcome />);
  expect(screen.getByText('Welcome GraficQL application')).toBeInTheDocument();
});
