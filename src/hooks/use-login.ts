import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { firebaseAuth } from '../firebase';

import type { LoginFormValues } from '../types/forms/login-form-values';

type UseRegister = [
  response: string,
  register: (authForm: LoginFormValues, setSubmitting: (isSubmitting: boolean) => void) => void
];

export const useLogin = (): UseRegister => {
  const [response, setResponse] = useState('');

  const onLogin = ({ email, password }: LoginFormValues, setSubmitting: (isSubmitting: boolean) => void) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => setResponse('Вы успешно авторизовались'))
      .catch(() => setResponse('Неверный логин или пароль'))
      .finally(() => setSubmitting(false));
  };

  return [response, onLogin];
};
