import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { LangContext } from '../../context/lang';
import { Welcome } from './Welcome';

test('render text', async () => {
  const {
    dispathc: { translate },
  } = useContext(LangContext);

  render(<Welcome translate={translate} />);
  expect(screen.getByText('Welcome GraficQL application')).toBeInTheDocument();
});
