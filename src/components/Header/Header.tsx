import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header_form}>
      <NavLink to="/">Welcome</NavLink>
      <NavLink to="/graphiql">GraphiQL</NavLink>
      <NavLink to="/signup">LogIn/SignUp</NavLink>
    </header>
  );
}
