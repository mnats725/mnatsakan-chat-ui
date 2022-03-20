import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, DocumentReference, setDoc } from 'firebase/firestore';

import { firebaseAuth, firebaseStore } from '../firebase';

import { PAGE_ROUTES } from '../constants/page-routes';

import type { RegistrationFormValues } from '../types/forms/registration-form-values';
import type { UserInformation } from '../types/user-information';

type UseRegister = [
  isRegistered: string,
  register: (authForm: RegistrationFormValues, setSubmitting: (isSubmitting: boolean) => void) => void
];

export const useRegister = (): UseRegister => {
  const history = useHistory();
  const [response, setResponse] = useState('');

  const onRegister = (
    { email, password, username }: RegistrationFormValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(({ user }) => {
        const userReference = doc(firebaseStore, 'users', user.uid) as DocumentReference<UserInformation>;

        setDoc(userReference, { userId: user.uid, username, email: user.email });
        history.push(PAGE_ROUTES.main);
      })
      .catch(() => setResponse('Ошибка регистрации при запросе, похоже, такое пользователь уже существует'))
      .finally(() => setSubmitting(false));
  };

  return [response, onRegister];
};
