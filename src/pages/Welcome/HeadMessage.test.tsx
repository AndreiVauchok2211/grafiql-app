import { render, screen } from '@testing-library/react';
import { Welcome } from './Welcome';

test('render text', async () => {
  render(<Welcome />);
  expect(screen.getByText('Welcome GraficQL application')).toBeInTheDocument();
});
