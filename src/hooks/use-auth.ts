import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, DocumentReference } from 'firebase/firestore';

import { firebaseAuth, firebaseStore } from '../firebase';

import type { UserInformation } from '../types/user-information';

export const useAuth = (): UserInformation | undefined => {
  const [userInformation, setUserInformation] = useState<UserInformation>();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (!user || !user.email) return;

      const userReference = doc(firebaseStore, 'users', user.email) as DocumentReference<
        Omit<UserInformation, 'userId'>
      >;

      getDoc(userReference).then((userDocument) => {
        const userData = userDocument.data();

        if (!userData) return;

        setUserInformation({ userId: user.uid, ...userData });
      });
    });
  }, []);

  return userInformation;
};
