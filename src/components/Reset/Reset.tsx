import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth, sendPasswordReset } from './../../firebase';
import styles from './Reset.module.scss';
import { ResetAuthUser } from '../../types/types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaForReset } from '../../schema/schema';

export function Reset() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/dashboard');
  }, [user, loading, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetAuthUser>({
    resolver: yupResolver(schemaForReset),
  });

  const onSubmit = async (data: ResetAuthUser) => {
    try {
      await sendPasswordReset(data.email);
    } catch {
      alert('Incorrect e-mail');
    }
  };

  return (
    <div className={styles.reset}>
      <form onSubmit={handleSubmit(onSubmit)} className="reset__container">
        <input
          {...register('email')}
          className={styles.reset__textBox}
          placeholder="E-mail"
        />
        <p>{errors.email?.message}</p>
        <input
          className={styles.reset__btn}
          type="submit"
          value="Reset Pasword"
        />
        <div>
          Don not have an account?
          <Link to="/register" className={styles.reset_link}>
            Register
          </Link>
          now.
        </div>
      </form>
    </div>
  );
}
