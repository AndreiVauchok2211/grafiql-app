import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { LangContext } from '../../context/lang';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './Layout.module.scss';

export function Layout() {
  const {
    dispathc: { translate },
  } = useContext(LangContext);
  return (
    <div className={styles.container_app}>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer translate={translate} />
    </div>
  );
}
