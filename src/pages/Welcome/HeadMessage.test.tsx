import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { LangContext } from '../../context/lang';
import { Welcome } from './Welcome';

test('render text', async () => {
  const {
    dispathc: { translate },
  } = useContext(LangContext);

  render(
    // <LangContext.Provider
    //   value={{ state, dispathc: { setLanguage, translate } }}
    // >
    <Welcome translate={translate} />
    // </LangContext.Provider>
  );
  expect(screen.getByText(`${translate('welcome_title')}`)).toBeInTheDocument();
});
