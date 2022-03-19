import type { AuthForm } from '../../types/forms/auth-form';

const EmptyErrorNames: AuthForm = {
  email: 'Введите почту',
  password: 'Введите пароль',
  username: 'Введите имя',
};

const InvalidErrorNames = {
  email: 'Введена неверная почта',
  password: 'Неверный формат пароля',
} as const;

const isEmailValid = (email: string) =>
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);

const isPasswordValid = (password: string) =>
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(password);

export const validate = (values: AuthForm): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!values.email) {
    errors.email = EmptyErrorNames.email;
  }
  if (!values.username) {
    errors.username = EmptyErrorNames.username;
  }
  if (!values.password) {
    errors.password = EmptyErrorNames.password;
  }
  if (values.email && !isEmailValid(values.email)) {
    errors.email = InvalidErrorNames.email;
  }
  if (values.password && !isPasswordValid(values.password)) {
    errors.password = InvalidErrorNames.password;
  }

  return errors;
};
