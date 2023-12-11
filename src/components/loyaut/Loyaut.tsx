import { NavLink, Outlet } from 'react-router-dom';
import styles from './Loyaut.module.scss';

export function Loyaut() {
  return (
    <div className={styles.container_app}>
      <header className={styles.header_form}>
        <NavLink to="/">Welcome</NavLink>
        <NavLink to="/graphiql">GraphiQL</NavLink>
        <NavLink to="/signup">LogIn/SignUp</NavLink>
      </header>
      <Outlet />
      <footer>GraphicQL2023</footer>
    </div>
  );
}
