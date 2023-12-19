import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

export function Header() {
  const [user] = useAuthState(auth);
  return (
    <header className={styles.header_form}>
      <NavLink to="/">Welcome</NavLink>
      {user ? (
        <>
          <NavLink to="/graphiql">GraphiQL</NavLink>
          <NavLink to="/logout">LogOut</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/reset">Reset</NavLink>
        </>
      )}
    </header>
  );
}
