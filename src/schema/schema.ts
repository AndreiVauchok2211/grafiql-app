import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email().required('e-mail is required'),
  password: yup
    .string()
    .required('password is required')
    .matches(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
      'password should contain one lowercase character, one uppercase, one special character, one number'
    ),
});

export const schemaForReset = yup.object().shape({
  email: yup.string().email().required('e-mail is required'),
});
