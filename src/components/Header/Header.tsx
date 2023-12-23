import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { LanguagePicker } from '../SharedComponent';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useState } from 'react';
import { clsx } from '../../utils/clsx';

export function Header() {
  const [user] = useAuthState(auth);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY <= 40) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <header
      className={
        color ? styles.header_form : clsx(styles.header_form, styles.header_bg)
      }
    >
      <LanguagePicker />
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
