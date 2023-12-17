import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header_form}>
      <NavLink to="/">Welcome</NavLink>
      <NavLink to="/graphiql">GraphiQL</NavLink>
      <NavLink to="/signup">LogIn/SignUp</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/reset">Reset</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </header>
  );
}
