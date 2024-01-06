import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from './../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { AuthUser } from '../../types/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../schema/schema';

export function Login() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthUser>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: AuthUser) => {
    try {
      await logInWithEmailAndPassword(data.email, data.password);
    } catch {
      alert('Incorrect login or password');
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/');
  }, [user, loading, navigate]);
  return (
    <div className={styles.login}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.login__container}
      >
        <input
          {...register('email')}
          className={styles.login__textBox}
          placeholder="E-mail"
        />
        <p>{errors.email?.message}</p>
        <input
          {...register('password')}
          className={styles.login__textBox}
          placeholder="Password"
        />
        <p>{errors.password?.message}</p>
        <input className={styles.login__btn} type="submit" value="Login" />
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
      </form>
    </div>
  );
}
