import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword } from './../../firebase';
import styles from './Register.module.scss';
import { schema } from '../../schema/schema';
import { useForm } from 'react-hook-form';
import { AuthUser } from '../../types/types';
import { yupResolver } from '@hookform/resolvers/yup';

interface RegisterPageProps {
  translate: (key: string) => string;
}

export function Register({ translate }: RegisterPageProps) {
  const [user, loading] = useAuthState(auth);
  const history = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) history('/');
  }, [user, loading, history]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthUser>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: AuthUser) => {
    registerWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className={styles.register}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.register__container}
      >
        <input
          {...register('email')}
          className={styles.register__textBox}
          placeholder="E-mail"
        />
        <p>{errors.email?.message}</p>
        <input
          {...register('password')}
          className={styles.register__textBox}
          placeholder="Password"
        />
        <p>{errors.password?.message}</p>
        <input
          className={styles.register__btn}
          type="submit"
          value={translate(`register_button`)}
        />
        <div>
          {translate(`register_already`)}
          <Link to="/login" className={styles.register_link}>
            {translate(`register_login`)}
          </Link>
          {translate(`register_now`)}
        </div>
      </form>
    </div>
  );
}
