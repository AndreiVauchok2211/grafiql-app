import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import styles from './Layout.module.scss';

export function Layout() {
  return (
    <div className={styles.container_app}>
      {/* <header className={styles.header_form}>
        <NavLink to="/">Welcome</NavLink>
        <NavLink to="/graphiql">GraphiQL</NavLink>
        <NavLink to="/signup">LogIn/SignUp</NavLink>
      </header> */}
      <Header />
      <div>
        <Outlet />
      </div>
      <footer>GraphicQL2023</footer>
    </div>
  );
}
