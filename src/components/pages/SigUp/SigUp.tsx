import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/[A-Z]/, 'Please enter first uppercased letter')
    .required(),
  age: yup.number().positive().integer().required(),
  sex: yup
    .mixed()
    .oneOf(['male', 'female', 'other'] as const)
    .defined(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, 'Pasword must be 8 or more characters')
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])\w+/,
      'Password ahould contain at least one uppercase and lowercase character'
    )
    .matches(/\d/, 'Password should contain at least one number')
    .matches(
      /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
      'Password should contain at least one special character'
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(),
});
type FormData = yup.InferType<typeof schema>;

export function SigUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmitHundler(data: FormData) {
    console.log({ data });
    reset();
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <form onSubmit={handleSubmit(onSubmitHundler)}>
        <h2>LogIN/SignUP</h2>
        <input
          {...register('firstName')}
          placeholder="firstName"
          type="firstName"
          required
        />
        <p>{errors.firstName?.message}</p>
        <input {...register('age')} placeholder="age" type="age" required />
        <p>{errors.age?.message}</p>
        <select {...register('sex')} required>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>

        <p>{errors.age?.message}</p>
        <input
          {...register('email')}
          placeholder="email"
          type="email"
          required
        />
        <p>{errors.email?.message}</p>
        <input
          {...register('password')}
          placeholder="password"
          type="password"
          required
        />
        <p>{errors.password?.message}</p>
        <input
          {...register('confirmPassword')}
          placeholder="password"
          type="password"
          required
        />
        <p>{errors.password?.message}</p>

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
