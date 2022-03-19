import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, DocumentReference, setDoc } from 'firebase/firestore';

import { firebaseAuth, firebaseStore } from '../firebase';

import type { AuthForm } from '../types/forms/auth-form';

type UseRegister = [
  isRegistered: string,
  register: (authForm: AuthForm, setSubmitting: (isSubmitting: boolean) => void) => void
];

export const useRegister = (): UseRegister => {
  const [response, setResponse] = useState('');

  const onRegister = ({ email, password, username }: AuthForm, setSubmitting: (isSubmitting: boolean) => void) => {
    const userReference = doc(firebaseStore, 'users', email) as DocumentReference<Omit<AuthForm, 'password'>>;

    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => {
        setDoc(userReference, { username, email });
        setResponse('Вы успешно зарегистрировались');
      })
      .catch((reason) => {
        console.log(reason);
        setResponse('Ошибка регистрации при запросе');
      })
      .finally(() => setSubmitting(false));
  };

  return [response, onRegister];
};
