import type { LoginFormValues } from '../../../types/forms/login-form-values';

const EmptyErrorNames: LoginFormValues = {
  email: 'Введите почту',
  password: 'Введите пароль',
};

const InvalidErrorNames = {
  email: 'Введена неверная почта',
  password: 'Неверный формат пароля',
} as const;

const isEmailValid = (email: string) =>
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);

const isPasswordValid = (password: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);

export const validate = (values: LoginFormValues): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!values.email) {
    errors.email = EmptyErrorNames.email;
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
