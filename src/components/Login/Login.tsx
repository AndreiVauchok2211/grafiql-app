import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from './../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from './Login.module.scss';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/');
  }, [user, loading, navigate]);
  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <input
          type="text"
          className={styles.login__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className={styles.login__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className={styles.login__btn}
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <div>
          <Link to="/reset" className={styles.login_link}>
            Forgot Password
          </Link>
        </div>
        <div>
          Do not have an account?
          <Link to="/register" className={styles.login_link}>
            Register
          </Link>
          now.
        </div>
      </div>
    </div>
  );
}
